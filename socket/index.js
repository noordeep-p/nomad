const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const server = http.createServer(app)
const { Server } = require("socket.io");
app.use(cors());


const PORT = 5000 || process.env.PORT;

const io = new Server(server, {
  cors: {
    origin: PORT,
  }
})

io.on('connection', socket => {
  console.log('New Connection...')

})

server.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`)
})


