#! /usr/bin/env node

import inquirer from "inquirer";

const random = Math.floor(Math.random() * 10 + 1);
  console.log("\n\n\t\t\t\t-------- Welcome To Guessing Game --------\n")
  
const userInput = await inquirer.prompt([
  
    {
    message: "Please guess a number between 1-10: ",
    type: "number",
    name: "userGuessedNumber",
  },
]);

if (userInput.userGuessedNumber === random) {
  console.log("Congrulation! You Guess a right number.");
} else {
  console.log("You Guess a wrong number.");
}
