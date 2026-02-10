import http from "http";
import app from "./app.js";
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`server running at PORT:${process.env.PORT}`);
});

export default server;
