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

// Optional testing

// Define a helper function to shorten testing code,
// and output the angle value instead of detailed message when failed.
function mytest(angle, expected) {
  console.assert(expected === getAngleType(angle), angle);
}

mytest(90, "Right angle");
mytest(0, "Acute angle");
mytest(89.9, "Acute angle");
mytest(91, "Obtuse angle");
mytest(179, "Obtuse angle");
mytest(180, "Straight angle");
mytest(270, "Reflex angle");
mytest(359, "Reflex angle");
mytest(360, "Acute angle"); // Same as 0 degree
mytest(450, "Right angle"); // Same as 90 degree
