/*=============================================
 Ex 1.2.1.1 
Mostra per la consola el resultat 
d'una arrow function autoinvocable que 
sumi dos nombres.
============================================= */

const sumNums = ((num1 , num2) => {
    return (num1 + num2);
})(5,2);

console.log(sumNums);


/* =============================================
Ex 1.2.1.2 
Arrow function que rebi un paràmetre, 
retorni un objecte amb un atribut que tingui com 
a valor el paràmetre rebut.
=============================================*/


let myObj = (valor) => {
    
  return {
      color: valor,
    }
}

console.log(myObj('green'));


/* =============================================
Ex 1.2.2.2 
classe Persona que rebi un paràmetre 
'nom' al ser instanciada. Té el mètode dirNom 
que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe.
============================================= */

class Person{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
 }
 //instanciació de objecte + invocació del mètode
 const anyone = new Person('Conrad');
 anyone.sayName();


/* =============================================
EX 1.2.3.1

Escriu una function creadora d'objectes que 
faci instàncies d'una classe abstracta. 
Invoca-la amb diferents definicions.
=============================================*/

//classe abstracte DIY... 
class Food{
    constructor(name, flavor) {
        this.name = name, 
        this.flavor = flavor
        if(this.constructor === Food){
            throw new Error ("Abstract class: object can't be instantiated");
        }
    }
    showFlavor() {
         console.log(`Today we serve ${this.name}, its taste is ${this.flavor}.`);
        }
   }


//test que no es pot instanciar la classe
//const pineApple = new Food(); 

//function que crea objectes
function fruitMaker(fruitName, fruitFlavor){
    return Object.create(Food.prototype, 
        {'name': {value: fruitName}, 
        'flavor': {value: fruitFlavor}});
};

//crida del métode
fruit1 = fruitMaker('pineapple', 'sweet');
fruit1.showFlavor();
fruit2 = fruitMaker('lemon', 'sour');
fruit2.showFlavor();
fruit3 = fruitMaker('quince', 'tart');
fruit3.showFlavor();

// Espero que esto se acerca... 



