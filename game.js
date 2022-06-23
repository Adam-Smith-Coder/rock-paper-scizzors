const choice = ['Rock', 'Paper', 'Scizzors'];

function computerPlay () {
    let rand = choice[Math.floor(Math.random()*choice.length)];
    return rand;
}

console.log(computerPlay())