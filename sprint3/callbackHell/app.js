// Node utils revisited
// still quite callbackish... but I'm out of ideas.

const {readdir, readFile, writeFile} = require("fs");

const {join} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

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
  //debug console.log(file);
  readFile(join(inbox, file), "utf8", (err, data) => {
  if (err) {return console.log("err: File err");
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