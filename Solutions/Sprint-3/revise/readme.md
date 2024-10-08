# 🧭 Guide to revision exercises, do these last

## 🧰 Setup

**Note: You must install Jest in the root of this repo.**

## 🔧 Rewrite

`console.log` is most often used as a debugging tool. We use to inspect the state of our program during runtime.
We can use `console.assert` to write assertions: however, it is not very effective for writing large test suites.

Your first task is to rewrite the assertions from `./implement` using Jest syntax.
You will also need to update the filenames in `./implement` so they have a `.test.js` extension and _not_ just a `.js` extension.
Keep running `npm test` to check the new tests you've created.

## 🔍 Investigate

In this exercise, you'll need to **play computer** with the function `find`. This function makes use of while loop statement. Your task will be to step through the code to figure out what is happening when the computer executes the code.

## 🔧 Implement

In the `implement` directory you've got a number of functions you'll need to implement.
For each function, you also have a number of different cases you'll need to check for your function.

Use the acceptance criteria as an aid in writing tests to check your functionality.

Recommended order:

1. `get-ordinal-number.test.js`
1. `count.test.js`
1. `repeat.test.js`
1. `is-prime.test.js`

## 💪 Stretch

Try implementing the functions specified in `password-validator.js` and `card-validator.md`
