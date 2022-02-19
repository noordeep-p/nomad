const io = require("socket.io")(4000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected.");
  socket.on('message', () => {
    socket.broadcast.emit("message", "message");
  });
  socket.on('chat', () => {
    socket.broadcast.emit("chat", "chat");
  });
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
  });
});