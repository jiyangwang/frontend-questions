// https://medium.com/@ivantsov/promises-in-js-one-more-interview-question-6d59634a3463

function foo() {
  console.log('foo');
  
  return new Promise(resolve => {
    console.log('foo timeout before');
    
    setTimeout(() => {
      console.log('foo timeout');

      resolve('foo resolved');
    }, 1000);
    
    console.log('foo timeout after');
  });
}

function bar() {
  console.log('bar');
  
  return new Promise(resolve => {
    console.log('bar timeout before');
    
    setTimeout(() => {
      console.log('bar timeout');
      
      resolve('bar resolved');
    }, 3000);
    
    console.log('bar timeout after');
  });
}

foo().then(function(res) {
  console.log('inside then 1: ' + res);
  return bar();
}).then(function(res) {
  console.log('inside then 2: ' + res);
})

foo().then(bar).then(function(res) {
  console.log('inside then 2: ' + res);
});

foo().then(bar()).then(function(res) {
  console.log('inside then 2: ' + res);
})

foo().then(function(res) {
  console.log('inside then 1: ' + res);
  bar();
}).then(function(res) {
  console.log('inside then 2: ' + res);
});