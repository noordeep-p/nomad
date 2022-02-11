/* eslint-disable import/extensions */
import express from 'express';

import {
  readUser, createUser, login, readUserAllMap, createUserMap, readUserSingleMap,
} from '../controllers/user.js';

const router = express.Router();

router.get('/:username', readUser);
router.get('/:id/maps', readUserAllMap);
router.get('/:id/:mapId', readUserSingleMap);
router.post('/login', login);
router.post('/create', createUser);
router.post('/:id/maps', createUserMap);
// router.patch('/:id/:mapId', updateUserSingleMap);
// router.delete('/:id/maps', deleteUserAllMap);
// router.delete('/:id/:mapId', deleteUserSingleMap);

export default router;
