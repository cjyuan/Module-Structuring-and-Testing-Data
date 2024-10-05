// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

/*

Expected output is:
The result of multiplying 10 and 32 is 320

Actual output is:
The result of multiplying 10 and 32 is undefined


Action: Check against common causes
  a. Logic error in the function (value was miscalculated in the function)
  b. Function does not return a value
  c. Function incorrectly called (at line 7)
     e.g., incorrect parameters, misspelled function name.


Explanation:
The function does not return any value; it only outputs a value.


Possible fix:

function multiply(a, b) {
   return a * b;
}

*/