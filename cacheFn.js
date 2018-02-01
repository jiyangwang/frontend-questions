function cacheFn(fn) {
  var cache={};

  return function(arg){
      if (cache[arg]){
         return cache[arg];
      }
      else{
         cache[arg] = fn(arg);
          return cache[arg];
      }
  }
}

function cacheFn(fn) {
  var cache={};
    
  return function(){
    var args = arguments;  
    var key = [].slice.call(args).join('');
    if(cache[key]){
        return cache[key];
    }
    else{
        cache[key] = fn.apply(thi, args);
        return cache[key];
    }
  }
}


