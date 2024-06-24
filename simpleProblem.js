// Super Duper Easy

function problem(x) {
  // Check if x is a string; if so, return "Error"
  if (typeof x === "string") {
    return "Error";
  }
  // If x is not a string, return the calculated result
  return x * 50 + 6;
}
