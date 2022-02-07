import mongoose from 'mongoose';

const pointSchema = mongoose.Schema(
  {
    name: {
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
    address: {
      type: String,
      required: true,
    },
    lon: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    map: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MapModel',
    },
  },
);

const PointModel = mongoose.model('PointModel', pointSchema);

export default PointModel;
