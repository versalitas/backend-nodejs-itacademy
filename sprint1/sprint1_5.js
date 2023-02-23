

/*Exercici 1.5.1.1==============================

Crea una funció que imprimeixi recursivament 
un missatge per la consola amb demores d'un segon.
=============================================*/


let repeatMessage = (message, exitMessage, turns) => {   
    let i = turns;
    const messageInterval = setInterval(() => {
        console.log(`${message}: ${i} s to destruction`);
        i--; 
        if(i === 0){
        console.log(exitMessage);
        clearInterval(messageInterval)}
    }, 1000); 

}   
    
repeatMessage(`Fatal error`, `False alarm.`, 5); 


/*Exercici 1.5.1.2==============================

Crea una funció que, en executar-la, 
escrigui una frase en un fitxer.
=============================================*/

const fs = require('fs');

const writeTxt = () => {

    fs.writeFile('./someText.txt', "Did this actually work?", err => {
    if (err) {
        console.error(err);
        
    }
        console.log(`The file ${'./someText.txt'} has been created`)
    })
}

writeTxt();

/*Exercici 1.5.1.3==============================

Crea una altra funció que mostri per consola el 
contingut del fitxer de l'exercici anterior.
=============================================*/

//fs module imported in the last exercise

const readText = () => {
    fs.readFile('./someText.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        
    }
    console.log(data);
    return data;
    
    });
}
 
   
//calling the function
readText();


/*Exercici 1.5.2.1==============================

Crea una funció que comprimeixi el fitxer 
del nivell 1.
=============================================*/

//fs module imported in first excercise
const zlib = require('zlib');
const gzip = zlib.createGzip();

 //Zip function

const myZipper = () => {

    const gzip = zlib.createGzip();  
    const readStream = fs.createReadStream('./someText.txt');  
    const writeStream = fs.createWriteStream('./someText.txt.gz');  
    readStream.pipe(gzip).pipe(writeStream); 
    console.log(`File has been compressed`);
} 

myZipper();

/*Exercici 1.5.2.2==============================

Crea una funció que llisti per la consola el 
contingut del directori d'usuari de 
l'ordinador utilizant Node Child Processes.
=============================================*/

//Funciona en el mac...
//directori d'usuari lo interpreto como User directory.
//changed {cwd: '/Users'} to this.pwd


//importando modulo
const { exec } = require('child_process');

const listToTerminal = () => {exec('ls -lh', this.pwd, (error, stdout, stderr) => {
  
   if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});
}

listToTerminal();

/*Exercici 1.5.3.1.1============================
Create some functions with uncanny similarities to
Frankenstein's monster... 
=============================================*/

//Need to sort out input/ output functions
//still too newbie with asynchronous coding
//to pull this off

//starting off optimistic... :)
//before getting stuck in terrible mess :_ _ _(


//1
//crea una funció que creï dos fitxers codificats 
//en hexadecimal i en base64 respectivament, 
//a partir del fitxer del nivell 1

//importing vital modules

/*
const { Buffer } = require('Buffer')
const { crypto } = require('crypto');

//encodes a text to hex and base64
 const myFirstEncoder = sync(readFunc, writeFunc) => {
   
    //reads message from original file
    const message = readFunc('./someText.txt');
    
    //creates buffer obj for encoding
    const bufferObj = Buffer.from(message, 'utf8');

    // encodes a string to hexidecimal via buffer obj
    const hexMessage = bufferObj.toString('hex');
        
    // encodes a string to base64 via buffer obj
    const base64Message = bufferObj.toString('base64');
    
    //write to files
    writeFunc(`./someTextHex.txt`, hexMessage);
    writeFunc(`./someTextBase64.txt`, base64Message);

}  

myFirstEncoder();
/*
//2
// Crea una funció que guardi els fitxers del punt anterior, 
//ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

//encryptation using aes-192-cbc

const encryptAes = (message) => {
 //OMG!!!   
    const algorithm = 'aes-192-cbc';
    const password = 'querty'
    const key = crypto.scryptSync(password, 'salt', 24);
    const iv = Buffer.alloc(16, 0); 
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = cipher.update(message, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

//deletes file
const deleteFile = (fileName) => { 
    fs.unlink(fileName, function(err))
    if (err){
        throw (err);
    }
    console.log('File deleted!');
}




const encryptAndSave = () => {
    
    const hexMessage = readFunc('./someTextHex.txt');
    const encryptedHexMessage = encryptFunc(hexMessage);
    
    const base64Message = readFunc('./someTextBase64.txt');
    const encryptedBase64Message = encryptFunc(base64Message);

    //creates new files with 
    writeFunc('./someTextHexEncrypt.txt', hexMessage);
    writeFunc('./someTextBase64Encrypt.txt', base64Message);
    
    //deletes original files
    deleteFile('./someTextHex.txt');
    deleteFile('./someTextBase64.txt');
}



//3
//Un altra funció que desencripti i descodifiqui 
//els fitxers de l'apartat anterior tornant a 
//generar una còpia de l'inicial 


//decrypter function
const decrypter = (message) => {
    const algorithm = 'aes-192-cbc';
    const password = 'querty';
    const key = crypto.scryptSync(password, 'acy16BytesString', 24)    
    const iv = Buffer.alloc(16, 0);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(message, 'hex', 'utf8');
    return decrypted += decipher.final('utf8');
  }
//veryfying function
 const verify = (txt1, txt2) => {
        new Promise((reject, resolve) => {
            if(txt1 === txt2){
                resolve(true);
            } else {
                reject (err);
            }    
        })
    }

   
  
    const txtDecrypter = async(deleteFunc, decryptFunc, verifyFunc) => {
        
        //decrypting and decoding initially hex encoded
        const encryptedHexMessage = readTxt('./someTextHexEncrypt.txt');
        const hexMessage = decryptFunc(encryptedHexMessage); 
        const hexbufferObj = Buffer.from(hexMessage, 'hex');
        const initialTxt1 = hexbufferObj.toString('utf8');
        
         //decrypting and decoding initially base 64 encoded
         const encryptedBase64Message = readTxt('./someTexBase64Encrypt.txt');
         const base64Message = decryptFunc(encryptedBase64Message); 
         const base64bufferObj = Buffer.from(base64Message, 'base64');
         const initialTxt2 = hexbufferObj.toString('utf8');

         const isOk = verifyFunc(initialTxt1, initialTxt2);

         if(isOk){

            deleteFunc('./someTextHexEncrypt.txt');
            deleteFunc('./someTextBase64Encrypt.txt');
            writeFunc('./someText.txt', initialTxt1);
        }
       } catch(err){
           console.log(`Shit happens when you assign rewriting 
           the Divine Comedy of Node.js to someone who just learned the alphabet.`)
       }
    }   
    


//4
//Un README 
//amb instruccions per a l'execució de cada part */






