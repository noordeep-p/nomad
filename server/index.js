// Import dependencies and routes
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/user.js';
import mapRoutes from './routes/maps.js';
import pointRoutes from './routes/points.js';
import authenticateToken from './middleware/authentication.js';

// Middleware
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

// Routes
app.use('/user', userRoutes);
app.use('/maps', authenticateToken, mapRoutes);
app.use('/points', authenticateToken, pointRoutes);

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
