function getUrlParam(sUrl, sKey) {
  var params = sUrl.split('#')[0].split('?')[1];
  if (sKey) {
    var strs = params.split('&');
    var arr = [];
    for (var i = 0; i < strs.length; i++) {
      var key = strs[i].split('=')[0];
      var value = strs[i].split('=')[1];
      if (key === sKey) {
        arr.push(value);
      }
    }
    if (arr.length === 0) {
      return '';
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      return arr;
    }
  } else {
    var strs = params.split('&');
    var arr = [];
    for (var i = 0; i < strs.length; i++) {
      var key = strs[i].split('=')[0];
      var value = strs[i].split('=')[1];
      if (!(key in arr)) {
        arr[key] = [];
      }
      arr[key].push(value);
    }
    return arr;
  }
}