const options = ["rock", "paper", "scissors"];

const CHOICES = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSORS: "scissors",
};

const RESULTS = {
  DRAW: "Draw",
  PLAYER: "Player",
  COMPUTER: "Computer",
};

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return RESULTS.DRAW;
  } else if (
    (playerSelection == CHOICES.ROCK &&
      computerSelection == CHOICES.SCISSORS) ||
    (playerSelection == CHOICES.SCISSORS &&
      computerSelection == CHOICES.PAPER) ||
    (playerSelection == CHOICES.PAPER && computerSelection == CHOICES.ROCK)
  ) {
    return RESULTS.PLAYER;
  } else {
    return RESULTS.COMPUTER;
  }
}

function playRound(playerSelction, computerSelection) {
  const result = checkWinner(playerSelction, computerSelection);
  if (result == RESULTS.DRAW) {
    return "It's a draw!";
  } else if (result == RESULTS.PLAYER) {
    return `You Win!  ${playerSelction} beats  ${computerSelection}`;
  } else {
    return `You Lost!  ${computerSelection} beats ${playerSelction}`;
  }
}

function getPlayerChoice() {
  let validInput = false;
  while (validInput == false) {
    const choice = prompt("Enter any one [Rock] [Paper] [Scissors]");
    if (choice == null) {
      continue;
    }
    const choiceInLowerCase = choice.toLowerCase();
    if (options.includes(choiceInLowerCase)) {
      validInput = true;
      return choiceInLowerCase;
    }
  }
}

function game() {
  alert(
    "Welcome to the game of Odin Rock Paper and Scissors Made by AATIQ AFZAL"
  );
  console.log("welcome to my game Made by Aatiq Afzal");
  let countPlayer = 0;
  let countComputer = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("---------------------------");
    const winner = checkWinner(playerSelection, computerSelection);
    if (winner == RESULTS.PLAYER) {
      countPlayer++;
    } else if (winner == RESULTS.COMPUTER) {
      countComputer++;
    }
  }
  console.log("Game Over");
  if (countPlayer > countComputer) {
    console.log("Player was the winner");
  } else if (countComputer > countPlayer) {
    console.log("Computer was the winner");
  } else {
    console.log("Game Draw");
  }
}

game();
