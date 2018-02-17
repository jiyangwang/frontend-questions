Object.prototype.clone = function () {
    var o = this.constructor === Array ? [] : {};
    for (var e in this) {
        o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
    }
    return o;
}

function clone(Obj) {
    var buf;
    if (Obj instanceof Array) {
        buf = [];
        var i = Obj.length;
        while (i--) {
            buf[i] = clone(Obj[i]);
        }
        return buf;
    } else if (Obj instanceof Object) {
        buf = {};
        for (var k in Obj) {
            buf[k] = clone(Obj[k]);
        }
        return buf;
    } else {
        return Obj;
    }
}

var obj = { arr: [1,2,3,4,5], a: 1, b: 2 }
console.log(clone(obj));