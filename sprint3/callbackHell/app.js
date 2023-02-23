// Node utils revisited
const {readdir, readFile, writeFile} = require("fs");
const {join} = require("path");

//set absolute path within folder to inbox and outbox directories 
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

/*convert to array with split, 
use reverse array method, 
and convert to string with join */

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");


const manipulateFiles = (err, files) => {
  if(err) return console.log("Error: Folder inaccessible");
  files.forEach(file => readReverseWrite(file));
}

const readReverseWrite = (file) => {
  readFile(join(inbox, file), "utf8", (err, data) => {
    if (err) {
      return console.log("err: File err");
    } else { 
    //write reversed text to file
      writeFile(join(outbox, file), reverseText(data), err => {
        if (err) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      })
     }
  })
 }

 readdir(inbox, manipulateFiles);
