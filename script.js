// Played against computer

// Player selection
let playerChoice = 'RoCK';


// Randomly either return 'Rock', 'Paper', or 'Scissors' from the computer
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return 'ROCK';
    } else if (choice === 2) {
        return 'PAPER';
    } else if (choice === 3) {
        return 'SCISSORS';
    };
};

// Play round of Rock, Paper, Scissors
// Takes parameters: playerSelection and computerSelection then return win/lose message
// Player inputs must be case-insensitive
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    // Algorithm
    if (playerSelection === computerSelection) {
        return 'TIE!';
    } else if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return 'You Lose! Paper beats Rock!'
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return 'You Lose! Scissors beats Paper!'
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return 'You Lose! Rock beats Scissors!'
    } else {
        return 'You Win!'
    };
};

// Game function
// Play 5 rounds that are kept score and reports a winner or loser at the end
function rockPaperScissorsGame() {
    let status;
    // Make sure variables are declared with number if using ++ later on
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        status = playRound(playerChoice, getComputerChoice());
        console.log(status);

        if (status.includes('You Lose')) {
            computerScore++;
        } else {
            playerScore++;
        }
    }

    if (playerScore < computerScore) {
        return 'Game Over, You Lose!'
    } else {
        return 'You Won the Game!'
    }
}

// Press F5 to run Debug Console in VSC
console.log(rockPaperScissorsGame());