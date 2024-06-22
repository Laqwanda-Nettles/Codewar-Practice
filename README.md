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

## Find Maximum and Minimum Values of a List

Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers a input, and return the largest and lowest number in that list, respectively.

### Example

```
[4,6,2,1,9,63,-134,566] -> max = 566, min = -134
[42,54,65,87,0] -> min = 0, max = 87
```

### My Approach

I wasn't entirely sure how to approach this, so I researched MDN for max and min values and came across `Math.max()`. There were multiple methods to get the maximum element of an array, such as using the `reduce()` method, `apply()` method (the one I used), and using spread syntax. Although I used the apply method, MDN stated that both the `spread (...)` and `apply` can fail or return the wrong result if the array has too many elements, so using `reduce` may be a better solution. I plan on exploring the `reduce` method solution soon.

#### What I learned:

Using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_and_built-in_functions">apply()</a> with built-in functions :  
I found a Stack Overflow comment that really broke down how all of this works. Here is the Stack Overflow breakdown :  
The `apply` method allows you to pass an array of arguments to a function as individual parameters. For example,

```js
Math.max.apply(null, list);
```

is equivalent to calling

```js
Math.max(12, 23, 100, 34, 56);
```

This makes `apply` a convenitnt way to pass an array to a function that expects separate arguments. Note that

```js
console.log(Math.max(list)); //NaN
```

won't work because `Math.max` doesn't accept an array directly.  
Another advantage of using `apply` is that you can choose the context `(this)` for the function. The first parameter you pass to `apply` determines the value of `this` inside the function. However, `Math.max` doesn't use the context, so you can use anything in place.

```js
console.log(Math.max.apply(undefined, list)); // 233
console.log(Math.max.apply(null, list)); // 233
console.log(Math.max.apply(Math, list)); // 233
```

Since `apply` is defined in `Function.prototype`, any JavaScript function can use `apply` by default.

Link to Stack Overflow: https://stackoverflow.com/questions/21255138/how-does-the-math-max-apply-work

### Implementation

Here is my JavaScript function:

```js
// Find Maximum and Minimum Values of a List

// Return min value
const min = (list) => {
  return Math.min.apply(null, list);
};

// Return max value
const max = (list) => {
  return Math.max.apply(null, list);
};
```

#### Alternative Solutions:

Here are alternative solutions found on codewars.com :

```js
//ES6 spread method
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// Using sort
var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};
```
