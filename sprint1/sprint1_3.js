/*Exercici 1.3.1.1==============================
Funció que retorni una Promise que 
invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera 
que imprimeixin un missatge diferent depenent 
de si la Promise es resol o no. 
=============================================*/

//function for random (and realistic) dishwasher outcomes
const coinToss = () => {
    if ((Math.floor(Math.random() * 2) % 2 === 0 )) {
        return true;
    } else {
        return false;
    }
}  

//IKEA "Renlig" dishwasher Promise function
const renligProm = (cleanState) => {
    return new Promise((resolve, reject) => {
        if(cleanState){
            resolve(`OMG, it's clean!`);
        } else {
            reject(`Something went wrong. Clean filters and refill salt.`);
        }
    });
}

// handler functions
const handleCleanSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };
  
const handleCleanFailure = (rejectReason) => {
    console.log(rejectReason);
  };

let isClean = coinToss();
renligProm().then(handleCleanSuccess, handleCleanFailure);


/*Exercici 1.3.1.2==============================
Arrow function que rebi un paràmetre 
i una funció callback i li passi a la 
funció un missatge o un altre (que s'imprimirà per consola) 
en funció del paràmetre rebut.
=============================================*/

//calling randomized function: 
let isGranted = coinToss();

//function messages
const automatedReply = (result) => {
    if(result){
        return `Your application has been successfully processed.`;
    } else {
        return `Your application has mysteriously disappeared into the Twilight Zone.`;
    }
}
//output function
const grantApplication = (result, replyFunc) => {
    const reply = replyFunc(result);
    console.log(reply);
};
    

grantApplication(isGranted, automatedReply);

/*Exercici 1.3.2.1==============================
Donats els objectes employees i salaries, 
crea una arrow function getEmployee que retorni 
una Promise efectuant la cerca en l'objecte pel seu id.
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

//search function 
const searchEmployee = (numId) => {
    for (i = 0 ; i < employees.length ; i++) {
         if(employees[i].id === numId) {
             return employees[i];
         }
    }    
};

//generator of employee id:s
const genNumEmployee = () => {return Math.floor((Math.random() * 5))};
let someId = genNumEmployee();

//method: returns promise
getEmployees = (numId) => {
    return new Promise((resolve, reject) => {
        if(searchEmployee(numId) !== undefined) {
            resolve(searchEmployee(numId));
        } else {
            reject(`Error: ID not valid.`);
        }
    })    
};



getEmployees(someId)
.then(resValue => {console.log(resValue)
})
.catch(rejectValue => {console.log(rejectValue)});


/*Exercici 1.3.2.2====================================
Crea una altra arrow function getSalary que rebi com a 
paràmetre un objecte employee i retorni el seu salari.
=====================================================*/



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


const employeeObj = searchEmployee(someId);
getSalary(employeeObj)
.then(resValue => {console.log(`The salary for ${employeeObj.name} is ${resValue}`);
})
.catch(rejectValue => {console.log(rejectValue)});


/*Exercici 1.3.2.3====================================
Invoca la primera funció getEmployee 
i després getSalary niant l'execució de les dues promises.
=====================================================*/

/*
el codig està en el pròxim apartat amb el catch posat
*/
/* Exercici 1.3.3.1====================================
Fixa un element catch a la invocació del 
nivell anterior que capturi qualsevol error 
i el mostri per la consola. 
=====================================================*/


getEmployees(someId)
.then((resolvedValue) => {
    console.log(`${resolvedValue.name} is currently employed.` )
    return getSalary(resolvedValue);
})
.then((resolvedValue) => {
    console.log(`The salary of this employee is ${resolvedValue}.`);
})
.catch((rejectValue) => {
    console.log(rejectValue);
});

   