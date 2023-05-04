import { createServer } from "node:http";

export const server = createServer ((request, response)=> {
    response.end("Hello, Baldrian");
})


/*
- Import the `createServer` method from the `http` module.
- Call `createServer` and pass it a function with two parameters: `request` and `response`.
- In the function body of the function passed to `createServer`, call `response.end()` and pass it the string "Hello, [your name]!".
- Export the server as a named export.
*/
