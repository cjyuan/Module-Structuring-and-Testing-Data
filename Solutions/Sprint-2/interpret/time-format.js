<<<<<<< HEAD
function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// A: 3 (all called in line 11)

// Call formatTimeDisplay with an input of 61, now answer the following:
console.log(formatTimeDisplay(61));

// b) What is the value assigned to num when pad is called for the first time?
// A: 0

// c) What is the return value of pad() when it is called for the first time?
// A: "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// A: 1 (The value of remainingSeconds is the remainder when 61 is divided 60, calculated at line 6)

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
/*
 *   A: "01"
 *
 *     When pad(remainingSeconds) is called at line 11, the value of remainingSeconds, 1, is
 *       passed to the parameter num.
 *
 *    When num is 1, num.toString() yields "1" (a string)
 *
 *    Subsequently, num.toString().padStart(2, 0) convert "1" to "01"
 *           
 */        
=======
function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// A: 3 (all called in line 11)

// Call formatTimeDisplay with an input of 61, now answer the following:
console.log(formatTimeDisplay(61));

// b) What is the value assigned to num when pad is called for the first time?
// A: 0

// c) What is the return value of pad() when it is called for the first time?
// A: "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// A: 1 (The value of remainingSeconds is the remainder when 61 is divided 60, calculated at line 6)

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
/*
 *   A: "01"
 *
 *     When pad(remainingSeconds) is called at line 11, the value of remainingSeconds, 1, is
 *       passed to the parameter num.
 *
 *    When num is 1, num.toString() yields "1" (a string)
 *
 *    Subsequently, num.toString().padStart(2, 0) convert "1" to "01"
 *           
 */        
>>>>>>> f4fe6aa6fe119428bd61373e77921ea8c2b430a9
