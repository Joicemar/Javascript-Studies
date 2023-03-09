
function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    ul.children[0].append("alterado"); //Adicionar conteúdo ao que já tem dentro. Só para texto.
    ul.children[0].innerHTML += "alterado"; //Tira o conteúdo da memória e coloca um novo.

    /*Adicionar um elemento de forma correta*/
    let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado";
    ul.appendChild(newLi); //adiciona no final
    ul.prepend(newLi); //adiciona no começo
}