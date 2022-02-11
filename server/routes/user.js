/* eslint-disable import/extensions */
import express from 'express';

import {
  readUser, createUser, login, readUserAllMap, createUserMap,
} from '../controllers/user.js';

const router = express.Router();

router.get('/:username', readUser);
router.post('/login', login);
router.post('/create', createUser);
router.get('/:id/maps', readUserAllMap);
router.post('/:username/maps', createUserMap);
// router.get('/:username/maps/:mapid', readUserSingleMap);

export default router;
