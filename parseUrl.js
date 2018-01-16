//代码是给一串url 做出key和value的map 比如url：http://www.1point3acres.com/bbs?action=newthread&fid=145
//那么需要输出[[mod:post],[action:newthread],[fid:145]]这样 只能写js实现

function parseUrl(url) {
  var res = [['mod:post']];
  var arr = url.split('?')[1].split('&');
  for (var i = 0; i < arr.length; i++) {
    res.push([arr[i].split('=')[0] + ':' + arr[i].split('=')[1]]);
  }
  return res;
}
              
var url = 'http://www.1point3acres.com/bbs?action=newthread&fid=145';
console.log(parseUrl(url));