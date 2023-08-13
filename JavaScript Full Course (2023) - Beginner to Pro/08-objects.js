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
/**
 * 
 */
 const product2 = {
     name: 'shirt',  
     ['delivery-time']: ' 1 day', //Propriedade Calculada: cujo nome é determinado por uma expressão.
     rating: {
         /** É um objeto.
          * Objeto Aninhado: rating: Uma propriedade que contém um objeto 
          * aninhado com suas propriedades
         */
        start: 4.5,
        count: 87,
        name: 'something'
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
/** 
console.log(product2);
console.log(product2.name);     //maneira um de pegar o atributo do objeto
console.log(product2['name']);  //maneira dois de pegar o atributo do objeto
console.log(product2['delivery-time']); //se não existir retorna indefinido

console.log(product2.rating.count);
console.log(product2.rating);
console.log(product2.fun());

console.log(typeof product2.rating);
console.log(typeof product2.fun2);
console.log(typeof console.log);

//Javascript for JSON
JSON.stringify(product2);
console.log(JSON.stringify(product2));
console.log(typeof JSON.stringify(product2));

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));
 */
''
//Objects tem seus métodos e propriedades próprios
console.log('hello'.length);
console.log('hello'.toUpperCase());

const object1 = {
    message: 'hello'
};
const object2 = object1;

object1.message = 'Good Job!';
console.log(object1);
console.log(object2);

const object3 = {
    message: 'hello'
};
//"Return false because we are comparing the object reference, not the values, in objects."
console.log(object1 === object3);

//"In this case, compare the references, not the values inside."
console.log(object1 === object2);

const object4 = {
    message: 'Original de object4',
    cpf: 123456,
    email: 'houtal@gmail.com',
    price: 799
};

//const message = object4.message;
//This shortcut is called DESTRUCTURING
//Pegar um elemento do objeto usando o destructuring
const { message, price } = object4;
console.log(message);
console.log(price);
const { email } = object4;
console.log(email);

const object5 = {
    // shorthand property
    //messsage: message
    message,
    //method: function dunction1(){
     //   console.log('method');
    //}
    method (){
        /**
         *This shortcut is called the shorthand method syntax
         */
        console.log('method');
    };
};
console.log(object5);
object5.method();