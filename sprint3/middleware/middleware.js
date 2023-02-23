//The methods from the target obj are 
//captured and called through creating theme dynamically in the manager.
//the middleware is instantiated passing the target object as a parametre
class Middleware {
    constructor(target) {
      this.target = target;
      this.middlewares = [];
      this.req = {};
  
    //step 1: obtain target objects PROTOTYPE and iterate through it to pass functions.
    //step 2: create the function dynamically (not through constructor)
    //step 3: map the valued for the entry to the manager with the necessary parametres for each call
     const prototype = Object.getPrototypeOf(this.target);
      Object.getOwnPropertyNames(prototype).forEach(fn => {
        if (fn !== "constructor") return this.createFn(fn);
      });
    }
    use(middleware) {
      this.middlewares.push(middleware);
    }
    executeMiddleware(i = 0) {
      if (i < this.middlewares.length) {
        this.middlewares[i].call(this, this.req, () =>
          this.executeMiddleware(i + 1)
        );
      }
    }
    
    createFn(fn) {
      this[fn] = args => {
        this.req = args;
        this.executeMiddleware();
        return this.target[fn].call(this, this.req);
      };
    }
  }
  
  module.exports = Middleware;