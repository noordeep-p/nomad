import express from 'express';

import {
  readUser, login, createUser,
} from '../controllers/user.js';

const router = express.Router();

router.get('/:username', readUser);
router.post('/login', login);
router.post('/create', createUser);
// router.get('/:id/maps', readUserAllMap); => move to maps route
// router.get('/:id/:mapId', readUserSingleMap); => move to maps route

export default router;
