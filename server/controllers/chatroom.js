import ChatroomModel from '../models/chatroom.js';

export const createChatroom = async (req, res) => {
  const newChatroom = new ChatroomModel(
    { members: [req.body.senderID, req.body.receiverId] },
  );
  try {
    const savedChatroom = await newChatroom.save();
    res.status(200).json(savedChatroom);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getChatroomsWithUser = async (req, res) => {
  try {
    const chatrooms = await ChatroomModel.find({
      members: { $in: [req.params.userID] },
    });
    res.status(200).json(chatrooms);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllChatroomMembers = async (req, res) => {
  const { membersArr } = req.body;
  try {
    const chatrooms = await ChatroomModel.findOne({
      members: { $all: membersArr },
    });
    res.status(200).json(chatrooms);
  } catch (err) {
    res.status(500).json(err);
  }
};
