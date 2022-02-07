import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserModel from '../models/users.js';
import MapModel from '../models/maps.js';
import PointModel from '../models/points.js';
import { generateMaps, getMapIds } from './mapSeeds.js';
import { generateUsers, getUserIds } from './userSeeds.js';
import { generatePoints, getPointIds } from './pointSeeds.js';

const pointIds = getPointIds();
const userIds = getUserIds();
const mapIds = getMapIds();

const userSeeds = generateUsers(userIds);
const pointSeeds = generatePoints(pointIds, mapIds);
const mapSeeds = generateMaps(mapIds, userIds, pointIds);

dotenv.config({ path: '../.env.local' });

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
  PointModel.collection.drop(),
  MapModel.collection.drop(),
  UserModel.insertMany(userSeeds),
  PointModel.insertMany(pointSeeds),
  MapModel.insertMany(mapSeeds),
]).then(() => {
  mongoose.connection.close();
  console.log('Successfully seeded DB');
});
