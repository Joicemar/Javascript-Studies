
/**
 * Display text when the Enter key is pressed on the keyboard.
 * And created a function to reuse the code.
 */
function checkKey(event){
    if(event.key === 'Enter'){
        showText();
    }
}
function showText() {
    const name = document.querySelector('.name_input').value;

    const textElement = document.querySelector('.text');
    
    const textNode = document.createTextNode(name);

    document.querySelector('.text')
    .innerHTML = "Your name is: "+name;
    //textElement.appendChild(textNode);
}
