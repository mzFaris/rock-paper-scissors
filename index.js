/*
initialize human and computer score
call playGame function
  loop for 5 time
    TODO call playRound that take computerChoice and humanChoice
      DONE get computerchoice
      DONE get human choice
    increament computerScore ot humanScore
*/

let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log("YOU WIN!");
  } else if (humanScore < computerScore) {
    console.log("YOU LOSE!");
  } else {
    console.log("TIE!");
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    tie(humanChoice, computerChoice);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    win(humanChoice, computerChoice);
  } else {
    lose(humanChoice, computerChoice);
  }
}

function lose(humanChoice, computerChoice) {
  console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  computerScore++;
}

function win(humanChoice, computerChoice) {
  console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  humanScore++;
}

function tie(humanChoice, computerChoice) {
  console.log(`Tie! ${humanChoice} and ${computerChoice}`);
  computerScore++;
  humanScore++;
}

function getHumanChoice() {
  return prompt("ROCK PAPER SCISSORS!").toLowerCase();
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
