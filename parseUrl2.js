/*
写个function 来 parse query string. 先让你写个带query string的url. 
http://example.com/over/there?name=ferret&id=1
parse完后生成一个object {name: "ferret", id: "1"}
followup 1: http://example.com/over/there?name=ferret&name=tom&id=1
parse完后生成一个object  {name: ["ferret", "tom"], id: "1"}]
followup 2: 如果url是encode,要先decode
*/

function parseUrl1(url) {
  var res = {};
  var arr = url.split('?')[1].split('&');
  for (var i = 0; i < arr.length; i++) {
    var key = arr[i].split('=')[0];
    var value = arr[i].split('=')[1];
    if (!res.hasOwnProperty(key)) {
      res[key] = value;
    } else if (typeof res[key] === 'object') {
      res[key].push(value);
    } else {
      res[key] = [res[key], value];
    }    
  }
  return res;
}
var url = 'http://example.com/over/there?name=ferret&name=tom&name=edward&id=1';
console.log(parseUrl1(url));
console.log(encodeURI(url));
console.log(decodeURI(url));