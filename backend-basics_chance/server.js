import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer ((request, response) => {
    const name = chance.name();
    const age = chance.age();
    const profession = chance.profession();
    response.end(`Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`);
});


/*
  - use the Chance documentation to find out how to create
    - a random person name and save it to a variable: `name`,
    - a random person age and save it to a variable: `age` and
    - a random web profession and save it to a variable: `profession`.
  - use the variables to build the response string: `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
- Make the server respond with the string. Reload your browser on the port you've created several times to check that it works.
*/
