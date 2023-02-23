/*Exercici 1.4.1.1==============================

Donats els objectes employees i salaries, 
crea una arrow function getEmployee que 
retorni una Promise efectuant la cerca 
en l'objecte pel seu id. Crea una altra arrow 
function getSalary que rebi com a paràmetre 
un objecte employee i retorni el seu salari.
=============================================*/


let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


//generating Id
const randId = Math.floor(Math.random() * 5);

//console.log(numId);  
console.log(`RandomId is ${randId}`);

//search function 
const searchEmployee = (numId) => {
  for (i = 0 ; i < employees.length ; i++) {
       if(employees[i].id === numId) {
           return employees[i];
       }
  }    
};


//method: returns promise
getEmployee = (numId) => {
  return new Promise((resolve, reject) => {
      if(searchEmployee(numId) !== undefined) {
          resolve(searchEmployee(numId));
      } else {
          reject(`Error: ID not valid.`);
      }
  })    
};


getEmployee(randId)
.then(resValue => {console.log(resValue)
})
.catch(rejectValue => {console.log(rejectValue)});


//search function
const searchSalary = (obj) => {
  for (i = 0 ; i < salaries.length ; i++) {
       if(salaries[i].id === obj.id) {
           return salaries[i].salary;
       }
  }    
};


const getSalary = (obj) => {
  return new Promise ((resolve, reject) => {
      if (obj!== undefined){
          resolve(searchSalary(obj));
      } else {
          reject(`Error. Employee not in the register.`)
      }
  })
};


const employeeObj = searchEmployee(randId);
getSalary(employeeObj)
.then(resValue => {console.log(resValue)
})
.catch(rejectValue => {console.log(rejectValue)});



/*Exercici 1.4.1.2==============================

Crea una funció asíncrona que rebi un id d'empleat 
i imprimeixi per pantalla el nom de l'empleat i 
el seu salari, usant les funcions que has 
definit a l'exercici anterior.
=============================================*/


const employeeFunc = async(numId) => {
  try{
    const currentEmployee = await getEmployee(numId);
    const salary = await getSalary(currentEmployee);
    console.log(`${currentEmployee.name}: ${salary}`);
  } catch (err) {
    console.log(`Error.`)
  }
};

employeeFunc(randId);

/*Exercici 1.4.2.1==============================

Crea una nova funció asíncrona que cridi a una 
altra que retorni una Promise que efectuï la 
seva funció resolve() després de 2 segons 
de la seva invocació.
=============================================*/
const coinTosser = () => {
  if ((Math.floor(Math.random() * 2) % 2 === 0 )) {
      return true;
  } else {
      return false;
  }
}; 

coinToss = coinTosser();
console.log(`Your coin toss: ${coinToss}`);

const sprintFinished = (randValue) => {
    return new Promise((resolve, reject) => {
      if(randValue){
        setTimeout(() => {
          resolve(`Yay! Continue to next sprint.`);}, 2000);
      } else {
        reject(`Error, error, error, you'll need to practise more.`);
      }
    });
};

const anotherFunc = async(randValue) => {
  try {
    const result = await(sprintFinished(randValue));
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

//calling function
anotherFunc(coinToss);

 

  




/*Exercici 1.4.3.1==============================

Captura tots els errors possibles dels 
nivells 1 i 2.
=============================================*/

/* están arriba ya incorporados.  */

