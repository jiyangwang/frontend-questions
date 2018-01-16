//就是写了个getByClassName, getByClassHierarchy
var getByClassName = function(root, className) {
  var res = [];
  var findClass = function(node) {
    if (node.classList && node.classList.contains(className)) {
      res.push(node);
    }
    for (var i = 0; i < node.children.length; i++) {
      findClass(node.children[i]);
    }
  }
  findClass(root);
  return res;
}