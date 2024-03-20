const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");
const availableOptions = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  
  // Generate a random number between 0 and 2 
  // this number will be used as index on the computerChoice array
    let randomNumber = Math.floor(Math.random() * 3);
  
  return availableOptions[randomNumber];
}

// Function to handle button clicks (player choice)
function selectAndPlay(e) {
  const clickedButtonText = e.target.innerText;
  let playerSelection = clickedButtonText;

  for (i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }

  
}

// Single round function. It adds a score to the winner of round, do nothing 
// if it's a tie  
function playRound(playerSelection, computerSelection) {

  if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  }  else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "Rock" && computerSelection === "Rock" || 
    playerSelection === "Paper" && computerSelection === "Paper" || 
    playerSelection === "Scissors" && computerSelection === "Scissors") {
    return "Tie!";
   }
}

// Attach click event listeners to buttons
rockButton.addEventListener("click", selectAndPlay);
paperButton.addEventListener("click", selectAndPlay);
scissorsButton.addEventListener("click", selectAndPlay);

