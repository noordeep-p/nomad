/* eslint-disable import/extensions */
import express from 'express';

import {
  readUser, createUser, login, readUserAllMap, createUserMap, readUserSingleMap,
} from '../controllers/user.js';

const router = express.Router();

router.get('/:username', readUser);
router.post('/login', login);
router.post('/create', createUser);
router.get('/:id/maps', readUserAllMap);
router.post('/:id/maps', createUserMap);
router.get('/:username/maps/:mapId', readUserSingleMap);

export default router;
