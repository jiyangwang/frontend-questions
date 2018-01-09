var myPromise = new Promise(function(res, rej) {
  if (false) {
    res('is clean!');
  } else {
    rej('is dirty!');
  }
});

myPromise.then(function(str) {
  console.log('room ' + str);
}).catch(function(str) {
  console.log('room ' + str);
})