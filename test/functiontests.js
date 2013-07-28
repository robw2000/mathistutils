var assert = require('assert')
  , utils = require('../mathistutils');


describe('MathistUtils.ulamConjCount tests', function () {

  // ulamNumber
  it ('should map positive integers to valid Ulam numbers', function (done) {
    var expectedUlams = [0, 0, 1, 7, 2, 5, 8, 16, 3, 19, 6, 14, 9, 9, 17, 17, 4, 12, 20, 20];
    for (var i = 0; i < 20; i++) {
      var ulam = utils.ulamConjCount(i)
      //console.log('testing ulamConjCount(' + i + ') is returning ' + ulam + ' and should be ' + expectedUlams[i]);
      assert.equal(expectedUlams[i], ulam);
    }
    done();
  });
});

describe('MathistUtils.TestObject tests', function () {

  // ulamNumber
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
