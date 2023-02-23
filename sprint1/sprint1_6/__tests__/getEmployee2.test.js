




const { getEmployee, getSalary} = require('../app/getEmployee2.js');


test('Returns salary.', async () => {
    testID = 3;
    expectedResult = 2000;
    employee = await getEmployee(testID);
   
    actualResult= await getSalary(employee);
    expect(actualResult).toBe(expectedResult);
});


