//This code controls the random choice of the computer opponent//
const choice = ['rock', 'paper', 'scizzors'];

function computerPlay () {
    let rand = choice[Math.floor(Math.random()*choice.length)];
    return rand;
}
//This is the code that compares player choice vs computer choice and declares a round winner//
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a Tie"
    } else if ((playerSelection === 'rock' && computerSelection === 'scizzors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scizzors' && computerSelection === 'paper')) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if ((computerSelection === 'rock' && playerSelection === 'scizzors') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scizzors' && playerSelection === 'paper')) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else {
        return "This is not a choice"
    }
}

const playerSelection = 'Paper';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)) 