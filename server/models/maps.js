import mongoose from 'mongoose';
import pointSchema from './points.js';

const mapSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  points: [pointSchema],
  favorites: {
    type: Array,
    default: [],
  },
});

const MapModel = mongoose.model('MapModel', mapSchema);

export default MapModel;
