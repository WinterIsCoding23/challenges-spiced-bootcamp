import { server } from "./server.js";

const port = 5678;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});

/*
- Import the server from the [`server.js`](./server.js) file.
- Call the `.listen()` method on the server and pass it a port number you want to listen to, e.g. 8000.
*/