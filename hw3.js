'use strict'

//מגישים:
//ליאון מברין
//יאיל סאלם


// True or False:

// True or False - Task #1:
console.log("\nTrue or False - Task #1 output:");

if ("0") { // Yes, because "0" is a non-empty string, so it's considered truthy
  alert('Hello');
}


// True or False - Task #2:
console.log("\nTrue or False - Task #2 output:");

let userAnswer = prompt("What is the official name of JavaScript?");
let answer = "ECMAScript";

if (userAnswer === answer) {
  alert("Correct!");
}
else {
  alert("Doesn't know? it's ECMAScript!");
}


// True or False - Task #3:
console.log("\nTrue or False - Task #3 output:");

let score = 75;

let grade = score >= 90 ? "A" :
  score >= 80 ? "B" :
    score >= 70 ? "C" :
      score >= 60 ? "D" : "F";

console.log(`Your grade is: ${grade}`);


// True or False - Task #4:
console.log("\nTrue or False - Task #4 output:");

let userInput = prompt(`Enter number: `);

userInput > 0 ? alert(1)
  : userInput < 0 ? alert(-1) : alert(0);



// True or False - Task #5:
console.log("\nTrue or False - Task #5 output:");

let result;
let a = prompt("Enter a:");
let b = prompt("Enter b:");

a = Number(a);
b = Number(b);

a + b < 4 ? result = "Not enough" : result = 'A lot';



// True or False - Task #6:
console.log("\nTrue or False - Task #6 output:");

let message;
let login = prompt("Enter your role:");

login === 'Employee' || login === 'Director' ? message = 'Hello' :
  login === '' ? message = 'No login' : message = '';



// True or False - Task #7
console.log("\nTrue or False - Task #7 output:");

console.log(false || 'sdf'); // 'sdf'
console.log(false && ''); // false
console.log(true || ''); // true
console.log(true && ''); // ''
console.log(undefined || null); // null
console.log(undefined || 0 || null); // null
console.log(undefined && 0 && null); // undefined
console.log(1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1


// Loops:

// Loops - Task #1:
console.log("\nLoops - Task #1 output:");

let sumEx1 = 0;
let ex1 = 1;

while (ex1 <= 100)
  sumEx1 += ex1++;

console.log(sumEx1);



// Loops - Task #2:
console.log("\nLoops - Task #2 output:");

let userInputEx2;

do {
  userInputEx2 = prompt("Enter a number:");

} while (Number(userInputEx2) <= 0 || isNaN(userInputEx2));

console.log(userInputEx2);



// Loops - Task #3:
console.log("\nLoops - Task #3 output:");

for (let ex3 = 1; ex3 <= 10; ex3++) {
  console.log(`7 x ${ex3} = ${ex3 * 7}`);
}




//Loops - Task #4:
console.log("\nLoops - Task #4 output:");

const secretEx4 = 7;

for (; ;) {
  let numEx4 = prompt(`Please guess a number between 1 to 10:`);

  if (Number(numEx4) === secretEx4) {
    alert(`Correct!`);
    break;
  }
  else {
    alert(`Wrong! Try Again!`);
  }
}



//Loops - Task #5:
console.log("\nLoops - Task #5 output:");

for (let ex5 = 1; ex5 <= 30; ex5++) {
  if (ex5 % 3 == 0)
    continue;

  console.log(ex5);
}




//Loops - Task #6:
console.log("\nLoops - Task #6 output:");

let ex6 = 3;

while (ex6) {
  alert(ex6--);
}

// ANSWER: 1

// WHY:
// The last value the code will output is 1, because the condition while 'ex6' checks whether 'ex6' is truthy.
// Since all non-zero numbers are considered truthy in JavaScript, the loop runs while i is 3, 2, and 1.
// Once 'ex6' becomes 0, the condition becomes falsy and the loop stops.
// Therefore, the last value displayed by "alert(ex6--)" is 1


// Loops - Task #7:
console.log("\nLoops - Task #7 output:");

//Code 1:
console.log("Code 1 output:")
let ex7i = 0;
while (++ex7i < 5) console.log(ex7i);

//Code 2:
console.log("Code 2 output:")

let ex7j = 0;
while (ex7j++ < 5) console.log(ex7j);

//No, the outputs are different:
// Code 1: With ++ex7i, the value increases before the check, so the output is 1 to 4.
//Code 2: With ex7j++, the value increases after the check, so the output is 1 to 5.


// Loops - Task #8:
console.log("\nLoops - Task #8 output:");

//Code 1:
console.log("Code 1 output:")

for (let ex8i = 0; ex8i < 5; ex8i++) console.log(ex8i);

//code 2:
console.log("Code 2 output:")

for (let ex8j = 0; ex8j < 5; ++ex8j) console.log(ex8j);

// There is no difference, since both are incremented after each loop iteration. So the behavior is the same in this loop.



//Loops - Task #9:
console.log("\nLoops - Task #9 output:");

for (let ex9 = 2; ex9 <= 10; ex9++) {
  if (ex9 % 2 === 0) console.log(ex9);
}



//Loops - Task #10:
console.log("\nLoops - Task #10 output:");

let ex10 = 0;
while (ex10 < 3) {
  alert(`number ${ex10++}!`);
}
