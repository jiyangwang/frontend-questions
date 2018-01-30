function countdown(num) {
  var interval = setInterval(function () {
      console.log(num--);
      num || clearInterval(interval);
  }, 1000);
}
countdown(3);