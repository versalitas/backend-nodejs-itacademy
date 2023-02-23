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
//const genNumEmployee = () => {return Math.floor((Math.random() * 5))};
//let someId = genNumEmployee();

//method: returns promise
const getEmployee = (numId) => {
    return new Promise((resolve, reject) => {
        if(searchEmployee(numId) !== undefined) {
            resolve(searchEmployee(numId));
        } else {
            reject(`Error: ID not valid.`);
        }
    })    
};






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
const id = 1;

getEmployee(id)
    .then(resValue => {
        let employee = resValue;
        getSalary(employee)
            .then(resSalary => {
                console.log(`The salary of the employee "${employee.name}" is $${resSalary}`);
            })
            .catch(err => console.log(`Error: ${err.message}`));
    })
    .catch(err => console.log(`Error: ${err.message}`))


module.exports = {
    getSalary,
    getEmployee,
    
}

