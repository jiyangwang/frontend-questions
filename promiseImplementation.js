function getTweets() {
  const promise = new Promise();
  
  setTimeout(function(){
    promise.resolve('fakedata');
  }, 2000);
  
  return promise;
}

(function(){
  const tweets = getTweets();
  
  tweets.done(function(tweetData){
      console.log('TweetData! 1 --> ' + tweetData);
  }).done(function(tweetData){
      console.log('TweetData! 2 --> ' + tweetData);
  });
  
  setTimeout(function(){
    tweets.done(function(tweetData){
      console.log('TweetData after delay' + tweetData);
    });
  }, 3000);
  
})()


function Promise() {
  
  this.arr = [];
  
  this.resolve = function(data) {
    for (var i = 0; i < this.arr.length; i++) {
      this.arr[i](data);
    }
    this.data = data;
  }
  
  this.done = function(callback) {
    this.arr.push(callback);
    if (this.data) {
      callback(this.data);
    }
    return this;
  }  
}