function strComp(str) {
  if (!str || str.length == 0) {
    return str;
  }
  var c = str[0];
  var n = 1;
  var res = '';
  for (var i = 1; i < str.length; i++) {
    while (c === str[i] && i < str.length) {
      n++;
      i++;
    }
    res += c;
    res += n;
    if (i !== str.length) {
      c = str[i];
      n = 1;
    }
  }  
  return res;
}

console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');