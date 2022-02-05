/* eslint-disable import/extensions */
import express from 'express';

import { readUser, createUser, login } from '../controllers/user.js';

const router = express.Router();

router.get('/:username', readUser);
router.post('/login', login);
router.post('/create', createUser);

export default router;
