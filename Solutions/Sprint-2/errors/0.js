<<<<<<< HEAD
// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}


// Expected:
//   ${str[0].toUpperCase()} yields the first character of "str" in uppercase.
//   ${str.slice(1)} yields the substring of "str" that starts with the 2nd character.
//   The function should return the given string with its first character capitalised.


// Action: If you cannot manually detect any error, execute the code.
// In this exercise, we can call the function to to see if there is any
// syntax error, runtime error, or logic error.
console.log(capitalise("abc"));      // Expect Abc

/* 

Result from execution: Found syntax error at line 7.
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
      ^
  SyntaxError: Identifier 'str' has already been declared


Explanation:
  The name "str" has already been given to the parameter.
  We cannot declare another local variable with the same name.

Possible fix: (Give the local variable a different name)

function capitalise(str) {
  let capstr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capstr;
}

=======
// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}


// Expected:
//   ${str[0].toUpperCase()} yields the first character of "str" in uppercase.
//   ${str.slice(1)} yields the substring of "str" that starts with the 2nd character.
//   The function should return the given string with its first character capitalised.


// Action: If you cannot manually detect any error, execute the code.
// In this exercise, we can call the function to to see if there is any
// syntax error, runtime error, or logic error.
console.log(capitalise("abc"));      // Expect Abc

/* 

Result from execution: Found syntax error at line 7.
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
      ^
  SyntaxError: Identifier 'str' has already been declared


Explanation:
  The name "str" has already been given to the parameter.
  We cannot declare another local variable with the same name.

Possible fix: (Give the local variable a different name)

function capitalise(str) {
  let capstr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capstr;
}

>>>>>>> f4fe6aa6fe119428bd61373e77921ea8c2b430a9
*/