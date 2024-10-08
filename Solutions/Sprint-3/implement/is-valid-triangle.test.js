// STRETCH Implement a function isValidTriangle
// Terms
// the Triangle Inequality says: the sum of any two sides is always greater than the third side.
// practical examples:
// Side a = 3
// Side b = 3
// Side c = 3

// This is a valid triangle, because a plus b = 6 and 6 is greater than 3
// Another way to write this is a + b > c
// It's also true that b + c > a
// It's also true that a + c > b

// In our function isValidTriangle, we need to invalidate any triangle where the sum of any two sides is less than or equal to the length of the third side.
// and we need to validate any triangle where the sum of any two sides is greater than the length of the third side.

// Acceptance criteria:

// Given the lengths of three sides of a triangle (a, b, c),
// When the function isValidTriangle is called with these side lengths as input,
// Then it should:

// scenario: invalid triangle
// Given the side lengths a, b, and c,
// When the sum of any two side lengths is less than or equal to the length of the third side (i.e., a + b <= c, a + c <= b, b + c <= a),
// Then it should return false because these conditions violate the Triangle Inequality, which states that the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.

// scenario: invalid triangle
// Check for Valid Input:
// Given the sides a, b, and c,
// When any of the sides are less than or equal to zero,
// Then it should return false because a triangle cannot have zero or negative side lengths.

// scenario: valid triangle
// Given valid side lengths where the sum of any two sides is greater than the third side,
// When the function is called with these values as input,
// Then it should return true because the input forms a valid triangle.

// This specification outlines the behavior of the isValidTriangle function for different input scenarios, ensuring it properly checks for invalid side lengths and whether they form a valid triangle according to the Triangle Inequality Theorem.

function isValidTriangle(a, b, c) {
  return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
}

// Testing the function in Jest syntax

describe("testing isValidTriangle()", function () {
  test("invalid sides: sides with length <= 0", function () {
    expect(isValidTriangle(0, 0, 0)).toBe(false);
    expect(isValidTriangle(0, 1, 2)).toBe(false);
    expect(isValidTriangle(2, 3, 0)).toBe(false);
    expect(isValidTriangle(4, 0, 5)).toBe(false);
    expect(isValidTriangle(-3, -4, -5)).toBe(false);
    expect(isValidTriangle(-1, 5, 3)).toBe(false);
    expect(isValidTriangle(3, -1, 5)).toBe(false);
    expect(isValidTriangle(4, 2, -2)).toBe(false);
  });

  test("valid triangles: any side < sum of the other two sides", function () {
    expect(isValidTriangle(3, 3, 3)).toBe(true);
    expect(isValidTriangle(3, 4, 5)).toBe(true);
    expect(isValidTriangle(5, 4, 3)).toBe(true);
    expect(isValidTriangle(3, 5, 4)).toBe(true);
    expect(isValidTriangle(4, 5, 3)).toBe(true);
    expect(isValidTriangle(4, 3, 5)).toBe(true);
    expect(isValidTriangle(5, 3, 4)).toBe(true);
    expect(isValidTriangle(10, 1, 10)).toBe(true);
  });

  test("invalid triangles: one side >= sum of the other two sides", function () {
    expect(isValidTriangle(2, 5, 3)).toBe(false);
    expect(isValidTriangle(4, 4, 10)).toBe(false);
    expect(isValidTriangle(100, 1, 98)).toBe(false);
  });
});
