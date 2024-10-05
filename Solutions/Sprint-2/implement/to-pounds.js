// In week-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPoundString(penceString) {

    // Remove the last character, 'p' 
    const penceStringWithoutTrailingP = penceString
        .substring(0, penceString.length - 1);

    // Ensure there is at least three digits in the pence string.
    // If it has less than three digits, pad 0 in front to make it a 
    // three digit number. 
    const paddedPenceNumberString = penceStringWithoutTrailingP
        .padStart(3, "0");

    // Remove the last two digits to yield the integer part of the pound string
    const pounds = paddedPenceNumberString
        .substring(0, paddedPenceNumberString.length - 2);

    // The last two digits becomes the decimal part of the pound string
    const pence = paddedPenceNumberString
        .substring(paddedPenceNumberString.length - 2);
  
    // Reconstruct the pound string 
    return `£${pounds}.${pence}`;
}

console.log( toPoundString( '399p' )) ;     // expect '£3.99'
console.log( toPoundString( '10p' )) ;      // expect '£0.10'
console.log( toPoundString( '13000p' )) ;   // expect '£130.00'

console.log( toPoundString( '0p' )) ;       // expect '£0.00'
console.log( toPoundString( '1p' )) ;       // expect '£0.01'
console.log( toPoundString( '021p' )) ;     // expect '£0.21'
console.log( toPoundString( '4444p' )) ;    // expect '£44.44'