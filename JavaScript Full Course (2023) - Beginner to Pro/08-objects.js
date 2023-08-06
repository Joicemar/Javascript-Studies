/**
 * 
const product = {
    name: 'socks',
    price: 1090
}
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton sockts';
console.log(product);

product.newProperty = "tere";
product.newProperty = true;
console.log(product) 
console.log(product.newProperty) 
*/
const product2 = {
    name: 'shirt',  
    ['delivery-time']: ' 1 day', //Propriedade Calculada: cujo nome é determinado por uma expressão.
    rating: {
        /** É um objeto.
         * Objeto Aninhado: rating: Uma propriedade que contém um objeto 
         * aninhado com as propriedades start (valor 4.5) e count (valor 87).
         */
        start: 4.5,
        count: 87
    },
    fun: function function1(){
        /** fun é um método. pois contém um método.
         * Método (Função) do Objeto: fun: Uma propriedade que contém uma
         * função (método) chamada function1 que imprime uma mensagem no console.
         */
        console.log('function inside object');
    },
    fun2: function(){
        //função anônima 
        console.log('function inside object');
    }
};
console.log(product2);
console.log(product2.name);     //maneira um de pegar o atributo do objeto
console.log(product2['name']);  //maneira dois de pegar o atributo do objeto
console.log(product2['delivery-time']); //se não existir retorna indefinido

console.log(product2.rating.count);
console.log(product2.fun());

console.log(typeof product2.rating);
console.log(typeof product2.fun2);
console.log(typeof console.log);