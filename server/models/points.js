import mongoose from 'mongoose';

const pointSchema = mongoose.Schema({
  name: String,
  description: String,
  image_url: String,
  address: String,
  latitude: Number,
  longitude: Number,
  map: String,
});

const PointModel = mongoose.model('PointModel', pointSchema);

export default PointModel;
