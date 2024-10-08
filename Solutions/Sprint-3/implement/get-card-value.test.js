// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."

// Assume rank is case sensitive. For example 'a' is not treated equally as 'A.
function getCardValue(cardStr) {
  const rank = cardStr.slice(0, -1); // Get rid of the suite character

  if (rank == "A") return 11;

  if (rank == "J" || rank == "Q" || rank == "K") return 10;

  if (Number(rank) >= 2 && Number(rank) <= 10) return Number(rank);

  throw "Invalid card rank.";
}

// Testing the function in Jest syntax

describe("testing getCardValue()", function () {
  test("valid card ranks: A, 2-10, J, Q, K", function () {
    expect(getCardValue("A♠")).toBe(11);
    expect(getCardValue("2♠")).toBe(2);
    expect(getCardValue("3♠")).toBe(3);
    expect(getCardValue("4♠")).toBe(4);
    expect(getCardValue("5♠")).toBe(5);
    expect(getCardValue("6♠")).toBe(6);
    expect(getCardValue("7♠")).toBe(7);
    expect(getCardValue("8♠")).toBe(8);
    expect(getCardValue("9♠")).toBe(9);
    expect(getCardValue("10♠")).toBe(10);
    expect(getCardValue("J♠")).toBe(10);
    expect(getCardValue("Q♠")).toBe(10);
    expect(getCardValue("K♠")).toBe(10);
  });

  test("an exception is thrown when a card rank is invalid", function () {
    // For more info about .toThrow(), see: https://jestjs.io/docs/expect#tothrowerror
    expect(function () {
      getCardValue("X♠");
    }).toThrow("Invalid card rank.");
    expect(function () {
      getCardValue("11♠");
    }).toThrow("Invalid card rank.");
    expect(function () {
      getCardValue("♠");
    }).toThrow("Invalid card rank.");
    expect(function () {
      getCardValue("a♠");
    }).toThrow("Invalid card rank.");
  });
});
