function solution() {    
  var max_len = 0;
  var len = 0;
  $('li:not(:has(ol)):not(:has(ul))').each(function() {
      len = $(this).parents('ul, ol').length;
      max_len = Math.max(max_len, len);
  });
  return max_len;
}