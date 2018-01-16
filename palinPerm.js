function palinPerm(str) {
  if (!str || str.length <= 1) {
    return true;
  }
  var i = 0;
  var j = str.length - 1;
  while (i < j) {
    while (str[i] === ' ') i++;
    while (str[j] === ' ') j--;
    if (str[i++].toLowerCase() !== str[j--].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(palinPerm(' ra   ce C      ar'), 'true');
console.log(palinPerm('Tact boa'), 'false’);