var assert = require('assert')
  , utils = require('../mathistutils');


describe('MathistUtils.average tests', function () {

  it ('should return the average of all the numbers in an array', function (done) {
    assert.equal(5, utils.average(utils.range(0, 11)));
    assert.equal(13, utils.average([1, 5, 2, 0, 0, 0, 83]));
    assert.equal(0, utils.average([0, 0, 0]));
    assert.equal(0, utils.average([]));
    done();
  });
});
