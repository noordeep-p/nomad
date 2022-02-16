import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    favorite_maps: [{
      type: mongoose.Schema.Types.ObjectId,
    }],
  },
);

const UserModel = mongoose.model('UserModel', UserSchema);

export default UserModel;
