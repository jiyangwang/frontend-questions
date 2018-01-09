function multiplyBy(num) {
  if (typeof(num) !== 'number') {
    throw err;
  }
  return function(x) {
    return num * x;
  }
}

// Test cases
var triple = multiplyBy(3);
var quadruple = multiplyBy(4);
console.log(triple(2)) // 6
console.log(quadruple(2)) // 8