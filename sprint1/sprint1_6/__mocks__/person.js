//Intuyo que hay que crear una clase mock que luego introduces 
//en los tests... pero me he perdido. 
//mocked class


jest.mock('../app/person.js'); 
const Person = require('../app/person');

const mockMethod = jest.fn();

Person.mockImplementation(() => {
  return {
    method: mockMethod,
  };
});

const person = new Person('someName');
person.method();
console.log('Calls to method: ', mockMethod.mock.calls);









/* otro intento
jest.mock("../app/person");
const { Person } = require("../app/person");

beforeEach(() => {
    person = new Person('name');
})*/