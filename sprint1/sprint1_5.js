

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

const writeTxt = (file) => {

    fs.writeFile(, "Did this actually work?", err => {
    if (err) {
        console.error(err);
        
    }
        console.log(`The file ${file} has been created`)
    })
}

writeTxt('./someText.txt');

/*Exercici 1.5.1.3==============================

Crea una altra funció que mostri per consola el 
contingut del fitxer de l'exercici anterior.
=============================================*/

//fs module imported in the last exercise

const readText = (file) => {
    fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        
    }
    console.log(data);
    return data;
    
    });
}
 
   
//calling the function
readText('./someText.txt');


/*Exercici 1.5.2.1==============================

Crea una funció que comprimeixi el fitxer 
del nivell 1.
=============================================*/

//fs module imported in first excercise
const zlib = require('zlib');
const gzip = zlib.createGzip();

 //Zip function

const myZipper = (file) => {
    const gzip = zlib.createGzip();  
    const readStream = fs.createReadStream(file);  
    const writeStream = fs.createWriteStream('${file}.gz`);  
    readStream.pipe(gzip).pipe(writeStream); 
    console.log(`File has been compressed`);
} 

myZipper('./someText.txt');

/*Exercici 1.5.2.2==============================

Crea una funció que llisti per la consola el 
contingut del directori d'usuari de 
l'ordinador utilizant Node Child Processes.
=============================================*/

//requiring module
const { exec } = require('child_process');

// ~ represents current users home directory
const listUserDirectory = () => {
  exec('ls ~', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`User directory contents: \n${stdout}`);
  });
}

listUserDirectory();

/*Exercici 1.5.3.1.1============================
crea una funció que creï dos fitxers codificats 
en hexadecimal i en base64 respectivament, 
a partir del fitxer del nivell 1
=============================================*/

const fs = require('fs'); already required in this document
const { Buffer } = require('buffer');

const myFirstEncoder = (filename) => {
  // Read the input file
  const input = fs.readFileSync(filename, 'utf8');
  
  // Convert the input to a buffer object
  const buffer = Buffer.from(input, 'utf8');
  
  // Encode the buffer object to hex and base64 strings
  const hexText = buffer.toString('hex');
  const base64Text = buffer.toString('base64');

  // Derive the output filenames from the input filename
  const hexFilename = `${filename.slice(0, -4)}Hex.txt`;
  const base64Filename = `${filename.slice(0, -4)}Base64.txt`;
  
  // Write the encoded strings to files
  fs.writeFileSync(hexFilename, hexText);
  fs.writeFileSync(base64Filename, base64Text);

  console.log(`Files ${hexFilename} and ${base64Filename} have been created successfully`);
}

 myFirstEncoder('someText.txt');


/*Exercici 1.5.3.1.2============================
 Crea una funció que guardi els fitxers del punt anterior, 
//ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.
=============================================*/
const crypto = require('crypto');


const myFirstEncryptor = (fileName) => {
  // Get the encoded filenames from the input filename
  const hexFilename = `${fileName.slice(0, -4)}Hex.txt`;
  const base64Filename = `${fileName.slice(0, -4)}Base64.txt`;

  // Read the encoded files into buffers
  const originalFile = fs.readFileSync(fileName);
  const hexFileContent = fs.readFileSync(hexFilename);
  const base64FileContent = fs.readFileSync(base64Filename);

  // Generate a key and iv for encryption
  const key = crypto.randomBytes(24);
  const iv = crypto.randomBytes(16);

  // Create a cipher object with the key and iv
  const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);

  // Encrypt the files and write to disk
  const encryptedOriginal = Buffer.concat([cipher.update(originalFile), cipher.final()]);
  const encryptedHex = Buffer.concat([cipher.update(hexFileContent), cipher.final()]);
  const encryptedBase64 = Buffer.concat([cipher.update(base64FileContent), cipher.final()]);

  fs.writeFileSync(`${fileName.slice(0, -4)}encrypted.txt`, encryptedOriginal);
  fs.writeFileSync(`${fileName.slice(0, -4)}hex-encrypted.txt`, encryptedHex);
  fs.writeFileSync(`${fileName.slice(0, -4)}base64-encrypted.txt`, encryptedBase64);

  // Delete the original files
  fs.unlinkSync(fileName);
  fs.unlinkSync(hexFilename);
  fs.unlinkSync(base64Filename);

  console.log('Files encrypted and original files deleted.');
};

myFirstEncryptor('someText.txt');





