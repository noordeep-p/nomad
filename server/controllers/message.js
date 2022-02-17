import MessageModel from '../models/messages.js';

export const createMessage = async (req, res) => {
  const newMessage = new MessageModel(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const messages = await MessageModel.find({
      chatroomId: req.params.chatroomId,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
};
