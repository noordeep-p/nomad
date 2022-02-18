import ChatroomModel from '../models/chatroom.js';

export const createChatroom = async (req, res) => {
  const { name, photo } = req.body;
  const newChatroom = new ChatroomModel(
    { name, photo },
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

export const getAllChatrooms = async (req, res) => {
  try {
    const chatrooms = await ChatroomModel.find();
    res.status(200).json(chatrooms);
  } catch (err) {
    res.status(500).json(err);
  }
};
