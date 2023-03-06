
function maiorDeIdade(idade) {
    if(idade > 17){
        return true;
    }
    else {
        return false;
    }
}
//calculo de porcentagem
document.write(maiorDeIdade(18));

function calcPct(x, y){

    return x / y * 100;;
}
document.write(calcPct(10, 200));

//Calculo preço imovel
function valorImovel( quartos){
    if(quartos == 2){
        return 3000 * 1.2;
    }
    else if(quartos == 3){
        return 3000 * 1.5;
    }
    else {
        return 3000;
    }
}
document.write("valor do imóvel: "+valorImovel(2))