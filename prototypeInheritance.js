function cat(name) {
  this.name = name;
}

cat.prototype.bark = function() {
  console.log('mew mew');
}

var cat1 = new cat('kitty');
cat1.bark();