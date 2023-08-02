// Select all selection buttons
const selections = document.querySelectorAll('.selection');
// Select Resultss div
const results = document.getElementById('results');

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

let playerChoice = '';
// Make sure variables are declared with number if using ++ later on
let playerScore = 0;
let computerScore = 0;
console.log(playerScore)

// selections.forEach(selection => selection.addEventListener('click', playRound));
selections.forEach(selection => selection.addEventListener('click', playRound));

// Play round of Rock, Paper, Scissors
// Takes parameters: playerSelection and computerSelection then return win/lose message
// Player inputs must be case-insensitive
function playRound(e) {
    playerChoice = e.target.innerText.toUpperCase();
    computerSelection = getComputerChoice();

    if (playerScore < 5) {
        if (playerChoice === computerSelection) {
            results.innerText = 'TIE!';
        } else if (playerChoice === 'ROCK' && computerSelection === 'PAPER') {
            results.innerText = 'You Lose! Paper beats Rock!';
            computerScore++;
        } else if (playerChoice === 'PAPER' && computerSelection === 'SCISSORS') {
            results.innerText = 'You Lose! Scissors beats Paper!';
            computerScore++;
        } else if (playerChoice === 'SCISSORS' && computerSelection === 'ROCK') {
            results.innerText = 'You Lose! Rock beats Scissors!';
            computerScore++;
        } else {
            results.innerText = 'You Win this Round!';
            playerScore++;
        };
    } else {
        // Once player reaches 5 points, display victory
        results.innerText = "YOU WON THE GAME!";
        results.style.color = 'blue';
    }
};