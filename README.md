# Codewar-Practice

## Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

### Example

```
35231 => [1,3,2,5,3]
```

### My Approach

1. Convert the number to a string: I start by converting the number to a string, which allows me to manipulate each digit individually.
2. Split the string into an array of characters: Next, I use the `split("")` method to break the string into an array where each element is a single character representing a digit.
3. Reverse the array: I then apply the `reverse()` method to the array to get the digits in reverse order.
4. Convert each character back to a number: Using the `map(Number)` method, I transform each string character in the array back to a numeric digit.
5. Return the resulting array: Finally, I return the array, which now contains the digits in reverse order.

### Implementation

Here is the JavaScript function implementing my approach:

```js
function digitize(n) {
  // Step 1: Convert number to string
  let number = n.toString();

  // Step 2: Split string into an array of characters
  let numberArray = number.split("");

  // Step 3: Reverse the array
  let reversedArray = numberArray.reverse();

  // Step 4: Convert each character back to a number
  let digitArray = reversedArray.map(Number);

  // Step 5: Return the resulting array
  return digitArray;
}
```

#### Alternative Solution:

Here is an alternative solution found on codewars website.

```js
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
```
