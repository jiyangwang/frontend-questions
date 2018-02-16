// 方法一：
Object.prototype.clone = function(){
  var o = this.constructor === Array ? [] : {};
  for(var e in this){
          o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
  }
  return o;
}

//方法二：
function clone(Obj) {
  var buf;
  if (Obj instanceof Array) {
      buf = [];                    //创建一个空的数组 
      var i = Obj.length;
      while (i--) {
          buf[i] = clone(Obj[i]);
      }
      return buf;
  }else if (Obj instanceof Object){
      buf = {};                   //创建一个空对象 
      for (var k in Obj) {           //为这个对象添加新的属性 
          buf[k] = clone(Obj[k]);
      }
      return buf;
  }else{                         //普通变量直接赋值
      return Obj;
  }
}