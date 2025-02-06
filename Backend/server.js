import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import connectDB, { connectIo } from "./connections.js"

const app = express();
const PORT = 5555;
app.use(express.static('public'));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

connectDB();

connectIo(io);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
