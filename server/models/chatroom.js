import mongoose from 'mongoose';

const ChatroomSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true },
);

const ChatroomModel = mongoose.model('ChatroomModel', ChatroomSchema);

export default ChatroomModel;
