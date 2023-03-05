

var valor = 10, valor2 = 7, valor3 = 5;

document.write(valor - valor2);
document.write(valor/valor3);
document.write((valor*valor2) * valor3);


if(valor < valor3){
    document.write("Valor a é maior")
}
else if (valor == valor3){
    document.write("Valores iguais")
}
else{
    document.write("Valor menor")
}

while(valor < 22){
    document.write(valor+" , ")
    valor++;
};