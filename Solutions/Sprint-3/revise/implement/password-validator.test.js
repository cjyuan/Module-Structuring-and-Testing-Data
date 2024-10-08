/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

// Let this to be the password array (for testing purpose)
const passwords = ["Code1!", "Your3#", "Future4$", "5%Hello", "Wo..rld", "0*&1Mm"];


// Since the spec does not mention what characters are NOT allowed, 
// I assume the passwords to be tested only contain letters, digits, and the specified 
// non-alphanumeric symbols.


function isValidPassword(password) {

    const specialChars = ["!", "#", "$", "%", ".", "*", "&"];

    if (password.length < 5) return false;

    // Initially, assume password does not satisfy these conditions
    let hasDigit = false, hasUppercase = false, hasLowercase = false, hasNonAlphaNumeric = false;

    let index = 0;
    while (index < password.length) {
        const ch = password[index];

        if (ch >= '0' && ch <= '9')         // Is a digit
            hasDigit = true;
        else
        if (ch >= 'A' && ch <= 'Z')         // Is an uppercase letter
            hasUppercase = true;
        else
        if (ch >= 'a' && ch <= 'z')         // Is a lowercase letter
            hasLowercase = true;
        else
        if (specialChars.indexOf(ch) != -1) // Is one of the required non-alphanumeric characters
            hasNonAlphaNumeric = true;

        index ++;
    }

    // True if password has at least one of the required characters and 
    // is not one of the string in passwords[].
    return hasDigit && hasUppercase && hasLowercase && hasNonAlphaNumeric && 
        passwords.indexOf(password) == -1;
}

// This is another implementation involving regular expressions (rename this to test this implementation if needed)
function isValidPassword2(password) {
    return password.length >= 5 &&           // Have at least 5 characters
        /\d/.test(password) &&               // Contain a digit
        /[a-z]/.test(password) &&            // Contain a lowercase letter
        /[A-Z]/.test(password) &&            // Contain an uppercase letter
        /[!#$%.*&]/.test(password) &&        // Contain any of the specified non-alphanumeric character
        passwords.indexOf(password) == -1;   // Not one of the strings in passwords[].
}

describe("test isValidPassword()", function () {
    test("Valid passwords", function () {

        expect(isValidPassword("$Bar1!")).toBe(true);
        expect(isValidPassword("3&4%Bb&")).toBe(true);
        expect(isValidPassword("VeryLongPassword123456789!#$%.*&")).toBe(true);
        expect(isValidPassword("$Many12345Digits67890")).toBe(true);

        expect(isValidPassword("!Foo1")).toBe(true);
        expect(isValidPassword("F#oo2")).toBe(true);
        expect(isValidPassword("Fo$o3")).toBe(true);
        expect(isValidPassword("Foo%4")).toBe(true);
        expect(isValidPassword("Foo5.")).toBe(true);
        expect(isValidPassword("Foo6*")).toBe(true);
        expect(isValidPassword("Foo7&")).toBe(true);
        expect(isValidPassword("Foo8&")).toBe(true);
        expect(isValidPassword("Foo9*")).toBe(true);
        expect(isValidPassword("Foo0*")).toBe(true);
      });

    test("Invalid cases: Not having at least 5 characters", function () {
      expect(isValidPassword("")).toBe(false);
      expect(isValidPassword("A")).toBe(false);
      expect(isValidPassword("AB")).toBe(false);
      expect(isValidPassword("123")).toBe(false);
      expect(isValidPassword("1234")).toBe(false);
    });

    test("Invalid cases: Just missing digits", function () {
        expect(isValidPassword("$Bar!")).toBe(false);
        expect(isValidPassword("&%Bb&")).toBe(false);
        expect(isValidPassword("VeryLongPassword!#$%.*&")).toBe(false);
        expect(isValidPassword("$NoDigits")).toBe(false);
      });

      test("Invalid cases: Just missing lowercase letters", function () {
        expect(isValidPassword("$BAR1!")).toBe(false);
        expect(isValidPassword("3&4%B&")).toBe(false);
        expect(isValidPassword("VERYLONGPASSWORD123456789!#$%.*&")).toBe(false);
        expect(isValidPassword("$MANY12345DIGITS67890")).toBe(false);
      });

      test("Invalid cases: Just missing uppercase letters", function () {
        expect(isValidPassword("$bar1!")).toBe(false);
        expect(isValidPassword("3&4%b&")).toBe(false);
        expect(isValidPassword("verylongpassword123456789!#$%.*&")).toBe(false);
        expect(isValidPassword("$many12345digits67890")).toBe(false);
      });

      test("Invalid cases: Just missing a non-alphanumeric letters", function () {
        expect(isValidPassword("Bar12")).toBe(false);
        expect(isValidPassword("34Bbc")).toBe(false);
        expect(isValidPassword("VeryLongPassword123456789")).toBe(false);
        expect(isValidPassword("Many12345Digits67890")).toBe(false);
      });
  });