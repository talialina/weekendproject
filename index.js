const input = require(`readline-sync`);
function playGame() {
  let userChoice = input.question("Choose rock, paper or scissors? ").trim();
  let computerChoice = Math.random().toFixed(2);
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  comparePicks(userChoice, computerChoice);
}
playGame();
function comparePicks(choice1, choice2) {
  if (choice1 === choice2) {
    console.log("The result is a tie!");
  }
  if (choice1 === "rock") {
    if (choice2 === "scissors") {
      console.log("rock wins");
    } else {
      console.log("paper wins");
    }
  }
  if (choice1 === "paper") {
    if (choice2 === "rock") {
      console.log("paper wins");
    } else {
      if (choice2 === "scissors") {
        console.log("scissors wins");
      }
    }
    if (choice1 === "scissors") {
      if (choice2 === "rock") {
        console.log("rock wins");
      } else {
        if (choice2 === "paper") {
          console.log("scissors wins");
        }
      }
    }
    console.log("User Choice: " + userChoice);
    console.log("Computer Choice: " + computerChoice);
  }
  let playAgain = input.question("Do you want to play again? ");
  if (playAgain === "yes") {
    playGame();
  }
}
