/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import MapModel from '../models/maps.js';

export const readAllMaps = async (req, res) => {
  try {
    const allMaps = await MapModel.find();
    console.log(allMaps);
    res.status(200).json(allMaps);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const readSingleMap = async (req, res) => {
  const { id } = req.params;
  try {
    const map = await MapModel.find({ _id: id });
    console.log(map);
    res.status(200).json(map);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

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
