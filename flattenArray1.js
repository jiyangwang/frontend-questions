function flatten(arr) {
  return arr.reduce(function(acc, cur) {
    return acc.concat(cur);
  });
}

function flatten(arr) {
  var res = [];
  for (var i in arr) {
    if (typeof(arr[i]) === 'object') {
      var newArr = flatten(arr[i]);
      for (var j in newArr) {
        res.push(newArr[j]);
      }    
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

var arr = [[1,2],3,[4,5],6];
var newArr = flatten(arr);
console.log(newArr);