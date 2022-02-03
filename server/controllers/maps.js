import MapModel from '../models/maps.js';

const { mongoose } = 'mongoose';

export const createMaps = async (req, res) => {
  const map = req.body;
  const newMap = new MapModel(map);
  try {
    await newMap.save();
    res.sendStatus(201).json(newMap);
  } catch (error) {
    res.sendStatus(404).json({ message: error.message });
  }
};

export const readMaps = async (req, res) => {
  try {
    const allMaps = await MapModel.find();
    res.sendStatus(200).json(allMaps);
  } catch (error) {
    res.sendStatus(404).json({ message: error.message });
  }
};

export const updateMaps = async (req, res) => {
  const { id: _id } = req.params;
  const map = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.sendStatus(404).json({ message: 'No map with that ID' });
  const updatedMap = await MapModel.findByIdAndUpdate(_id, map, { new: true });
  return res.sendStatus(201).json(updatedMap);
};

export const deleteMaps = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.sendStatus(404).json({ message: 'No map with that ID' });
  await MapModel.findByIdAndDelete(_id);
  return res.sendStatus(200).json({ message: 'Map deleted successfully' });
};
