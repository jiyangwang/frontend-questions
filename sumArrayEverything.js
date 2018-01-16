/* sumArrayEverything: should return 15 */

function sumArrayAnything(arr) {
  var res = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      res += arr[i];
    } else if (typeof arr[i] === 'object') {
      var cur = sumArrayAnything(arr[i]);
      res += cur;
    }   
  }
  return res;
}

console.log(sumArrayAnything([[1,2,3],4,5]));
console.log(sumArrayAnything([1,2,3,4,5]));
console.log(sumArrayAnything(["1jakjsds", 1,2,3,[4,5]]));
console.log(sumArrayAnything([[1,[2,[3]],4,5]]));