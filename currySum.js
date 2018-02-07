var sum = function(x) {
  var args = Array.prototype.slice.call(arguments);
  if (args.length > 1) {
    return args.reduce(function(acc, cur) {
      return acc + cur;  
    });
  }
  return function(y) {
    return x + y;  
  }
}
console.log(sum(1, 2));
console.log(sum(1)(2));