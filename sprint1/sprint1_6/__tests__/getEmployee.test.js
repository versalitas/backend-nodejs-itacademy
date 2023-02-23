/*Exercici 1.4.1.1==============================

=============================================*/


const {getEmployee, getSalary 
} = require('../app/getEmployee.js');


test('Should return Linux Torvalds with a 4000 salary', async () => {
  
  const result = await getEmployee(1);
  expect(result.name).toBe('Linux Torvalds');

  const result2 = await getSalary({ id: 1, name: 'Linux Torvals' });
  expect(result2).toBe(4000);
});


