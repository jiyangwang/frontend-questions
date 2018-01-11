function deepEqual(a, b) {
  if ((a && !b) || !a && b) {
    return false;
  }
  for (var key in a) {
    if (!b.hasOwnProperty(key)) {
      return false;
    }
    if (typeof a[key] === 'object') {
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    } else {
      if (a[key] !== b[key]) {
        return false;
      }
    }
  }
  return true;
}

var obj1 = { a: 1, b: { c: 'abc' }};
var obj2 = { a: 1, b: { c: 'de'  }};
var obj3 = { a: 1, b: { c: 'd' }};
var obj4 = { a: 1, b: { c: 'd' }};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj3, obj4));