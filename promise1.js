// 写2个promise

function p() {
  new Promise(function(resolve, reject) {
    resolve(1);       
  }).then(function(result) {
    console.log(result);
    return new Promise(function(resolve, reject) {
      resolve(2);    
    }) 
  }).then(function(result) {
    console.log(result);
  })
}

p();