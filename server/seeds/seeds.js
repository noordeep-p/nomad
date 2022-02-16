import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserModel from '../models/users.js';
import MapModel from '../models/maps.js';
import { generateMaps, getMapIds } from './mapSeeds.js';
import { generateUsers, getUserIds } from './userSeeds.js';

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
  UserModel.insertMany(userSeeds),
  MapModel.insertMany(mapSeeds),
]).then(() => {
  mongoose.connection.close();
  console.log('Successfully seeded DB');
});
