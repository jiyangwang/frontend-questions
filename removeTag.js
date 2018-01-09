function removeTag(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== '<' && str[i] !== '>') {
      newStr += str[i];
    } else if (str[i] === '<') {
      while (str[i] !== '>') {
        i++;
      }
    }
  }
  return newStr;
}

var str = '<tag>A</tag>B<div>C</div>';
console.log(removeTag(str));