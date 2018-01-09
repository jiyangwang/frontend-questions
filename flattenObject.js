function flatten(obj) {
  var res = {};
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    
    if (typeof(obj[key]) === 'object') {
      var newObj = flatten(obj[key]);
      for (var newKey in newObj) {
        if (!newObj.hasOwnProperty(newKey)) continue;
        res[key + '.' + newKey] = newObj[newKey];
      }
    } else {
      res[key] = obj[key];
    }
  }
  return res;
}

var obj = {
  foo: 'bar',
  bar: 'foo',
  foobar: {
    foo: 'foo',
    bar: 'bar'
  }
};
var newObj = flatten(obj);
console.log(newObj);