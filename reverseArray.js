// Convert number to reversed array of digits

function digitize(n) {
  // convert number into a string
  let number = n.toString();

  // split string into an array of characters
  let splitArray = number.split("");

  // reverse the array
  let reversedArray = splitArray.reverse();

  // convert back to a number
  let digitArray = reversedArray.map(Number);

  return digitArray;
}
