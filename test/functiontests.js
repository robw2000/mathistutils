var assert = require('assert')
  , utils = require('../mathistutils');


describe('MathistUtils.ulamConjCount tests', function () {

  it ('should map positive integers to valid Ulam numbers', function (done) {
    var expectedUlams = [0, 0, 1, 7, 2, 5, 8, 16, 3, 19, 6, 14, 9, 9, 17, 17, 4, 12, 20, 20];
    for (var i = 0; i < 20; i++) {
      var ulam = utils.ulamConjCount(i)
      assert.equal(expectedUlams[i], ulam);
    }
    done();
  });
});

describe('MathistUtils.TestObject tests', function () {

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

describe('MathistUtils.range_defval tests', function () {

  it ('should make an array of 5 values, each set to null', function (done) {
    var result = utils.range_defval(0, 5, null);
    assert.equal(5, result.length);
    for (var i = 0; i < 5; i++) {
      assert.equal(null, result[i]);
    }
    done();
  });
});
