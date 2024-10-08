function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// A:
//  At line 0, index is assign 0.
//  At line 8, index is increase by 1 at the end of each iteration 
//  As soon as the condition at line 5 is true, the value of index is returned.
//  If none of the characters in str matches char, the while loop will end and the function will return -1.

// b) What is the if statement used to check
// A: Check if the char matches the character in str at position index. 

// c) Why is index++ being used?
// A: To increase index by 1 (so that in the next iteration 
//    the code at line 5 will check the next character)

// d) What is the condition index < str.length used for?
// A: To end the loop when the value of index >= str.length 
//    so that the code inside the loop won't process the string beyond its last character.
//    Note:    
//    str[0] is the first character, and str[str.length-1] is the last character.
