// Import dependencies and routes
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import { Server } from 'socket.io';
import chatroomRoutes from './routes/chatroom.js';
import messageRoutes from './routes/message.js';
import userRoutes from './routes/user.js';
import mapRoutes from './routes/maps.js';
import authenticateToken from './middleware/authentication.js';

// Initialize socket.io
const io = new Server(4000, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

// Middleware
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config({ path: './.env.local' });

const PORT = process.env.PORT || 3000;

// Routes
app.use('/user', userRoutes);

// Protected Routes
app.use('/maps', mapRoutes, authenticateToken);
app.use('/chatroom', chatroomRoutes, authenticateToken);
app.use('/message', messageRoutes, authenticateToken);

// Connect to db
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
  })
  .catch((e) => {
    console.log(e.message);
  });

// Start socket.io web socket connection
io.on('connection', (socket) => {
  console.log('a user connected.');
  socket.on('message', () => {
    socket.broadcast.emit('message', 'message');
  });
  socket.on('chat', () => {
    socket.broadcast.emit('chat', 'chat');
  });
  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
});
