var assert = require('assert')
  , utils = require('../mathistutils');


describe('MathistUtils.copyNestedArray tests', function () {

  it ('should make a duplicate array', function (done) {
    var a = [0, [1, 1, 1], [2, [2, 2]], ['a', 'b', 'c', 3], [[0], [1], [2]]];
    var dup = utils.copyNestedArray(a);
    
    //verify that changes to the original array
    //do not change the new array
    //and verify that changes to new array 
    //do not change the original array
    assert.equal(a.length, dup.length);
    for (var i = 0; i < a.length; i++) {
      if (utils.isArray(a[i])) {
        assert.equal(a[i].length, dup[i].length);
        for (var j = 0; j < a[i].length; j++) {
          if (utils.isArray(a[i][j])) {
            assert.equal(a[i][j].length, dup[i][j].length);
            for (var k = 0; k < a[i][j].length; k++) {
              var origval = a[i][j][k];
              assert.equal(origval, dup[i][j][k]);
              a[i][j][k] = 99;
              assert.equal(origval, dup[i][j][k]);
              a[i][j][k] = origval;
              dup[i][j][k] = 99;
              assert.equal(origval, a[i][j][k]);
            }
          } else {
            var origval = a[i][j];
            assert.equal(origval, dup[i][j]);
            a[i][j] = 99;
            assert.equal(origval, dup[i][j]);
            a[i][j] = origval;
            dup[i][j] = 99;
            assert.equal(origval, a[i][j]);
          }
        }
      } else {
        var origval = a[i];
        assert.equal(origval, dup[i]);
        a[i] = 99;
        assert.equal(origval, dup[i]);
        a[i] = origval;
        dup[i] = 99;
        assert.equal(origval, a[i]);
      }
    }
    
    done();
  });
});
