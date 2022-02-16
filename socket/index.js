const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");
app.use(cors());


const PORT = 5000 || process.env.PORT;

const io = new Server(server, {
  cors: {
    origin: PORT,
  }
});

io.on('connection', socket => {
  console.log('New Connection...');

  socket.emit('message', 'Welcome!');

  socket.broadcast.emit('message', 'user joined');

  socket.on("join_chat", (data) => {
    socket.join(data);
  });

  socket.on("send_messageData", (data) => {
    socket.to(data.chatroom).emit("receive_messageData", data);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
