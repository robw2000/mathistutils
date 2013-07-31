var assert = require('assert')
  , utils = require('../mathistutils');

describe('MathistUtils.TestObj tests', function () {

  it ('should map positive integers to test objects with index = i and ulam = ulamConjCount(i)', function (done) {
    var TestObject = utils.TestObj;
    var expectedUlams = [0, 0, 1, 7, 2, 5, 8, 16, 3, 19, 6, 14, 9, 9, 17, 17, 4, 12, 20, 20];
    for (var i = 0; i < 20; i++) {
      var test = new TestObject(i);
      assert.equal(i, test.index);
      assert.equal(expectedUlams[i], test.ulam);
    }
    done();
  });
});
