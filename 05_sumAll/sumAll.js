const sumAll = function(start, end) {
  if (start < 0 || end < 0) {
    return 'ERROR';
  }
  let sum = 0;
  for (let i = start; i <= end; i++){
    sum += i;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;