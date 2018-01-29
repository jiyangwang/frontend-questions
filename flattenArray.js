function flatten(arr) {
  return arr.reduce(function(acc, cur) {
    return acc.concat(cur);
  }, []);    
}

var flatten = function(arr) {
  if (!arr || arr.length === 0) {
    return;
  }
  var res = [];
  for (var i in arr) {
    if (typeof arr[i] === 'object') {
      var new_arr = flatten(arr[i]);
      for (var j in new_arr) {
        res.push(new_arr[j]);
      }
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

var arr = [1, [2, 3], [3, 4, 5]];
console.log(flatten(arr));