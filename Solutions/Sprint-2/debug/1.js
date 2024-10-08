// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);


/*

Expected output is:
The sum of 10 and 32 is 42

Actual output is:
The sum of 10 and 32 is undefined


Action: Check against common causes
  a. Logic error in the function (value was miscalculated in the function)
  b. Function does not return a value
  c. Function incorrectly called (at line 8)
     e.g., incorrect parameters, misspelled function name.

     
Explanation:
The function does not properly return the sum because 
  return;
  a + b;
are treated as two separate statements. When 
  return;
is executed, the function returns immediately without any value.


Possible fix:

function sum(a, b) {
   return a + b;
}

or

function sum(a, b) {
   return 
   a + b;
}

*/