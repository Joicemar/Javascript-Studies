
function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    const newButton = document.createElement('button');
    newButton.innerHTML = "Botao";

    ul.before(newButton);

    let newLi = document.createElement('li');
    newLi.innerHTML = "Item add";
    ul.append(newLi);
}


