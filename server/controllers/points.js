import PointModel from '../models/points.js';

const { mongoose } = 'mongoose';

export const createPoints = async (req, res) => {
  const point = req.body;
  const newPoint = new PointModel(point);
  try {
    await newPoint.save();
    res.sendStatus(201).json(newPoint);
  } catch (error) {
    res.sendStatus(404).json({ message: error.message });
  }
};

export const readPoints = async (req, res) => {
  try {
    const allPoints = await PointModel.find();
    res.sendStatus(200).json(allPoints);
  } catch (error) {
    res.sendStatus(404).json({ message: error.message });
  }
};

export const updatePoints = async (req, res) => {
  const { id: _id } = req.params;
  const point = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.sendStatus(404).json({ message: 'No point with that ID' });
  const updatedPoint = await PointModel.findByIdAndUpdate(_id, point, { new: true });
  return res.sendStatus(201).json(updatedPoint);
};

export const deletePoints = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.sendStatus(404).json({ message: 'No point with that ID' });
  await PointModel.findByIdAndDelete(_id);
  return res.sendStatus(200).json({ message: 'Point deleted successfully' });
};
