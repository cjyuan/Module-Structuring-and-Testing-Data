<<<<<<< HEAD
// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem


/* 

Q:
Expected output is 
2
5
6

Actual output is
3
3
3

Why?


Action: Check against common causes
a. Incorrect syntax used in function call
   Maybe wrong parameters or wrong syntax in lines 9-11? (Nope)

b. Logic error in the function

  Why at line 6
    num.toString().slice(-1)
  does not yield the last digit of a number correctly?

  (i) Is the expression correct? Are the functions used correctly?
  One possible approach to check if the expression is working properly is to test it independently. For example,

     const num = 105;

     // Check individual function call()
     console.log( num.toString() );            // Does num.toString() yield the string "105"?
     console.log( "105".slice(-1) );           // Does "105".slice(-1) yield the last character in "105"?

     // Check the expression directly
     console.log( num.toString().slice(-1) );  // Does this yield 5?

  (ii) If you are certain the expression
    num.toString().slice(-1)
  is correct, then check the value the expression depends on. 
  In this case, does the variable "num" has the correct value to start with?

  You can check the value of num using a debugger or simply output its value, as in:

  function getLastDigit() {
    console.log(num);                         // <-- Add this to output the value of num
    return num.toString().slice(-1);
  }

  In this exercise, you will see that the value being output is ALWAYS 103.

Explanation:
  The function getLastDigit() does not have any local variable or parameter named "num", 
  as a result, the function will look for a variable named "num" in the outer scope.
  In this exercise, the function will refer to "const num = 103;" at line 3.

Possible fix:

function getLastDigit(num) {
  return num.toString().slice(-1);
}

=======
// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem


/* 

Q:
Expected output is 
2
5
6

Actual output is
3
3
3

Why?


Action: Check against common causes
a. Incorrect syntax used in function call
   Maybe wrong parameters or wrong syntax in lines 9-11? (Nope)

b. Logic error in the function

  Why at line 6
    num.toString().slice(-1)
  does not yield the last digit of a number correctly?

  (i) Is the expression correct? Are the functions used correctly?
  One possible approach to check if the expression is working properly is to test it independently. For example,

     const num = 105;

     // Check individual function call()
     console.log( num.toString() );            // Does num.toString() yield the string "105"?
     console.log( "105".slice(-1) );           // Does "105".slice(-1) yield the last character in "105"?

     // Check the expression directly
     console.log( num.toString().slice(-1) );  // Does this yield 5?

  (ii) If you are certain the expression
    num.toString().slice(-1)
  is correct, then check the value the expression depends on. 
  In this case, does the variable "num" has the correct value to start with?

  You can check the value of num using a debugger or simply output its value, as in:

  function getLastDigit() {
    console.log(num);                         // <-- Add this to output the value of num
    return num.toString().slice(-1);
  }

  In this exercise, you will see that the value being output is ALWAYS 103.

Explanation:
  The function getLastDigit() does not have any local variable or parameter named "num", 
  as a result, the function will look for a variable named "num" in the outer scope.
  In this exercise, the function will refer to "const num = 103;" at line 3.

Possible fix:

function getLastDigit(num) {
  return num.toString().slice(-1);
}

>>>>>>> f4fe6aa6fe119428bd61373e77921ea8c2b430a9
*/