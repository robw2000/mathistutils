var util = require('util')
  , underscore = require('underscore');

// Extend underscore
var MathistUtils = module.exports = underscore;

MathistUtils.ulamNumber = function(num) {var count = 0; while (num > 1) {num = (num % 2 == 0) ? num / 2 : 3 * num + 1; count++;}; return count;}
MathistUtils.TestObj = function(index) {this.index = index; this.ulam = MathistUtils.ulamNumber(index);}
MathistUtils.range_defval = function(s, e, v) {var d = (v !== undefined); var r = []; for (var i = s; i < e; i++) {r.push(d?v:i)}; return r;}
MathistUtils.copyArray = function(a) {return a.map(function(x){return x;});}
MathistUtils.numsort = function(l) {l.sort(function(a,b){return a-b})}

// Sort an array of numeric arrays
// Example: [[0, 3, 5], [2, 5, 8], [0, 1, 2]] => [[0, 1, 2], [0, 3, 5], [2, 5, 8]]
MathistUtils.sortnumarrays = function(l, sortDesc) {
  var mod = (sortDesc) ? -1 : 1;
  l.sort(function(l1, l2){
    if (l1.length !== l2.length) return mod * (l1.length - l2.length);

    for (var i = 0; i < l1.length; i++) {
      if (l1[i] !== l2[i]) return mod * (l1[i] - l2[i]);
    }

    return 0;
  });
};

// This doesn't work with objects
MathistUtils.sameContents = function(l1, l2) {
  if (l1.length !== l2.length) return false;
  var a1 = MathistUtils.copyArray(l1).sort();
  var a2 = MathistUtils.copyArray(l2).sort();
  for (var i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

// Grab all the util functions
MathistUtils.format = util.format;
MathistUtils.debug = util.debug;
MathistUtils.error = util.error;
MathistUtils.puts = util.puts;
MathistUtils.print = util.print;
MathistUtils.log = util.log;
MathistUtils.inspect = util.inspect;
MathistUtils.isArray = util.isArray;
MathistUtils.isRegExp = util.isRegExp;
MathistUtils.isDate = util.isDate;
MathistUtils.isError = util.isError;
MathistUtils.inherits = util.inherits;
