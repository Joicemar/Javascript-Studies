
function clicou() {
    const teste =document.querySelector('.teste');
    console.log(teste); //Imprime a div inteira no console
    console.log(teste.children[0].children); //Pegando um elemento dentro de outro

    const ul = teste.querySelector('ul'); //Maneira mais aconselhável de pegar um elemento
    ul.innerHTML = "<li>Item alterado</li>"; //Alterando o elemento interno de ul.
    ul.innerHTML = ul.innerHTML + "<li>Item alterado</li>"; //Adicionando elemento no ul.
    console.log(ul);

    console.log(ul.outerHTML); //Pega o elemento junto com o interno
}