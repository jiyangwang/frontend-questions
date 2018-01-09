function toFraction(theNum){
  var str = theNum.toString();
  var integer = str.split('.')[0];
  var decimal = str.split('.')[1];
  
  var num = parseInt(decimal);
  var den = Math.pow(10, (decimal.length));
  var div = gcd(num, den);
  num /= div;
  den /= div;
  return integer + ' ' + num + '/' + den;
}

function gcd(a, b) {
  if (!b) return a;
  return gcd(b, a % b);
}

var n = 2.564;
console.log(toFraction(n));