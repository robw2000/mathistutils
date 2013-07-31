var assert = require('assert')
  , utils = require('../mathistutils');


describe('MathistUtils.copyArray tests', function () {

  it ('should make a duplicate array', function (done) {
    var a = [0, 1, 2, 3, 4, 5];
    var dup = utils.copyArray(a);
    
    //verify that changes to the original array
    //do not change the new array
    for (var i = 0; i < a.length; i++) a[i]++;
    for (var i = 0; i < dup.length; i++) assert.equal(i, dup[i]);
    
    //verify that changes to new array 
    //do not change the original array
    for (var i = 0; i < dup.length; i++) dup[i] *= -1;
    for (var i = 0; i < a.length; i++) assert.equal(i+1, a[i]);
    
    done();
  });
});
