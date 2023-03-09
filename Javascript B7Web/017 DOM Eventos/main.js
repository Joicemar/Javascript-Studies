

function clicou() {
    alert("Clicou no botao")
}

//Definindo evento do botao atravéz do próprio javascript se estiver sem o onclick="clicou()"
//Escutador de botão:


let botao = document.querySelector('.botao');
// botao.addEventListener("click", clicou); //chamando uma função já feita

let botao2 = document.querySelector('.botao');
botao.addEventListener("click", function() { //Criando a função no momento do click
    aler("Clicou");
});

let botao3 = document.querySelector('.botao');
botao.addEventListener("click", () => { //Criando a função no momento do click
    aler("Clicou");
});
