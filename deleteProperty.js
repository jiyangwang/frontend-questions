/*

could be potentially more than 3 keys in the object 

*/

var aboveitems = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20}
];
var excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'}
];

function excludeItems(items, excludes) {   
  excludes.forEach(pair => {      
    items.forEach(item => {
      if (item[pair.k] === pair.v)
        delete item[pair.k]   
    });
  });   
  return items;
}

console.log(excludeItems(aboveitems, excludes));