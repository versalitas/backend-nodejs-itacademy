/*Exercici 1.4.2.1==============================

Crea una nova funció asíncrona que cridi a una 
altra que retorni una Promise que efectuï la 
seva funció resolve() després de 2 segons 
de la seva invocació.
=============================================*/

  
  const sprintFinished = (randValue) => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(`Yay! Continue to next sprint.`);}, 2000);
        });
  };
  
  const anotherFunc = async() => {
    try {
      const result = await(sprintFinished());
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  
 

  module.exports = {
    sprintFinished,
    anotherFunc
  };
  
   
  