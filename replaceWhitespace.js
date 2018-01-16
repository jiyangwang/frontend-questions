function urlify(str) {
  str = str.trim(' ');
  var arr = str.split('');

  var i = 0;
  while (i < arr.length) {
    if (arr[i] === ' ') {
      for (var j = arr.length - 1; j >= i; j--) {
        arr[j + 2] = arr[j];
      }
      arr[i] = '%';
      arr[i + 1] = '2';
      arr[i + 2] = '0';
    }
    i++;
  }
  return arr.join('');
}

console.log(urlify('Mr John Smith    '), 'Mr%20John%20Smith');