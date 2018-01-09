var timeout;
var delay = 5000;

$('#input').on('keyup', function() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    console.log('do something here');
  }, delay);
})

$('#input').on('keydown', function() {
  clearTimeout(timeout);
})