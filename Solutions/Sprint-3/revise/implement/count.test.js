// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

function countChar(str, char) {
  let index = 0;
  let count = 0;

  while (index < str.length) {
    if (str[index] == char) count++;
    index++;
  }

  return count;
}

describe("test countChar()", function () {
  test("non-zero occurrences", function () {
    expect(countChar("aaaaa", "a")).toBe(5);
    expect(countChar("babababacad", "a")).toBe(5);
    expect(countChar("abcdef", "a")).toBe(1);
    expect(countChar("fedcba", "a")).toBe(1);
    expect(countChar("c c c d d d c c c", "d")).toBe(3);
  });

  test("no occurrences", function () {
    expect(countChar("", "a")).toBe(0);
    expect(countChar("123456789", "x")).toBe(0);
    expect(countChar("codeyourfuture", "z")).toBe(0);
  });
});
