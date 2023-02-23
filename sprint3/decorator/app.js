
//const fs = require('fs');
const ShoppingCart = require('./shoppingcart.js');
const {decoPriceToEuro} = require('./decorator.js');

//instantiating ShoppinCart object
const shoppingCart = new ShoppingCart();

//parsing and saving as an array the products
//const productsJSON = fs.readFileSync('./products.json', 'utf8');
//let selectionArray = JSON.parse(productsJSON);

let selectionArray = [{"name": "Ivy Bra","price": "22.90", "currency" : "USD"}, 
{"name": "Ivy Camisole","price": "49.90", "currency" : "CNY"},
{"name": "Ivy Slippers","price": "19.90", "currency" : "GBP"},
{"name": "Ivy Vanity","price": "14.90", "currency" : "JPY"},
{"name": "Ivy Gown","price": "59.90", "currency" : "CAD"},
{"name": "Ivy Culotte","price": "15.90", "currency" : "USD"}]

//adding products to cart
shoppingCart.addToCart(selectionArray);

//converting to Euro
shoppingCart.convertCartToEuro(decoPriceToEuro);
shoppingCart.printCart();
shoppingCart.totalSumEuro();
shoppingCart.checkOut();





   
    








