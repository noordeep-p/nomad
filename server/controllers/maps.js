/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
// import mongoose from 'mongoose';
import MapModel from '../models/maps.js';
import PointModel from '../models/points.js';

const { mongoose } = 'mongoose';

export const createMaps = async (req, res) => {
  const map = req.body;
  const newMap = new MapModel(map);
  try {
    await newMap.save();
    res.status(201).json(newMap);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const readMaps = async (req, res) => {
  try {
    const allMaps = await MapModel.find();
    console.log(allMaps);
    res.status(200).json(allMaps);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateMaps = async (req, res) => {
  const { id: _id } = req.params;
  const map = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ message: 'No map with that ID' });
  const updatedMap = await MapModel.findByIdAndUpdate(_id, map, { new: true });
  return res.status(201).json(updatedMap);
};

export const deleteMaps = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({ message: 'No map with that ID' });
  await MapModel.findByIdAndDelete(_id);
  return res.status(200).json({ message: 'Map deleted successfully' });
};

export const readMapAllPoint = async (req, res) => {
  try {
    const { id } = req.params;
    const allPoint = await PointModel.find({ map: id });
    res.status(200).json(allPoint);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMapPoint = async (req, res) => {
  const point = req.body;
  const newPoint = new PointModel(point);

  try {
    await newPoint.save();
    await MapModel.findOneAndUpdate(newPoint.map, { $push: { points: newPoint._id } }, { new: true });
    res.status(201).json(newPoint);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const readMapSinglePoint = async (req, res) => {
  try {
    const { pointId } = req.params;
    const point = await PointModel.find({ _id: pointId });
    res.status(200).json(point);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
