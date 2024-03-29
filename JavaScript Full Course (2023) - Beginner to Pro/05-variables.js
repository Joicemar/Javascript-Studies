/*-----------------------------------
Just use const. if he creates a
variable that cannot be changed later..
-------------------------------------*/
let variable1 = 3;
console.log('variable1 value: ' + variable1);

const calculation = 2 + 3;
console.log(calculation);
console.log(calculation + 2);

const result = calculation + 2;
console.log(result);

const message = 'hello';
console.log(message);

variable1 = variable1 + variable1 + 3;
console.log(variable1);

const variable2 = 3;
var variable3 = 3; //Not use var in new javascript

console.log(typeof variable2);
console.log(typeof message);
/*
Naming Conventions:
camalCase       cartQuantity | used in javascript
PascalCase      CartQuantity
Kabab-case      cart-quantity
snake_case      cart_quantity
- used in other languages
try to pick name that is not too short os too long.
*/
/*================================================
In this lesson
1. Variables = a way to save values
2. Re-assign a variable
3. Created the Cart Quantity feature
4. Shortcuts for re-assigning a variable
5. Naming conventions and best practices
6. 3 ways to create a variable: let, const, var
-------------------------------------------------*/