'use strict';

const roundWinner = document.querySelector('.round-winner');
const playerSelection = document.getElementById("player-selection");
const pcSelection = document.getElementById("pc-selection");
const playerScore = document.getElementById("player-score");
const pcScore = document.getElementById("pc-score");
const buttons = document.querySelectorAll(".button");
const gameWinner = document.querySelector('.game-winner');
const modalContainer = document.querySelector('.modal-container');
const replayButton = document.querySelector('.replay');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function showSelection(player, selection) {
    switch(selection) {
        case 'rock':
            player.textContent = '✊';
            break;
        case 'paper':
            player.textContent = '✋';
            break;
        case 'scissors':
            player.textContent = '✌';
    }
}

function updateScore(player, score) {
    player.textContent = parseInt(player.textContent) + score;
}

function getPlayerChoice(e) {
    if(e.srcElement.innerHTML == '✊') {
        console.log(`Player selected: ${e.srcElement.innerHTML}`);
        return 'rock';
    }
    if(e.srcElement.innerHTML == '✋') {
        console.log(`Player selected: ${e.srcElement.innerHTML}`);
        return 'paper';
    }
    if(e.srcElement.innerHTML == '✌') {
        console.log(`Player selected: ${e.srcElement.innerHTML}`);
        return 'scissors';
    }
}

function getRoundWinner(playerChoice, computerChoice) {
    if(playerChoice == computerChoice) {
        return 0;
    }

    if(playerChoice == 'rock' && computerChoice == 'scissors' || 
        playerChoice == 'paper' && computerChoice == 'rock' ||
        playerChoice == 'scissors' && computerChoice == 'paper') {
            return 1;
    } 
        
    return 2;
}

function showModal() {
    modalContainer.classList.remove('inactive');
    modalContainer.classList.add('active');
}

function playRound(e) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice(e);
    console.log(playerChoice);

    showSelection(playerSelection, playerChoice);
    showSelection(pcSelection, computerChoice);

    let winner = getRoundWinner(playerChoice, computerChoice);
    console.log(winner);

    if(winner == 0) {
        roundWinner.textContent = `Draw! ${playerChoice} ties with ${computerChoice}`;
    } else if (winner == 1) {
        roundWinner.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        updateScore(playerScore, 1);
    } else {
        roundWinner.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        updateScore(pcScore, 1);
    }

    if(playerScore.textContent == 5) {
        gameWinner.textContent = "You won the game!"
        showModal();
        console.log("Player wins");
    } else if (pcScore.textContent == 5) {
        gameWinner.textContent = "You lost the game!"
        showModal();
        console.log("PC wins");
    }
}

buttons.forEach(button => button.addEventListener("click", playRound));

function resetGame() {
    modalContainer.classList.add('inactive');
    modalContainer.classList.remove('active');
    roundWinner.textContent = 'First to score 5 points wins';
    playerScore.textContent = 0;
    pcScore.textContent = 0;
}

replayButton.addEventListener('click', resetGame);