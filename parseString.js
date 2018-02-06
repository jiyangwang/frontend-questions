var input = [
  '1407564301|www.nba.com',
  '1407478021|www.facebook.com',
  '1407478022|www.facebook.com',
  '1407481200|news.ycombinator.com',
  '1407478028|www.google.com',
  '1407564301|sports.yahoo.com',
  '1407564300|www.cnn.com',
  '1407564300|www.nba.com',
  '1407564300|www.nba.com',
  '1407564301|sports.yahoo.com',
  '1407478022|www.google.com',
  '1407648022|www.twitter.com',
];

function parseString(input) {
  var map = {};
  for (var i = 0; i < input.length; i++) {
    var arr = input[i].split('|');
    var ts = arr[0];
    var date = new Date(ts * 1000);
    ts = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    var url = arr[1];
    if (!map.hasOwnProperty(ts)) {
      map[ts] = [];
    }
    map[ts].push(url);
  }
  for (var key in map) {
    console.log(key);
    for (var i = 0; i < map[key].length; i++) {
      console.log(map[key][i]);
    }
  }
}

parseString(input);