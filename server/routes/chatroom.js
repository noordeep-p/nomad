import express from 'express';

import {
  createChatroom, getChatroomsWithUser, getAllChatroomMembers,
} from '../controllers/chatroom.js';

const router = express.Router();

router.post('/', createChatroom);
router.get('/', getAllChatroomMembers);
router.get('/:userId', getChatroomsWithUser);

export default router;
