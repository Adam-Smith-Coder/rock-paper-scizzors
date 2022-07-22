const button = document.querySelectorAll(".button");
let pScore = 0;
let cScore = 0;

button.forEach((button) => {
    button.addEventListener("click", function () {
        const playerSelection = this.textContent.toLowerCase();

        const choice = ['rock', 'paper', 'scizzors'];
        const computerSelection = choice[Math.floor(Math.random() * 3)];

        playRound(playerSelection, computerSelection);
        scoreUpdate();
        gameEndCheck();
    });
});

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        document.getElementById("declaration").textContent = `It's a Tied round, choice was ${playerSelection}`;
        return;
    } 

    if ((playerSelection === 'rock' && computerSelection === 'scizzors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scizzors' && computerSelection === 'paper')) {
        pScore++;
        document.getElementById("declaration").textContent = `Round Win! ${playerSelection} beats ${computerSelection}`;
    }  else if ((computerSelection === 'rock' && playerSelection === 'scizzors') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scizzors' && playerSelection === 'paper')) {
        cScore++;
        document.getElementById("declaration").textContent = `Round Lose! ${computerSelection} beats ${playerSelection}`;
    } 
}

function scoreUpdate() {
    document.getElementById("pScore").textContent = pScore;
    document.getElementById("cScore").textContent = cScore;
}

function gameEndCheck() {
    if (pScore === 5) {
            alert (`Congratulations You Have Beat The Computer, Game will reset`)
            pScore = cScore = 0;
    } else if (cScore === 5) {
            alert (`You Made Poor Choices, The Computer Wins, Game will reset`)
            pScore = cScore = 0;
    }
}

