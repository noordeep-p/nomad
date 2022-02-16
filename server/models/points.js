import mongoose from 'mongoose';

const pointSchema = mongoose.Schema(
  {
    photo: {
      type: String,
    },
    name: {
      type: String,
    },
    num_reviews: {
      type: String,
    },
    address: {
      type: String,
    },
    website: {
      type: String,
    },
    ranking: {
      type: String,
    },
    rating: {
      type: String,
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
  },
);

export default pointSchema;
