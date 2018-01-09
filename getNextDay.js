Date.prototype.nextDay = function() {
  var date = this.getDate();
  return new Date(this.setDate(date + 1));
}

var date = new Date();
console.log(date.nextDay());