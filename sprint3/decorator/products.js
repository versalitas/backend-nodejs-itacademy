
class Products{
    //properties passed from JSON
    constructor(obj){
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              this[prop] = obj[prop];
            }
        }
    }
}

module.exports = Products;