const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Draw";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelction, computerSelection) {
  const result = checkWinner(playerSelction, computerSelection);
  if (result == "Draw") {
    return "It's a draw!";
  } else if (result == "Player") {
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
    "Welcom to the game of Odin Rock Paper and Scissors Made by AATIQ AFZAL"
  );
  console.log("welcome to my game Made by Aatiq Afzal");
  let countPlayer = 0;
  let countComputer = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("---------------------------");

    if (checkWinner(playerSelection, computerSelection) == "Player") {
      countPlayer++;
    } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
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
