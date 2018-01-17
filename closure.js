var Foo = function(a) { 
  function bar() { 
    return a;  
  }  
  this.baz = function() {       
    return a;   
  }
};

Foo.prototype = {  
  biz: function() {        
    return a;   
  }
};

var f = new Foo(7);
f.bar(); // error
f.baz(); // 7
f.biz(); // error