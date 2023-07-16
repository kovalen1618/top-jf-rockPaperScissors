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
    console.log(playerSelection);
    console.log(computerSelection);

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

// Press F5 to run Debug Console in VSC
console.log(playRound(playerChoice, getComputerChoice()));