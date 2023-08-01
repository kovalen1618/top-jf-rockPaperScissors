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

if (playerScore < 5) {
    // selections.forEach(selection => selection.addEventListener('click', playRound));
    selections.forEach(selection => selection.addEventListener('click', playRound));
} else {
        results.innerText = "YOU WON THE GAME!";
}

// Play round of Rock, Paper, Scissors
// Takes parameters: playerSelection and computerSelection then return win/lose message
// Player inputs must be case-insensitive
function playRound(e) {
    playerChoice = e.target.innerText.toUpperCase();
    computerSelection = getComputerChoice();

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
};


// // Game function
// // Play 5 rounds that are kept score and reports a winner or loser at the end
// function rockPaperScissorsGame() {
//     let status;
//     // Make sure variables are declared with number if using ++ later on
//     let playerScore = 0;
//     let computerScore = 0;

    // for (let i = 0; i < 5; i++) {
    //     status = playRound(playerChoice, getComputerChoice());
    //     console.log(status);

    //     if (status.includes('You Lose')) {
    //         computerScore++;
    //     } else {
    //         playerScore++;
    //     }
    // }

//     status = playRound(playerChoice, getComputerChoice());
//     return console.log(status);

//     if (status.includes('You Lose')) {
//         computerScore++;
//     } else {
//         playerScore++;
//     }

//     // if (playerScore < computerScore) {
//     //     return 'Game Over, You Lose!'
//     // } else {
//     //     return 'You Won the Game!'
//     // }
// }

// // Press F5 to run Debug Console in VSC
// console.log(rockPaperScissorsGame());