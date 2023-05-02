
function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    ul.insertAdjacentHTML('afterend', 'Texto qualquer');
}

