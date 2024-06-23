// Sum Mixed Array

function sumMix(x) {
  //convert all array elements to numbers
  const numbers = x.map(Number);

  // sum function to be used in reduce
  function getSum(total, num) {
    return total + num;
  }

  // use reduce to get sum of all elements in the array.
  return numbers.reduce(getSum, 0);
}
