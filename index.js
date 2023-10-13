function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function getComputerChoice() {
  //It returns any of the computer 
  //choice such as rock paper or scissors
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";
  const randomNumber = generateRandomNumber(1, 3);
  if (randomNumber == 1) {
    return rock;
  } else if (randomNumber == 2) {
    return paper;
  }
  return scissors;
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection == computerSelection) {
    return "Tie";
  }
  else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
           (playerSelection == 'scissors' && computerSelection == 'paper') ||
           (playerSelection == 'paper' && computerSelection == 'rock')) {
    return "Player Wins!!";
  }
  return "Humanity lost to AI!!!!!";
}

function validatePlayerSelection(playerSelection) {
  const selection = playerSelection.toLowerCase();
  if (selection == 'rock' || selection == 'paper' || selection == 'scissors') {
    return selection;
  } else {
    const getPlayerSelection = prompt("Please enter a valid choice");
    validatePlayerSelection(getPlayerSelection);
  }
}

function game() {
  //Make this function to play a 5 round game
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice:");
    const validSelection = validatePlayerSelection(playerSelection);

    const computerSelection = getComputerChoice();
    console.log(validSelection);
    console.log(computerSelection);
    let winner = playRound(playerSelection, computerSelection);
    if (winner == "Player Wins") {
      playerWins++;
    } else {
      computerWins++;
    }
  }
  console.log(playerWins + " " + computerWins);
  if (playerWins > computerWins) {
    console.log("In the long battle between human and AI, human withstands");
  } else if (computerWins > playerWins) {
    console.log("Humanity is dommed!!!");
  } else {
    console.log("Should wait for another battle!!");
  }
}

game()