var assert = require('assert')
  , utils = require('../mathistutils');

describe('MathistUtils.range_defval tests', function () {

  it ('should make an array of 5 values, each set to null', function (done) {
    var defval = null;
    var result = utils.range_defval(0, 5, defval);
    assert.equal(5, result.length);
    for (var i = 0; i < 5; i++) {
      assert.equal(defval, result[i]);
    }
    done();
  });

  it ('should make an array of 5 values, each set to -1', function (done) {
    var defval = -1;
    var result = utils.range_defval(0, 5, defval);
    assert.equal(5, result.length);
    for (var i = 0; i < 5; i++) {
      assert.equal(defval, result[i]);
    }
    done();
  });

  it ('should make an array of 5 values, each set to 0', function (done) {
    var defval = 0;
    var result = utils.range_defval(0, 5, defval);
    assert.equal(5, result.length);
    for (var i = 0; i < 5; i++) {
      assert.equal(defval, result[i]);
    }
    done();
  });

  it ('should make an array of 5 values, each set to false', function (done) {
    var defval = false;
    var result = utils.range_defval(0, 5, defval);
    assert.equal(5, result.length);
    for (var i = 0; i < 5; i++) {
      assert.equal(defval, result[i]);
    }
    done();
  });

  it ('should make an array of 5 values, each set to true', function (done) {
    var defval = true;
    var result = utils.range_defval(0, 5, defval);
    assert.equal(5, result.length);
    for (var i = 0; i < 5; i++) {
      assert.equal(defval, result[i]);
    }
    done();
  });

  it ('should make an array of 5 values, each set to []', function (done) {
    var defval = [];
    var result = utils.range_defval(0, 5, defval);
    assert.equal(5, result.length);
    for (var i = 0; i < 5; i++) {
      assert(utils.isArray(result[i]));
      assert.equal(0, result[i].length);
    }
    done();
  });

  it ('should make an array of 5 values, each set to [0]', function (done) {
    var defval = [0];
    var result = utils.range_defval(0, 5, defval);
    assert.equal(5, result.length);

    defval[0] = -1;
    for (var i = 0; i < 5; i++) {
      assert(utils.isArray(result[i]));
      assert.equal(1, result[i].length);
      assert.equal(0, result[i][0]);
      result[i][0] = i + 10;
    }
    assert.equal(10, result[0][0]);
    done();
  });

});
