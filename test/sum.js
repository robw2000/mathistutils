var assert = require('assert')
  , utils = require('../mathistutils');


describe('MathistUtils.sum tests', function () {

  it ('should return the sum of all the numbers in an array', function (done) {
    assert.equal(55, utils.sum(utils.range(0, 11)));
    assert.equal(94, utils.sum([1, 5, 2, 0, 0, 0, 86]));
    assert.equal(0, utils.sum([]));
    done();
  });
});
