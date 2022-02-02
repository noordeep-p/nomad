import mongoose from "mongoose";

const pointSchema = mongoose.Schema({
  name: String
});

const pointModel = mongoose.model("pointModel", pointSchema);

export default pointModel;
