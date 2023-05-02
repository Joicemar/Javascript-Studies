

function clicou(){
    const input = document.querySelector('input');

    if (input.hasAttribute('placeholder')){
        input.setAttribute('placeholder', 'placeholder Alterado')
    }else {
        input.setAttribute('placeholder', 'placeholder adicionado')
    }
}