var compare = function(a, b) {
  if (a && !b || !a && b) {
    return false;
  }
  for (var key in a) {
    if (isNaN(a[key]) && isNaN(b[key]))
      continue;
    if (a.hasOwnProperty(key) && !b.hasOwnProperty(key)) {
      return false;
    }    
    if (a[key] !== b[key]) {
      return false;
    }
  }
  for (var key in b) {
    if (isNaN(a[key]) && isNaN(b[key]))
      continue;
    if (b.hasOwnProperty(key) && !a.hasOwnProperty(key)) {
      return false;
    }    
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

var a = {x:1, y:undefined, z:NaN};
var b = {x:1, y:undefined, z:NaN};
var c = {x:1};
var d = {x:1, y:2};
var e;
var f = {x:1};
console.log(compare(a,b));
console.log(compare(c,d));
console.log(compare(e,f));