
//https://stackoverflow.com/questions/39318027/how-to-write-a-middleware-class-in-node-js

//transcripción de pistas (en su momento) crípticas de Omar: 
//calc = new Calculator(); / sum, sub, multi, div, => calc.(param), calc.sub(param) etc
//app = new Middleware(calc);  /app.sum(param), app.sub(param)
// for (method in calc){this.method = for(method.par = par)} añadir como último middleware y ejecutar middleware.


const numbers  = require('./numbers.json');
let Calculator = require('./calculator');
const Middleware = require('./middleware');

//instantiating new calculator/ target
let calc = new Calculator();
//setting target
let app = new Middleware(calc);


//registering square function in the middleware manager
app.use((req, next) => {
    console.log(`The square of ${numbers.a} is ${Math.pow(numbers.a, 2)}`); 
    next();
});

// dito cube
app.use((req, next) => {
    console.log(`The cube of ${numbers.a} is ${Math.pow(numbers.a, 3)}`); 
    next();
});
// dito division
app.use((req, next) => {
    console.log(`Dividing ${numbers.a} by ${numbers.b} equals ${numbers.a / numbers.b}`); 
    next();
});


//executing invoking the method of the calculator class via the manager app.
console.log(`Sum of ${numbers.a} and ${numbers.b} equals `+ app.add(numbers));
console.log(`Subtracting ${numbers.b} from ${numbers.a} equals ` + app.subtract(numbers));
console.log(`Multiplying ${numbers.b} with ${numbers.a} equals ` + app.multiply(numbers));


/* Not sure why I had t
app.use((req, next) => {
    console.log(`The square of ${numbers.a} is ${Math.pow(numbers.a, 2)}`); 
    next();
});

// dito cube
app.use((req, next) => {
    console.log(`The cube of ${numbers.a} is ${Math.pow(numbers.a, 3)}`); 
    next();
});
// dito division
app.use((req, next) => {
    console.log(`Dividing ${numbers.a} by ${numbers.b} equals ${numbers.a / numbers.b}`); 
    next();
});
*/