import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config({ path: './.env.local' });

export default function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.status(403).json({ msg: 'No JWT Token: Authorization denied' });
    }

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!verified) {
      return res.status(403).json({ msg: 'Cannot Verify JWT Token: Authorization denied' });
    }
    req.user = verified.user;
    return next();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
