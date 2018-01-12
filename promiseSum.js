function add(n) {
  var promises = [];
  for (var i = 0; i < n; i++) {
    promises.push(fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'));
  }
  var sum = 0;
  Promise.all(promises).then(function(res) {
    res = res.map(function(item) {
      return item.text();
    })
    Promise.all(res).then(function(text) {
      for (var i in text) {
        sum += parseInt(text[i].trim('\"'));
        console.log(parseInt(text[i].trim('\"')));
      }
      console.log(sum);
    });
  }).catch(function(err) {
    console.log(err);
  });
}

add(3);