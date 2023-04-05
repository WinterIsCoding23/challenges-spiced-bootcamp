console.clear();

// EXERCISE 1
// Extract only the course name from the company object.
// Make sure to export your variable as in the example below to make the tests work.

const company = {
  name: "neuefische",
  course: "Web Development",
  location: "Hamburg",
};

// example: export const {value1} = myObject;
export const {name} = company; 

// EXERCISE 2
// We have an object called 'user'.
// Write the destructuring assignment that reads:
//  2.1: 'name' property into the variable 'name'.
//  2.2: 'years' property into the variable 'age'.
//  2.3: 'isAdmin' property into the variable 'isAdmin' (false, if no such property exists)

const user = { name: "John", years: 30 };

//2.1
export const { name } = user;
//2.2
export const { years: age} = user; 
//2.3
export const { isAdmin = false} = user; 

// EXERCISE 3
// Extract the variables from the dog object and
// rename them like "dogName", "dogBreed", and "dogAge", respectively.

const dog = {
  name: "Pluto",
  breed: "husky",
  age: 5,
};

export const { name :dogName} = dog;

// EXERCISE 4
// Extract the 'lastName' property from the person object as "personLastName".
// Store all other properties in an object called "moreInformation".

const person = {
  lastName: "Main",
  age: 24,
  firstName: "Alex",
};

export const { lastName: personLastName, ...moreInformation} = person;


/*
## Hints

- Use the variable names given in the task to destructure the given object.
- The value can correspond to a simple data type as well as to an object.
- Make sure to export the variable you have declared in order to make the tests work.
- If you want to check whether you solved the tasks correctly, open the "Tests" tab of Codesandbox.
*/

