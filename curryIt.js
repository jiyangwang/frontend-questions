function curryIt(fn) {
  var n = fn.length;
  var args = [];
  return function(arg) {
      args.push(arg);
      if (args.length < n) {
         return arguments.callee;
      } else {
          return fn.apply(this, args);
      }
  }
}

function curryIt(fn) {
 var n = fn.length;
 var args = [];
 var res = function(arg) {
     args.push(arg);
     if (args.length < n) {
         return res;
      } else {
          return fn.apply(this, args);
      }
 }
 return res;
}