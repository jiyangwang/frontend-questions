function flatten(arr) {
  return arr.reduce(function(acc, cur) {
    return acc.concat(cur);
  }, []);    
}

var arr = [1, [2, 3], [3, 4, 5]];
console.log(flatten(arr));