import mongoose from 'mongoose';

const mapSchema = mongoose.Schema({
  name: String,
  description: String,
  creator: String,
  image_url: String,
});

const MapModel = mongoose.model('MapModel', mapSchema);

export default MapModel;
