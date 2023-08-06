/**
 * 
 *
 */
const score = {
    wins: 0,
    losses: 0,
    ties: 0
}
function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';
    if (playerMove === 'Scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    }
    else if (playerMove === 'Paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
    }
    else if(playerMove === 'Rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if(result === 'You win.'){
        score.wins++;
    }else if(result === 'You lose.'){
        score.losses++;
    }else{
        score.ties++;
    }
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    Wins: ${score.wins}, Losses: ${score.losses}. Ties: ${score.ties}`);
    
}

function reset(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    greet();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        return 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        return 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        return 'scissors';
    }
    /*Uma das principais vantagens de usar variaveis em escopo de funções é que
    pode ser nomeadas com o mesmo nome de outro arquivo de código
    */
}
/**
 * 
 */
let Simom = 'Simom';
let Joe = 'Joe';
let Doe = 'Doe';
function greet(name){
    if(name === undefined){
        console.log('Hi there!')
    }else{
        console.log(`Hello ${Simom}`)
    }
}