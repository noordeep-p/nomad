import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true },
);

const MessageModel = mongoose.model('MessageModel', MessageSchema);

export default MessageModel;
