import MapModel from '../models/maps.js';

export const createMaps = async (req, res) => {
  const map = req.body;
  const newMap = new MapModel(map);
  try {
    await newMap.save();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const readMaps = async (req, res) => {
  try {
    const allMaps = await MapModel.find();
    res.status(200).json(allMaps);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
