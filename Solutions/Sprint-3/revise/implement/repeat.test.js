// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

function repeat(str, count) {
  if (count < 0) throw "count cannot be negative";

  return str.repeat(count);
}

describe("test repeat()", function () {
  test("", function () {
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
