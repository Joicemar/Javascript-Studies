//parameters
function calculate(parameter) {
    document.write('result: ' + parameter * 0.1 + '<br>');
}
calculate(2000);
calculate(5000);

//parameters with a default parameter
function calculateTax(cost, texPercent = 0) {
    document.write('calculateTax result: ' + (cost * texPercent) + '<br>');
    /*Caso o segundo parâmetro não for inserido, ele funcionará
     e adicionará um valor padrão.
    */
}
calculateTax(2000, 0.2);
calculateTax(5000);
