<<<<<<< HEAD
// Below are the steps for how BMI is calculated

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// You will need to implement a function that calculates the BMI of someone based off their weight and height

// Given someone's weight in kg and height in metres
// Then when we call this function with the weight and height
// It should return their Body Mass Index to 1 decimal place


function bmi(weight, height) {
    const result = weight / (height * height);

    // Math.round() can only round a number to its nearest integer.
    // There is no function that can directly round a number to certain decimal places.
    // One possible way to retain only one decimal place of a number (e.g. 12.345) 
    //   step 1: multiple 12.345 by to get 123.45
    //   step 2: round 123.45 to 123
    //   step 3: divide 123 by 10 to yield 12.3.
    const roundedResult = Math.round(result * 10) / 10;

    return roundedResult;
}

let h = 1.73, w = 70; 

console.log(bmi(w, h)); // expect 23.4 (based on the sample value in the description)

// Note: bmi = w / (h*h)    means   w = bmi * (h*h). So we can prepare the test data accordingly.
h = 1.78, w = h * h * 50;
console.log(bmi(w, h)); // expect 50 (whole number)

h = 1.62, w = h * h * 40.68; 
console.log(bmi(w, h)); // expect 40.7 (round up case)

h = 1.81, w = h * h * 45.62
=======
// Below are the steps for how BMI is calculated

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// You will need to implement a function that calculates the BMI of someone based off their weight and height

// Given someone's weight in kg and height in metres
// Then when we call this function with the weight and height
// It should return their Body Mass Index to 1 decimal place


function bmi(weight, height) {
    const result = weight / (height * height);

    // Math.round() can only round a number to its nearest integer.
    // There is no function that can directly round a number to certain decimal places.
    // One possible way to retain only one decimal place of a number (e.g. 12.345) 
    //   step 1: multiple 12.345 by to get 123.45
    //   step 2: round 123.45 to 123
    //   step 3: divide 123 by 10 to yield 12.3.
    const roundedResult = Math.round(result * 10) / 10;

    return roundedResult;
}

let h = 1.73, w = 70; 

console.log(bmi(w, h)); // expect 23.4 (based on the sample value in the description)

// Note: bmi = w / (h*h)    means   w = bmi * (h*h). So we can prepare the test data accordingly.
h = 1.78, w = h * h * 50;
console.log(bmi(w, h)); // expect 50 (whole number)

h = 1.62, w = h * h * 40.68; 
console.log(bmi(w, h)); // expect 40.7 (round up case)

h = 1.81, w = h * h * 45.62
>>>>>>> f4fe6aa6fe119428bd61373e77921ea8c2b430a9
console.log(bmi(w, h)); // expect 45.6; (round down case)