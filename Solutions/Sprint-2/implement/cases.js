// snake_case is the naming convention in which each space within a set of
// words is replaced with an underscore (_) character, and words are
// written in lowercase.

// An "UPPER_SNAKE_CASE" is similar to snake_case, but with words written
// in uppercase.

// Implement a function that, takes a string as its parameter, and
// returns an equivalent string in UPPER_SNAKE_CASE form.

// For examples, calling the function on "hello three" should yield
// "HELLO_THERE", and calling the function on "lord of the rings" should yield
// "LORD_OF_THE_RINGS".

// You will need to come up with an appropriate name for the function
// Use the string documentation to help you find a solution.

function toUpperSnakeCase(str) {
    return str.toUpperCase().replaceAll(' ', '_');
}

// Test cases.
console.log(toUpperSnakeCase("hello there"));
console.log(toUpperSnakeCase("lord of the rings"));
console.log(toUpperSnakeCase("String with Mixed letter cases"));

// Challenge:
// Can you replace consecutive spaces in a string by a single underscore?
// For example, convert "hello   there" to "hello_there".

