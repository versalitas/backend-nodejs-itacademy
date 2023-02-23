
Create a file with a calculator app (adds, subtracts, multiplies) receiving the parametres from a JSON. Create an external class that saves the middleware functions. Insert to the call middleware that executes square, cubic and divisional operations. Call the executions of adding, subtracting, and multiplying displaying the modifications of the initial values before the final result.


## Middleware

Execute from a terminal initiated within the middleware folder.

```
node app.js

```
### Middleware

SOME EXAMPLES:
- parsing data (e.g. JSON from request)
- loggers 
- session managers
- protection against attacks (e.g. authentication check of protected routes)
- return 404

Middleware structure:

request => middleware1 => middleware2 => response;

*request to route '/' => *SERVER (app.use(func) => app.get('/'.func)) => response

The middleware pattern consists of code that runs (on the server) between getting a request and sending a response. 
The exit point of each unit is the entry point to the next.

*Order is importante since app.get('/'.func) sends the response to the route and no more code will be executed.

.

Example of implementation:
```
const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
```
(*next is the third argument that is passed to the middleware function.)
To load the middleware function, call *app.use(), specifying the middleware function.
```
//loads logger before path to root
app.use(myLogger)

//the path handler terminates the request
app.get('/root', (req, res) => {
  res.send('Hello World!')
})
```

https://expressjs.com/en/guide/writing-middleware.html

### JSON
- JSON **J**ava**S**cript **O**bject **N**otation
- JSON property names must be in double-quoted (" ")
- JSON do not allow trailing commas
- JSON do not represent types  (dates can be stored as a string and converted to a language-specific data structure)
- JSON is a string format.
#### JSON string
```
'{"name":"John", "surname":"Cage", "current":null}'
```
#### JSON object literal 
```
{"name":"John", "surname":"Cage", "current":null}
```

myJSON = '{"name":"John", "age":30, "car":null}';
myObj = JSON.parse(myJSON);

## JSON and node.js

### Synchronous 
```
const fs = require('fs');

let myJSON = fs.readFileSync('someData.json');
let myObj = JSON.parse(myJSON);
console.log(parametres);
```
### Asynchronous 
```
const fs = require('fs');

fs.readFile('someData.json', (err, data) => {
    if (err) throw err;
    let myObj = JSON.parse(data);
    console.log(myObj);
});
```
### Using require 
drawback: uses cached data and will not access updates.

```
let jsonData = require('./somedata.json');

console.log(jsonData);
```

https://stackabuse.com/reading-and-writing-json-files-with-node-js/

https://www.w3schools.com/js/js_json_objects.asp


