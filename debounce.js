var debounce = function(func, wait) {
  var timeout;
  return function() {
    var self = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(self, args);
    }, wait);
  };
};