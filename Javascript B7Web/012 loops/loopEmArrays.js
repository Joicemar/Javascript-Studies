

let tipos = ['Administrador', 'Professor','Aluno','Empregado'];
tipos.push('Segurança');

for (let n = 0; n < tipos.length; n++){
    document.write(tipos[n]);
}

for(let i in tipos){
    tipos[i] = tipos[i].toUpperCase();
    document.write(tipos[i]);
}

for(let tipo of tipos){
    document.write(tipo);
}

let cores = [
    {nome: 'preto', qt:10 },
    {nome: 'azul', qt:10 }
]

for(let cor of cores){
    document.write(cor.nome);
}

var valor = 10;

while(valor < 22){
    document.write(valor+" , ")
    valor++;
};