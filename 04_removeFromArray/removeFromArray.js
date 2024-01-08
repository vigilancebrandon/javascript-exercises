const removeFromArray = function(array, items) {
  for (i = 1; i < arguments.length; i++) {
      array.splice(array.indexOf(arguments[i]), 1)
    }
  return array;
}

console.log(removeFromArray([1, 2, 3, 4], 3, 5))
// Do not edit below this line
module.exports = removeFromArray;

//Take array and items
//Make variable newArray equal to array
//Loop through items
//Loop through elements in array
//If element is strictly equal to item
//Remove element from newArray
//Return newArray