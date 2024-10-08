// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(n) {
  let ord = "th";

  if (n % 10 == 1 && n % 100 != 11) {
    ord = "st";
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = "nd";
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = "rd";
  }

  return n + ord;
}

describe("converts a number to an ordinal number", function () {
  test("numbers that end with 1", function () {
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(21)).toBe("21st");
  });

  test("numbers that end with 2", function () {
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(22)).toBe("22nd");
  });

  test("numbers that end with 3", function () {
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(13)).toBe("13th");
    expect(getOrdinalNumber(33)).toBe("33rd");
  });

  test("numbers that do not ends with 1, 2, or 3", function () {
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(15)).toBe("15th");
    expect(getOrdinalNumber(26)).toBe("26th");
  });

  test("numbers with more than 2 digits", function () {
    expect(getOrdinalNumber(101)).toBe("101st");
    expect(getOrdinalNumber(111)).toBe("111th");
    expect(getOrdinalNumber(123)).toBe("123rd");
    expect(getOrdinalNumber(100)).toBe("100th");
    expect(getOrdinalNumber(442)).toBe("442nd");
    expect(getOrdinalNumber(1101)).toBe("1101st");
  });
});
