import express from 'express';

import {
  createChatroom, getChatroomsWithUser, getAllChatrooms,
} from '../controllers/chatroom.js';

const router = express.Router();

router.post('/', createChatroom);
router.get('/', getAllChatrooms);
router.get('/:userId', getChatroomsWithUser);

export default router;
