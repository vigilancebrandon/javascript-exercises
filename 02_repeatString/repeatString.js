const repeatString = function(string, number) {
  let newstring = ''
  if (number < 0) {
    return 'ERROR'
  }
  for (let i = 0; i < number; i++) {
    newstring += string
  };
  return newstring;
};

console.log(repeatString('hey', -1));
// Do not edit below this line
module.exports = repeatString;
