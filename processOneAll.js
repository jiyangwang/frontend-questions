function getSingleImage(url, onDone) {
  onDone();
} 

function getManyImage(urls, onAllDone) {
  if (!urls || urls.length === 0) {
    return;
  }
  
  var i = 0;
  
  var onDone = function() {
    console.log(urls[i]);
    if (i === urls.length - 1) {
      return;
    }
    
    getSingleImage(urls[i++], onDone);
  }
  console.log(urls[i]);
  getSingleImage(urls[i++], onDone);
  onAllDone();
}

var urls = ['www.google.com', 'www.facebook.com', 'www.linkedin.com'];
var fn = function() { console.log('done') };
getManyImage(urls, fn);