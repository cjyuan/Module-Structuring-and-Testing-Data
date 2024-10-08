// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

function isPrime(num) {
  if (num == 2)
    // the only even number that's a prime number
    return true;

  if (num == 1 || num % 2 == 0)
    // 1 or even number
    return false;

  // Test all odd numbers <= square root of num, starting with 3
  // Note: Instead of checking x <= square root of y, we can also check x*x <= y)
  let factor = 3;
  while (factor * factor <= num) {
    if (num % factor == 0) return false;

    factor += 2;
  }

  // If no odd numbers can fully divide num, then num must be a prime number
  return true;
}

describe("test isPrime()", function () {
  test("prime numbers", function () {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(41)).toBe(true);
    expect(isPrime(99991)).toBe(true);
  });

  test("non-prime numbers", function () {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(101 * 103)).toBe(false);
    expect(isPrime(41 * 41)).toBe(false);
  });
});
