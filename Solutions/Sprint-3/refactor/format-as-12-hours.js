// There is an implementation of format-as-12-hours.js in the debug directory
// This implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable

// This is the original function that appears in the debug/format-as-12-hours.js:
function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${Number(time.slice(0, 2)) - 12}:00 pm`;
  }
  return `${time} am`;
}

// The is the rewritten version of the function.
// Note: The same bugs that appear in the original function still remains in the rewritten version.
function formatAs12HourClock(time) {
  const hour = Number(time.slice(0, 2)); // Store the value of the expression in a variable

  if (hour > 12) {
    // Referencing the value twice (in lines 22, 23)
    return `${hour - 12}:00 pm`;
  }
  return `${time} am`;
}

/*
  A: In the original function, the expression Number(time.slice(0, 2)) is
     subject to two evaluations (when the hour value is greater than 12). 

  By storing the expression value in a variable first, we can reuse
  the value multiple times without additional evaluations, consequently
  improve the performance of the code.

  Also, storing the value of a long expression in a variable first (and 
  then referencing the variable in other expression) can
  improve code readability. For example, lines 22,23 is easier to read than line 10, 11.

*/
