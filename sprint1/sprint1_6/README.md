
# sprint1NodeProject


This project is located in the sprint1 repository.
It consists of code to be tested and matching tests developped 
within the JEST framework.

Original code to be tested: ../app
  
Testing code folder:  ../`__tests__ `

Mock code folder: ../`__mocks__`

### TEST EXECUTION:

Test framework: JEST
Execution lines for the tests:

```
npm test
npm run test
```


### 1.6.1 
---
 **Task 1.1:**

*Create a file with basic calculation functions 
(sum, substract, multiply, and divide) and create a test.*

```
Original code (calculus functions): ../app/calculator.js
Test functions: ../__tests__/calculate.test.js
```
  
Test output: checks if the calculus functions return the correct answer.

**Task 1.2:**

*Create the necessary tests for checking the execution of the Async/Await level 1.1.*

```
Original code (getter Functions): app/getEmployee.js
Test functions: ../`__tests__`/getEmployee.test.js
```
Test output: checks if the getEmployee and getSalary return the correct values.

**Task 1.3**

*Create the necessary test checking the execution of Async/Await level 2.1.*
```
Original code (getter Functions): app/sprintFinished.js
Test functions: ../`__tests__`/sprintFinished.test.js
```
Test output: Checks if the sprintFinished function returns correct answer when invoked, and after the expected time setting (2 s) using Jest fake Timers.

**Task 1.4**

*Create the necessary tests for checking the execution of Promises and Callbacks level 2.3
```
Original code (getter Functions): app/getEmployee2.js
Test functions: ../`__tests__`/getEmployee2.test.js*
```

### 1.6.2
---
*Create a mock que checks the calls to the Person class constructor and the method sayName of Classes and Arrow Functions level 2.2.*

```
Original code (Person Class with sayName function): app/person.js
Test functions: ../`__mocks__`/person.js 
`__tests__`/person.test.js
```
Test output: The test creates a mock of the person.js file. Checks how many times the function is invoked and the method called... or that was the idea at least.

### 1.6.3



    “‍Would you tell me, please, which way I ought to go from here?‍”

    “‍That depends a good deal on where you want to get to,‍” said the Cat.

    “‍I don’t much care where—‍” said Alice.

    “‍Then it doesn’t matter which way you go,‍” said the Cat.

    “‍—So long as I get SOMEWHERE,‍” Alice added as an explanation.

    “‍Oh, you’re sure to do that,‍” said the Cat, “‍if you only walk long enough.‍”
    
                                          

 Lewis Carroll, *Alice in Wonderland.*
