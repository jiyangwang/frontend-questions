var parallelLimit = function (arr, limit, callback) {
  callback = callback || function () {};
  if (!arr.length) {
      return callback();
  }
  var index = 0;
  var completed = 0;
  var running = 0;
  var results = [];

  var processor = function() {
      while (running < limit && index < arr.length) {
          running++;
          arr[index](function (err, result) {
              if (err) {
                  callback(err);
                  callback = function () {};
              } else {
                  completed++;
                  running--;
                  results.push(result);
                  if (completed >= arr.length) {
                      callback(null, results);
                  } else {
                      processor();
                  }
              }
          });
          index++;
      }
  };
  processor();
};

// Simulate async operations by using the setTimeout function with random timeout value. All it does is the print the number passed into the function.
var asyncTask = function(num) {
  return function (cb) {
      setTimeout(function() {
          //console.log(num);
          cb(null, num);
      }, Math.random()*1000);            
  }
};

// An array of asyncTask
var tasks = [
  asyncTask(1),
  asyncTask(2),
  asyncTask(3),
  asyncTask(4),
  asyncTask(5)
  ];

// run the async tasks in parallel limit
parallelLimit(tasks, 3, console.log);

// null [ 2, 3, 4, 1, 5 ]