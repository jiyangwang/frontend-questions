// 給你一個 DOM 元素，創建一個能訪問該元素所有子元素的函數，
// 並且要將每個子元素傳遞給指定的回調函數。

function loop(element, callback) {
  callback(element);
  var list = element.children;
  for (var i = 0; i < list.length; i++) {
    loop(list[i], callback);       
  }
}