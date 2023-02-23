The challenge is to code a gameapp. Various players can be created and 
added to the game. A score counter tracks the scores and the winner. The game can add and substract from each player's score thus the score counter class should be implemented with the singleton pattern.*/



## Singleton Pattern

Execute from a terminal initiated within the singleton folder.


´´´
node app.js

´´´




Singleton is an object/ class restricted to having a single, unique instance, 
with a single point of access. We need to ensure that the constructor is called 
only once and to reuse that instance.



One variant would be:

```
class Singleton {
  constructor() {
    if (!Singleton._instance) {
      Singleton._instance = this;
    }
    return Singleton._instance;
  }
}
```
Source: https://bretcameron.medium.com/singletons-in-javascript-59655927b7d7

Another variant is the "singletonish" pattern taking advantage of Node.js modules caching system. 
(source: https://medium.com/swlh/node-js-and-singleton-pattern-7b08d11c726a)

Every call to require(‘singleton’) will get exactly (though unfortunately not in all circumstances) the same object returned since modules are cached after the first time they're loaded. The "-ish" indicates it's not 100% foolproof.

```
class Singleton {
    constructor() {
        this.message = 'I am an instance';
    }
}
module.exports = new Singleton();
```

The instance of the class is exported module.exports = new Singleton(). 
Node.JS will cache and reuse the same object each time it’s required.


Implementing singleton patterns.
https://medium.com/@maheshkumawat_83392/node-js-design-patterns-singleton-pattern-series-1-1e0ab71e3edf
https://stackoverflow.com/questions/53023332/javascript-good-way-to-create-or-design-singleton-class
https://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-a-singleton-in-javascript
https://www.digitalocean.com/community/tutorials/js-js-singletons
