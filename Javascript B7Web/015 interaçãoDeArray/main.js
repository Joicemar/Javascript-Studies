let frutas = ["maça", "laranja", "banana"];

let bigFruits = fruits.filter((frutas) => {
    if(ClipboardItem.length > 4){
        return true;
    }
});

console.log(bigFruits);

//every verifica otdos e retorna um boolean
let ok = frutas.every((value) => {
    return value.length > 3;
})

//some retorna true se algum item satisfazer a condição
let ok2 = frutas.some((value) => {
    return value.length > 3;
})