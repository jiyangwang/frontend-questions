var throttle = function(func, wait) {
  var waiting = false;
  return function() {
    var self = this, args = arguments;
    if (!waiting) {
      waiting = true;
      func.apply(self, args);
      setTimeout(function() {
        waiting = false;
      }, wait);
    }
  };
};