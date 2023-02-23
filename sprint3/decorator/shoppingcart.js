const {decoConvertToEuro} = require('./decorator.js');
const Product = require('./products.js');


class ShoppingCart{
    constructor(){
       this.cart = [];
       this.total = 0;
   }


//add selection to cart 
addToCart(prodArray){
for(let obj of prodArray){
    let addedProduct = new Product(obj);
    this.cart.push(addedProduct);
    }    
}

//passing the decorator function to the higher order function
convertCartToEuro(func){
    //iterating through the cart
    for(let s of this.cart) {
    func(s);
   }    
}

totalSumEuro(){
    let onlyEuro = this.cart.map(obj => obj.priceInEuro);
    let total = 0;
    for(let i = 0; i < onlyEuro.length; i++) {total += parseFloat(onlyEuro[i])};
    this.total = total;
    return this.total;
}  

printCart(){
    let extractArray = [];
    for(let i = 0; i < this.cart.length; i++){
     extractArray.push(this.cart[i].name, this.cart[i].priceInEuro);
    }
   console.log(extractArray);
}

checkOut(){
    console.log(`Total cost is ${this.total} euros. It's a steal!`);
}
}

module.exports = ShoppingCart;