let humanScore = 0;
let computerScore = 0;
let continueGame = true;

const winner = document.querySelector("#winner");

const status = document.querySelector("#status");

const score = document.querySelector("#score");

const buttonContainer = document.querySelector(".button-container");
buttonContainer.addEventListener("click", (event) => {
  target = event.target;
  playRound(
    target.id,
    getComputerChoice()
  );
});

playGame();

function playGame() {
  humanScore = 0;
  computerScore = 0;
  winner.textContent = "";
  score.textContent = `${humanScore} : ${computerScore}`;
  status.textContent = "Click a button to play!";
}

function endGame() {
  if (humanScore > computerScore) {
    winner.textContent = "YOU WIN!";
  } else if (humanScore < computerScore) {
    winner.textContent = "YOU LOSE!";
  } else {
    winner.textContent = "TIE!";
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
  score.textContent = `${humanScore} : ${computerScore}`;
  if (humanScore >= 5 || computerScore >= 5) {
    endGame();
  }
}

function lose(humanChoice, computerChoice) {
  status.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  computerScore++;
}

function win(humanChoice, computerChoice) {
  status.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  humanScore++;
}

function tie(humanChoice, computerChoice) {
  status.textContent = `Tie! ${humanChoice} and ${computerChoice}`;
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
