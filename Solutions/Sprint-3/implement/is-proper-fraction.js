// You wil need to implement a function isProperFraction
// You need to write assertions for your function to check it works in different cases

// Terms:
// Fractions: https://www.bbc.co.uk/bitesize/topics/zt9n6g8/articles/zjxpp4j
// Written here like this: 1/2 == Numerator/Denominator

// Acceptance criteria:

// Proper Fraction check:
// Input: numerator = 2, denominator = 3
// target output: true
// Explanation: The fraction 2/3 is a proper fraction, where the numerator is less than the denominator. The function should return true.

// Improper Fraction check:
// Input: numerator = 5, denominator = 2
// target output: false
// Explanation: The fraction 5/2 is an improper fraction, where the numerator is greater than or equal to the denominator. The function should return false.

// Zero Denominator check:
// Input: numerator = 3, denominator = 0
// No target output: Error (Denominator cannot be zero)
// Explanation: The function should throw an error when the denominator is zero, as it's not a valid fraction.

// Negative Fraction check:
// Input: numerator = -4, denominator = 7
// target output: true
// Explanation: The fraction -4/7 is a proper fraction because the absolute value of the numerator (4) is less than the denominator (7). The function should return true.

// Equal Numerator and Denominator check:
// Input: numerator = 3, denominator = 3
// target output: false
// Explanation: The fraction 3/3 is not a proper fraction because the numerator is equal to the denominator. The function should return false.
// These acceptance criteria cover a range of scenarios to ensure that the isProperFraction function handles both proper and improper fractions correctly and handles potential errors such as a zero denominator.

function isProperFraction(numerator, denominator) {
  return denominator != 0 && Math.abs(numerator) < Math.abs(denominator);

  // Note: The order of the operands matter in logical expression.
  // The following return statement will give incorrect result.
  // return Math.abs(numerator) < Math.abs(denominator) && denominator != 0;
}

// Optional testing

// Define a helper function to shorten testing code,
// and output the test values when failed.
function mytest(numerator, denominator, expected) {
  console.assert(
    expected === isProperFraction(numerator, denominator),
    numerator,
    denominator
  );
}

mytest(2, 3, true);
mytest(5, 2, false);
mytest(3, 0, false);
mytest(-4, 7, true);
mytest(3, 3, false);
mytest(-4, -5, true);
mytest(0, 1, true);
mytest(0, -2, true);
mytest(4, -10, true);
mytest(-1, 1, false);
mytest(-1, 0, false);
mytest(-5, 2, false);
mytest(7, -2, false);
