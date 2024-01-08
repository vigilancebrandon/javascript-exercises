const reverseString = function(string) {
  let array = [];
  for (const char of string) {
    array.push(char);
  };
  array.reverse();
  return array.toString().replace(/,/g, '') //uses regular expression to replace all commas, not just first one
};

console.log(reverseString('Hello'))

// Do not edit below this line
module.exports = reverseString;

