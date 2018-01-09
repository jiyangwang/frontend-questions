var arr = [fn1, fn2, fn3];

arr.reduce(function(acc, fn) {
  return acc.then(function(val) {
    return fn(val);  
  })
}, Promise.resolve()).then(function(res) {
  
}).catch(function(err) {
  
})