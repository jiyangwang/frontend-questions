/*
第一题，输入
数组endorsements：
输入格式是

endorsements = [
  {skill: 'javascript', user: 'user1'}, 
  {skill: 'css', user: 'user2'}, 
  {skill: 'html', user: 'user3'}, 
  {skill: 'javascript', user: 'user2'}, 
  {skill: 'css', user: 'user3'}, 
  {skill: 'javascript', user: 'user3'}
]

输出
[
  {skill: 'javascript', users:['user1', 'user2', 'user3'], count: 3}, 
  {skill: 'css', users:['user2', 'user3'], count: 2}, 
  {skill: 'html', users: ['user3'], count: 1}
]
follow up: 输出需要按照count排序.
*/

function merge(arr) {
  var res = [];
  var map = {};
  for (var i = 0; i < arr.length; i++) {
    if (!map.hasOwnProperty(arr[i].skill)) {
      map[arr[i].skill] = [arr[i].user];
    } else {
      map[arr[i].skill].push(arr[i].user);
    }
  }
  for (var key in map) {
    res.push({
      skill: key,
      users: map[key],
      count: map[key].length,
    })
  }
  res.sort(function(obj1, obj2) {
    return obj1.count - obj2.count;
  })
  return res;
}

var arr = [
  {skill: 'javascript', user: 'user1'}, 
  {skill: 'css', user: 'user2'}, 
  {skill: 'html', user: 'user3'}, 
  {skill: 'javascript', user: 'user2'}, 
  {skill: 'css', user: 'user3'}, 
  {skill: 'javascript', user: 'user3'}
];

console.log(merge(arr));