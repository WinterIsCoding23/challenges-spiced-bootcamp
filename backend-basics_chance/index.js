import { server } from "./server.js";

const port = 5555; 
server.listen(port, () => {
    console.log(`Server running at ${port}`);
});
