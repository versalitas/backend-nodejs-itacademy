


//importing modules
 const { sprintFinished, anotherFunc } = require('../app/sprintFinished.js');



 // test sprintFinished

 test('Returns string' , async () => {
  //arrange
  
  const expectedValue = `Yay! Continue to next sprint.`;
  
  //act
  const actualValue = await sprintFinished();
  
  //assert
  expect(actualValue).toBe(expectedValue);
 }
);

  
//resets fakeTimers after every use
//
afterEach(() => {
  jest.useRealTimers();
}); 


//testing anotherFunc
test('anotherFunc execution but using fake timers', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');

  anotherFunc();
  expect(setTimeout).toHaveBeenCalledTimes(1); 
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});



