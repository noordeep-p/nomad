import mongoose from "mongoose";

const mapSchema = mongoose.Schema({
  name: String
});

const mapModel = mongoose.model("mapModel", mapSchema);

export default mapModel;
