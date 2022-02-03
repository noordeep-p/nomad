import mongoose from 'mongoose';

const mapSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  points: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PointModel',
  }],
});

const MapModel = mongoose.model('MapModel', mapSchema);

export default MapModel;
