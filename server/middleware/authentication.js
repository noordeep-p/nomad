import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

const { mongoose } = 'mongoose';
dotenv.config();

export default function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.status(403).json({ msg: 'Authorization denied' });
    }

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!verified) {
      return res.status(403).json({ msg: 'Authorization denied' });
    }
    req.user = verified.user;
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
