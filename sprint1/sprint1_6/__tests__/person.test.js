const Person = require("../__mocks__/person.js");
//testing the class with a mock class


afterEach(() => {
    jest.clearAllMocks();
});



test('Calls the constructor once', () => {
    const person = new Person("Chesire Cat");
    expect(person).toHaveBeenCalledTimes(1);
});

test('Calls the sayName function once', () => {
    const person = new Person("Alicia");
    person.sayName();
    expect(person.sayName).toHaveBeenCalledTimes(1);
});
