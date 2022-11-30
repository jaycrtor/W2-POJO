/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:

***********************************************************************/

function valuePair(obj1, obj2, key) {
  const arr = [];
  for(let key1 in obj1){
    if(key1.includes(key)) arr.push(obj1[key1])
  }
  for(let key2 in obj2){
    if(key2.includes(key)) arr.push(obj2[key2])
  }

return arr


}
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
