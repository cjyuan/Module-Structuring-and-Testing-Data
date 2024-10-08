// This is the rewritten version (no need to check for 'i' twice)
function isVowel(letter) {
  return (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  );
}

// here is an implementation of isVowel - this function checks if a letter is a vowel

// Refactor the testing code into a helper function in the following manner:
// 1. "Factor" out the parts that are the same in all three blocks of testing code
// 2. Use parameter(s) to control how to substitute those parts that are different.
function test(letter) {

// console.log("case: letter a...");            // The original statement (for comparison)
  console.log(`case: letter ${letter}...`);

// const currentOutput = isVowel("a");          // The original statement (for comparison)
  const currentOutput = isVowel(letter);

  const targetOutput = true;                    // The same local variable works for any
                                                // letter; there is no need to define different
                                                // variables based on the letter value.
  console.assert(
    currentOutput === targetOutput,
    "current output: %s, target output: %s",
    currentOutput,
    targetOutput
  );
}

test("a");
test("e");
test("k");

/* 

// These is the original code

function isVowel(letter) {
  return (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  );
}

// here is an implementation of isVowel - this function checks if a letter is a vowel

console.log("case: letter a...");
const currentOutput = isVowel("a");
const targetOutput = true;
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

console.log("case: letter e...");
const currentOutput2 = isVowel("e");
const targetOutput2 = true;
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

console.log("case: letter k...");
const currentOutput3 = isVowel("k");
const targetOutput3 = false;
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);
*/

