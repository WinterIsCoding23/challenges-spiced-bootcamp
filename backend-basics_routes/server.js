import { createServer } from "node:http";

export const server = createServer((request, response) => {
    console.log(request);
    // response.end("Hellohello");
    response.statusCode = 200; 
    request.url === "/api/fish/1" ? response.end("request.url") : console.log("Dit war wohl nischt");
    request.url === "/api/fish/2" ? response.end("request.url") : console.log("Dit war wohl nischt");
    
})


/*
- Switch to the [`server.js`](./server.js); use the `createServer` method provided by the `node:http` module to create a server.
- Inside of the function body of `createServer`, you can access the requested url with the help of the `request` object; it provides a `url` key which holds the url value.
  - Check the value of this `url` key to equal `/api/fish/1` or `/api/fish/2` and pass the respective value to `response.end()` as argument. Make sure to also set the correct status code using `response.statusCode =`.
- Export the server as a named export from the [`server.js`](./server.js) file.
*/
