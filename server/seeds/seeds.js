import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserModel from '../models/users.js';
import MapModel from '../models/maps.js';
import PointModel from '../models/points.js';

dotenv.config({ path: '../.env' });

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

const seedUsers = [{ username: 'john', email: 'example@example.com', password: 'password' }];
const seedMaps = [{
  username: 'john', title: '5 star restaurants I visited in Toronto', description: '5 star restaurants I visited in Toronto', image_url: 'https://tinyurl.com/47mwc4tt',
}];
const seedPoints = [{
  name: 'Ricks Good Eats', description: '5 star indian eatery', image_url: 'https://tinyurl.com/47mwc4tt', address: 'example_address', lat: 43.6488, lon: -79.6870,
}, {
  name: 'Casa Loam', description: 'good for a fancy night out', image_url: 'https://tinyurl.com/47mwc4tt', address: 'example_address', lat: 43.6780, lon: -79.4094,
}];

Promise.all([
  UserModel.collection.drop(),
  PointModel.collection.drop(),
  MapModel.collection.drop(),
  UserModel.insertMany(seedUsers),
  PointModel.insertMany(seedPoints),
  MapModel.insertMany(seedMaps),
]).then(() => {
  mongoose.connection.close();
  console.log('Successfully seeded DB');
});
