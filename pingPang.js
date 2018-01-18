function pingpang() {
  var ping = true;
  setInterval(() => {
    if (ping) {
      console.log('ping');
      ping = false;
    } else {
      console.log('pang');
      ping = true;
    }
  }, 1000);  
}

pingpang();