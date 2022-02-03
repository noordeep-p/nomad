import UserModel from '../models/users.js';

const { mongoose } = 'mongoose';

export const readUser = async (req, res) => {
  const { username } = req.params;
  try {
    const userFound = await UserModel.findOne({ username });
    res.status(200).json(userFound);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
