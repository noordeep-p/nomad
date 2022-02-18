const io = require("socket.io")(4000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("New Connection...");

  socket.emit("message", "Welcome!");

  socket.broadcast.emit("message", "user joined");

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