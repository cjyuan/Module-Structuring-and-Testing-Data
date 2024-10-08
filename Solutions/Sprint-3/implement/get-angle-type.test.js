// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

// Note: In these exercises, when something is not clearly specified, feel
// free to make an appropriate assumption.

// Here I assume angle is a non-negative number.
function getAngleType(angle) {
  angle = angle % 360; // Optional: Reduce the angle to the range 0 <= angle < 360.

  if (angle < 90) return "Acute angle";
  else if (angle == 90) return "Right angle";
  else if (angle < 180) return "Obtuse angle";
  else if (angle == 180) return "Straight angle";
  else if (angle < 360) return "Reflex angle";

  return "Unknown type of angle"; // e.g., negative angle values
}

// Testing the function in Jest syntax

describe("testing getAngleType()", function () {
  test("Right angle", function () {
    expect(getAngleType(90)).toBe("Right angle");
  });

  test("Acute angle", function () {
    expect(getAngleType(0)).toBe("Acute angle");
    expect(getAngleType(89.9)).toBe("Acute angle");
  });

  test("Obtuse angle", function () {
    expect(getAngleType(91)).toBe("Obtuse angle");
    expect(getAngleType(179)).toBe("Obtuse angle");
  });

  test("Straight angle", function () {
    expect(getAngleType(180)).toBe("Straight angle");
  });

  test("Reflex angle", function () {
    expect(getAngleType(270)).toBe("Reflex angle");
    expect(getAngleType(359)).toBe("Reflex angle");
  });

  test("Angles >= 360", function () {
    expect(getAngleType(360)).toBe("Acute angle");
    expect(getAngleType(450)).toBe("Right angle");
  });
});
