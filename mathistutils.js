var util = require('util')
  , underscore = require('underscore');

// Extend underscore
var mu = module.exports = underscore;

mu.ulamConjCount = function(num) {var count = 0; while (num > 1) {num = (num % 2 == 0) ? num / 2 : 3 * num + 1; count++;}; return count;}
mu.TestObj = function(index) {this.index = index; this.ulam = mu.ulamConjCount(index);}
mu.copyArray = function(a) {var b = []; a.forEach(function(x){b.push(x);}); return b;}
mu.copyNestedArray = function(a) {var b = []; a.forEach(function(x){b.push(mu.isArray(x)?mu.copyNestedArray(x):x);}); return b;}
mu.range_defval = function(s, e, v) {var d = (v !== undefined); if (mu.isArray(v)) {v = mu.copyArray(v)}; var r = []; for (var i = s; i < e; i++) {r.push(d?mu.isArray(v)?mu.copyArray(v):v:i)}; return r;}
mu.numsort = function(l) {l.sort(function(a,b){return a-b})}
mu.sum = function(l) {return (l.length > 0) ? mu.reduce(l, function(memo, num){return memo + num}) : 0}
mu.average = function(l) {return (l.length > 0) ? mu.sum(l) / l.length : 0}


// Sort an array of numeric arrays
// Example: [[0, 3, 5], [2, 5, 8], [0, 1, 2]] => [[0, 1, 2], [0, 3, 5], [2, 5, 8]]
mu.sortnumarrays = function(l, sortDesc, internalSortDesc) {
  var mod = (sortDesc) ? -1 : 1;
  var modInt = (internalSortDesc) ? -1 : 1;
  l.forEach(function(sub) {sub.sort(function(a, b) { return modInt * (a - b); });});
  l.sort(function(l1, l2){
    if (l1.length !== l2.length) return mod * (l1.length - l2.length);

    for (var i = 0; i < l1.length; i++) {
      if (l1[i] !== l2[i]) return mod * (l1[i] - l2[i]);
    }

    return 0;
  });
};

// This doesn't work with objects
mu.sameContents = function(l1, l2) {
  if (l1.length !== l2.length) return false;
  var a1 = mu.copyArray(l1).sort();
  var a2 = mu.copyArray(l2).sort();
  for (var i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
}

// Grab all the util functions
mu.format = util.format;
mu.debug = util.debug;
mu.error = util.error;
mu.puts = util.puts;
mu.print = util.print;
mu.log = util.log;
mu.inspect = util.inspect;
mu.isArray = util.isArray;
mu.isRegExp = util.isRegExp;
mu.isDate = util.isDate;
mu.isError = util.isError;
mu.inherits = util.inherits;
