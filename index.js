let playerWins = 0;
let computerWins = 0;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function displayResults(winner) {
  body.innerHTML = "";
  const p = document.createElement('p');
  p.textContent = `Winner is - ${winner}`;
  body.appendChild(p);
  const retry = document.createElement('button');
  retry.textContent = 'RETRY';
  body.appendChild(retry);
  retry.addEventListener('click', () => {location.reload()});
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

function playRound(e) {
  // your code here!
  const playerSelection = e.target.textContent;
  const computerSelection = getComputerChoice();
  console.log(playerSelection + " " + computerSelection);
  if (playerSelection == computerSelection) {
    // return "Tie";
  }
  else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
           (playerSelection == 'scissors' && computerSelection == 'paper') ||
           (playerSelection == 'paper' && computerSelection == 'rock')) {
    playerWins++;
    // return "Player Wins!!";
  } else {
    computerWins++;
  }
  // return "Humanity lost to AI!!!!!";
  p.textContent = `Player ${playerWins} - Computer ${computerWins}`;
  display.appendChild(p);
  body.appendChild(display);
  if (computerWins == 5 || playerWins == 5) {
    computerWins == 5 ? displayResults('Computer') : displayResults('Player');
  }
}

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
button1.textContent = 'rock';
button2.textContent = 'paper';
button3.textContent = 'scissors';

const p = document.createElement('p');

button1.addEventListener('click', playRound);
button2.addEventListener('click', playRound);
button3.addEventListener('click', playRound);

const display = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(button1);
body.appendChild(button2);
body.appendChild(button3);

