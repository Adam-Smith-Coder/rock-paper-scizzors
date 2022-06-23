const choice = ['Rock', 'Paper', 'Scizzors'];

function computerPlay () {
    let rand = choice[Math.floor(Math.random()*choice.length)];
    return rand;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie"
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scizzors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scizzors' && computerSelection === 'Paper')) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)) 