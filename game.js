const button = document.querySelectorAll(".button");
let pScore = 0;
let cScore = 0;

button.forEach((button) => {
    button.addEventListener("click", function () {
        const playerSelection = this.textContent;

        const choice = ['Rock', 'Paper', 'Scizzors'];
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

    if ((playerSelection === 'Rock' && computerSelection === 'Scizzors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scizzors' && computerSelection === 'Paper')) {
        pScore++;
        document.getElementById("declaration").textContent = `Round Win! ${playerSelection} beats ${computerSelection}`;
    }  else if ((computerSelection === 'Rock' && playerSelection === 'Scizzors') || (computerSelection === 'Paper' && playerSelection === 'Rock') || (computerSelection === 'Scizzors' && playerSelection === 'Paper')) {
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
            document.getElementById("gameover").textContent = `Congratulations You Have Beat The Computer, Game will reset`
            setTimeout(function(){ 
                document.location.reload();; 
            }, 5000);
    } else if (cScore === 5) {
            document.getElementById("gameover").textContent = `You Made Poor Choices, The Computer Wins, Game will reset`
            setTimeout(function(){ 
                document.location.reload();; 
            }, 5000);
    }
}
