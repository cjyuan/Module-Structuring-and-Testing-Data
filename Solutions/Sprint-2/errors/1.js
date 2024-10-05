// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);


/*

There are multiple syntax errors in this block of codes.
  - At line 7: Identifier 'decimalNumber' has already been declared 
    (The identifier has already been given to the parameter)

  - At line 13: Unknown identifier 'decimalNumber'
    (The identifier 'decimalNumber' only appears inside the function;
     there is no such identifier declared outside of the function)

Before proceeding to fixing the errors, it helps to know what the block of
code intend to do. In this exercise, It looks like this block of codes intend to 
  1. Define a function to convert a number to a string that represents
     the equivalent percentage value. e.g., convert 0.5 to "50%"

  2. Call the function to convert 0.5 to "50%", and then output "50%".


It appears we do not need
  const decimalNumber = 0.5;
inside the function, but we need it outside the function.


Possible fix based on the above assumption:

// Define the function to do the conversion
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

// Move the declaration of this identifier out of the function
const decimalNumber = 0.5;

// Call the function to do the conversion and output the converted value
console.log( convertToPercentage(decimalNumber) );

*/
