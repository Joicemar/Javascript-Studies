
//Concatenation e interpolation
let result = `items (${1 + 1}: valor $${(2095 + 799) / 100})`;

var meuElemento = document.querySelector('div');
meuElemento.textContent = result;

//exercise:
alert(`value: ${20+19.40} \n10% tax: ${(20+19.40)*0.10} `)
