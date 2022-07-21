//This code controls the random choice of the computer opponent//
const choice = ['rock', 'paper', 'scizzors'];

function computerPlay () {
    let rand = choice[Math.floor(Math.random()*choice.length)];
    return rand;
}

let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0

//This is the code that compares player choice vs computer choice and declares a round winner//
function playRound(playerSelection, computerSelection) {
    //this code ensures that user input is case insensitive//
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a Tied round, choice was ${playerSelection}`
    } else if ((playerSelection === 'rock' && computerSelection === 'scizzors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scizzors' && computerSelection === 'paper')) {
        playerScore++;
        return `You Win the round! ${playerSelection} beats ${computerSelection}`;
    } else if ((computerSelection === 'rock' && playerSelection === 'scizzors') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scizzors' && playerSelection === 'paper')) {
        computerScore++;
        return `You Lose the round! ${computerSelection} beats ${playerSelection}`
    } else {
        //needed to ensure that user is aware their choice was not correct//
        return "This is not a valid choice"
    }
}

// function game() {
//     for (let i = 0; i < 5; i++){
//         //these variables are needed here so they are declared for every round//
//         playerSelection = prompt("Choose Rock, Paper or Scizzors");
//         computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     //this part of the code logs the final score and declares the outcome of the game//
//     if (i = 5 && computerScore > playerScore) {
//         console.log(`Your Score ${playerScore} Computer Score ${computerScore}`)
//         return "Game Over, you have lost"
//     } else if (i = 5 && playerScore > computerScore) {
//         console.log(`Your Score ${playerScore} Computer Score ${computerScore}`)
//         return "Victory, you have beat the computer"
//     } else if (i = 5 && playerScore === computerScore) {
//         console.log(`Your Score ${playerScore} Computer Score ${computerScore}`)
//         return "The game has ended in a stalemate"
//     }
// }

//required to actually run the game function//

playerSelection = prompt("Choose Rock, Paper or Scizzors");
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
