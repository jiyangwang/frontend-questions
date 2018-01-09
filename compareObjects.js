var compare = function(a, b) {
  if (a && b && a.length !== b.length)
    return false;
  for (var key in a) {
    // NaN
    if (isNaN(a[key]) && isNaN(b[key]))
      continue;
    // undefined
    if (a.hasOwnProperty(key))
      if (!b.hasOwnProperty(key))
          return false;
    if (a[key] !== b[key])
      return false;
  }
  return true;
}

var a = {x:1, y:2, z: NaN};
var b = {x:1, y:2, z: NaN};
console.log(compare(a,b));