//https://www.freecodecamp.org/news/json-stringify-example-how-to-parse-a-json-object-with-javascript/
const fs = require('fs');

//Omar's hint lead me to this:
//https://www.oreilly.com/library/view/learning-javascript-design/9781449334840/ch09s14.html

/* example of decorating an object function Memory( macbook ) { 

    var v = macbook.cost(); 
    macbook.cost = function() { 
      return v + 75; 
    }; 
*/

function decoPriceToEuro(obj){
    const currencyJSON = fs.readFileSync('./currency_conversions.json', 'utf8',);
    const allRates = JSON.parse(currencyJSON);
    obj.priceInEuro = (obj.price * allRates[obj.currency + "_EUR"]).toFixed(2);
}


//original conversion function
/*const convertToEuro = (price, currency) => 
{return (allRates[currency + "_EUR"] * price).toFixed(2)};

//
const decoConvertToEuro = (convertToEuro) => {
    
    const currencyJSON = fs.readFileSync('./currency_conversions.json', 'utf8',);
    const allRates = JSON.parse(currencyJSON);
    
     return convertToEuro = (price, currency) => 
     {return (allRates[currency + "_EUR"] * price).toFixed(2)};
}
*/


    
    
    

module.exports.decoPriceToEuro = decoPriceToEuro;

 
            
