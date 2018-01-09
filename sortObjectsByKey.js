var arr = [
  { a:1, b:7 },
  { a:3, b:1 },
  { a:2, b:3 }
];

arr.sort(function(v1, v2) {
  return v1.a - v2.a;
});