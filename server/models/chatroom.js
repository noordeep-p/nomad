import mongoose from 'mongoose';

const ChatroomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    photo: {
      type: String,
    },
    members: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

const ChatroomModel = mongoose.model('ChatroomModel', ChatroomSchema);

export default ChatroomModel;
