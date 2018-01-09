function ajax(options) {
  var type = (options.type || 'GET').toUpperCase();
  var data = options.data || {};
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 || xhr.status === 200) {
      var contentType = xhr.getResponseHeader('Content-type');
      var response;
      if (contentType.indexOf('xml') !== -1 && xhr.responseXML) {
        response = xml.responseXML;
      } else if (contentType === 'application/json') {
        response = JSON.parse(xhr.responseText);
      } else {
        response = xhr.responseText;
      }
      options.success && options.success(response);
    } else {
      options.error && options.error(response);
    }
  }
  
  if (type === 'GET') {
    xhr.open(type, options.url);
    xhr.send();
  } else {
    xhr.open(type, options.url);
    xhr.send(data);
  }
}