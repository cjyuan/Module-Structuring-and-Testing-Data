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

// Optional testing

// Define a helper function to shorten testing code.
// The function outputs a message only when something unexpected happened.
function mytest(cardStr, expected, expectException = false) {
  try {
    console.assert(expected === getCardValue(cardStr), cardStr);

    if (expectException) {
      console.log(`getCardValue(${cardStr}): Exception not thrown`);
    }
  } catch (err) {
    if (!expectException) {
      console.log(`getCardValue(${cardStr}): Exception thrown unexpectedly`);
    }
  }
}

// Note: The suite character is just a character,
// so any character can be used as a suite character.
mytest("A♠", 11);
mytest("2♠", 2);
mytest("3♠", 3);
mytest("4♠", 4);
mytest("5♠", 5);
mytest("6♠", 6);
mytest("7♠", 7);
mytest("8♠", 8);
mytest("9♠", 9);
mytest("10♠", 10);
mytest("J♠", 10);
mytest("Q♠", 10);
mytest("K♠", 10);

mytest("X♠", 0, true);
mytest("11♠", 0, true);
mytest("♠", 0, true);
