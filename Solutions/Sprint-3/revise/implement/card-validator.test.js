/* 
  This file contains 
  1) isValidCreditCardNumber() -- A function that validates credit card number
  2) Testing code in Jest syntax
*/

/* 
  This function return true only if cardNum meets all the following requirements
    - cardNum is a string and it contains exactly 16 digits.
    - cardNum contains at least two different digits.
    - The right-most digit is 0, 2, 4, 6, or 8.
    - The sum of all the digits > 16.

  Otherwise the function returns false.

  Parameter
    cardNum - Credit card number that is represented as a string.

*/
function isValidCreditCardNumber(cardNum) {
  if (typeof cardNum !== "string")
    // Parameter is not a string
    return false;

  // If cardNum does not have exactly 16 characters, or
  // it has 16 characters but the last digit is an odd digit.
  // Note: Any non-digit would be converted to 0 by Number().
  //   We will check for non-digit later.
  if (cardNum.length != 16 || Number(cardNum[15]) % 2 != 0) return false;

  let digitSum = 0;
  let hasDifferentDigits = false; // Assume all digits are the same

  for (let index = 0; index < 16; index++) {
    // If the character is not a digit
    if (!(cardNum[index] >= "0" && cardNum[index] <= "9")) return false;

    // If the character passes the above test, it must be a digit

    if (cardNum[index] != cardNum[0]) hasDifferentDigits = true;

    digitSum += Number(cardNum[index]);
  }

  return hasDifferentDigits && digitSum > 16;
}

describe("test isValidCreditCardNumber()", function () {
  test("Valid card numbers", function () {
    expect(isValidCreditCardNumber("1234123412341234")).toBe(true);
    expect(isValidCreditCardNumber("9999777788880000")).toBe(true);
    expect(isValidCreditCardNumber("6666666666661666")).toBe(true);
    expect(isValidCreditCardNumber("2666666666666666")).toBe(true);
    expect(isValidCreditCardNumber("6666666666666664")).toBe(true);
    expect(isValidCreditCardNumber("5544444446666666")).toBe(true);
    expect(isValidCreditCardNumber("9876543210123456")).toBe(true);
  });

  test("Invalid case: # of characters != 16", function () {
    expect(isValidCreditCardNumber("")).toBe(false);
    expect(isValidCreditCardNumber("1")).toBe(false);
    expect(isValidCreditCardNumber("12")).toBe(false);
    expect(isValidCreditCardNumber("12345678901234567")).toBe(false);
    expect(isValidCreditCardNumber("12345678901234567890")).toBe(false);
  });

  test("Invalid case: all digits are the same", function () {
    expect(isValidCreditCardNumber("2222222222222222")).toBe(false);
    expect(isValidCreditCardNumber("8888888888888888")).toBe(false);
  });

  test("Invalid case: sum of digits == 16", function () {
    expect(isValidCreditCardNumber("1111111111111102")).toBe(false); // exactly 16
    expect(isValidCreditCardNumber("0000000000000088")).toBe(false); // exactly 16
  });

  test("Invalid case: sum of digits < 16", function () {
    expect(isValidCreditCardNumber("2020202020202010")).toBe(false); // < 16
    expect(isValidCreditCardNumber("8000000000000000")).toBe(false); // < 16
  });

  test("Invalid case: right-most digit is not an even number", function () {
    expect(isValidCreditCardNumber("1234567890123451")).toBe(false);
    expect(isValidCreditCardNumber("8888888888888883")).toBe(false);
    expect(isValidCreditCardNumber("1234567890123455")).toBe(false);
    expect(isValidCreditCardNumber("8888888888888887")).toBe(false);
    expect(isValidCreditCardNumber("1234567890123459")).toBe(false);
  });
});
