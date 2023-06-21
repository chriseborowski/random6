let randomNumber = Math.round(Math.random() * 100);
let counter = 6;

function userInput(prompt) {
  let readlineSync = require('readline-sync');
  let input = readlineSync.question(prompt);
  return input;
}

let userNumber = Math.round(userInput("Enter a whole number between 1 and 100: "));

for (let i = 0; i < 5; i++) {
  if (parseInt(userNumber) > randomNumber) {
    console.log("Too big! Try again.");
    counter -= 1;
    userNumber = Math.round(userInput(`Remaining attempts: ${counter}.\nEnter a whole number between 1 and 100: `));
  } else if (parseInt(userNumber) < randomNumber) {
    console.log("Too small! Try again.");
    counter -= 1;
    userNumber = Math.round(userInput(`Remaining attempts: ${counter}.\nEnter a whole number between 1 and 100: `));
  } else if (parseInt(userNumber) === randomNumber) {
    console.log("You guessed it! Congratulations!");
    return randomNumber;
  } else {
    console.log("Please enter a whole number between 1 and 100.");
    userNumber = Math.round(userInput(`Remaining attempts: ${counter}.\nEnter a whole number between 1 and 100: `));
  }
}

if (userNumber != randomNumber) {
  console.log(`The random number was ${randomNumber}. Better luck next time!`);
}
