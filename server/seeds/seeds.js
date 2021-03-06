import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserModel from '../models/users.js';
import MapModel from '../models/maps.js';
import ChatroomModel from '../models/chatroom.js';
import MessageModel from '../models/messages.js';
import { generateMaps, getMapIds } from './mapSeeds.js';
import { generateUsers, getUserIds } from './userSeeds.js';
import chatSeeds from './chatroomSeeds.js';

const userIds = getUserIds();
const mapIds = getMapIds();

const userSeeds = generateUsers(userIds);
const mapSeeds = generateMaps(mapIds, userIds);

dotenv.config({ path: './.env.local' });

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB server connected...... starting to seed');
  })
  .catch((e) => {
    console.log(e.message);
  });

Promise.all([
  UserModel.collection.drop(),
  MapModel.collection.drop(),
  ChatroomModel.collection.drop(),
  MessageModel.collection.drop(),
  UserModel.insertMany(userSeeds),
  MapModel.insertMany(mapSeeds),
  ChatroomModel.insertMany(chatSeeds),
]).then(() => {
  mongoose.connection.close();
  console.log('Successfully seeded DB');
});
