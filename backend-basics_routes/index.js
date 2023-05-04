import { server } from "./server.js";

const port = 9999;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
