let playerScore = 0
let computerScore = 0

const button = document.querySelectorAll(".button");

button.forEach((button) => {
    button.addEventListener("click", function () {
        const playerSelection = this.textContent.toLowerCase();

        const choice = ['rock', 'paper', 'scizzors'];
        const computerSelection = choice[Math.floor(Math.random() * 3)];

        playRound(playerSelection, computerSelection);
    });
});

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        alert (`It's a Tied round, choice was ${playerSelection}`);
        return;
    } 

    if ((playerSelection === 'rock' && computerSelection === 'scizzors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scizzors' && computerSelection === 'paper')) {
        playerScore++;
        alert (`You Win the round! ${playerSelection} beats ${computerSelection}`);
    }  else if ((computerSelection === 'rock' && playerSelection === 'scizzors') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scizzors' && playerSelection === 'paper')) {
        computerScore++;
        alert (`You Lose the round! ${computerSelection} beats ${playerSelection}`);
    } 
}

// function game() {
//     for (let i = 0; i < 10; i++){
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


