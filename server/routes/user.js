/* eslint-disable import/extensions */
import express from 'express';

import { loginUser, logoutUser, registerUser } from '../controllers/user.js';

const router = express.Router();

router.get('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/register', registerUser);

export default router;
