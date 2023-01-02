'use strict';

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * 2);
    return choices[choice];
}

function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Rock, paper or scissors?");
    const formatted = playerSelection.toLowerCase().replace(/\s/g, "");
    
    if(formatted == computerSelection) {
        return 0;
    }

    if(formatted == 'rock' && computerSelection == 'scissors' || 
        formatted == 'paper' && computerSelection == 'rock' ||
        formatted == 'scissors' && computerSelection == 'paper') {
            return 1;
    } 
        
    return 2;

}

function game() {

    let computerScore = 0;
    let playerScore = 0;
/*
    for(let i = 0; i < 5; i++) {
        const roundWinner = playRound();
        if(roundWinner == 1) {
            playerScore++;
        } else if (roundWinner == 2) {
            computerScore++;
        }
    }
*/
    if(computerScore == playerScore) {
        return "Draw!";
    } else if (playerScore > computerScore) {
        return "You win!";
    }

    return "You lose!";
}

console.log(game());