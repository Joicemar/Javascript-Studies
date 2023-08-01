let result = '';
function pickComputerMove(){
    const randomNumber = Math.random();

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