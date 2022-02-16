import express from 'express';

import {
  readUser, login, register,
} from '../controllers/user.js';

const router = express.Router();

router.get('/:username', readUser);
router.post('/login', login);
router.post('/register', register);

export default router;
