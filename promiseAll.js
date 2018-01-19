// function accepts n promises 
// return a promise if all promises are resolved 

var p1 = new Promise((res, rej) => res('1'));
var p2 = new Promise((res, rej) => res('2'));
var p3 = new Promise((res, rej) => res('3'));
var arr = [p1, p2, p3];

function all(arr) {
  return arr.reduce((promise, cur) => {
    return promise.then(result => {
      return cur.then(result => {
        console.log(result);
      });
    });
  }, Promise.resolve());    
}

all(arr);