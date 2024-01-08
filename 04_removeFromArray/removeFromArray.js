const removeFromArray = function(array, items) {
  let newArray = array
  for (const item of items) {
      array.splice(array.indexOf(item), 1)
      //console.log(newArray)
    }
  return array;
}

console.log(removeFromArray([1, 2, 3, 4]))
// Do not edit below this line
module.exports = removeFromArray;

//Take array and items
//Make variable newArray equal to array
//Loop through items
//Loop through elements in array
//If element is strictly equal to item
//Remove element from newArray
//Return newArray