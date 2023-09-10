/**
 * 
 *
const score = {
    wins: 0,
    losses: 0,
    ties: 0
}
*/
//localStorage.setItem('message', 'hello')
//Local Storage
//console.log(localStorage.getItem('score'));

let score = JSON.parse(localStorage.getItem('score')) || {
    /**
     * Caso o score não exista, seja false, 
     * usará o modo shortcut para criar um objeto
     */
    wins: 0,
    losses: 0,
    ties: 0
};
/**
 * 
if(!score){
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}
*/
let result = '';
let move = '';

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    move = playerMove;

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
    //Save progress
    localStorage.setItem('score', JSON.stringify(score));

    gameResult();
    gameMoves();
    updateScoreElements();
}

function gameResult(){
    document.querySelector('.js-result')
    .innerHTML = result;
}
function gameMoves(){
    document.querySelector('.js-moves')
    .innerHTML = `You picked: ${move} Computer picked: ${pickComputerMove()}`;
}

function updateScoreElements(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}. Ties: ${score.ties}`;
}
/*Chamando o método*/
updateScoreElements();

function reset(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    updateScoreElements();
    localStorage.removeItem('score');

}
function playerMove(){

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
/**
 * null representa que não tem valor. 
 */