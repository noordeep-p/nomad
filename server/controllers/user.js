import UserModel from '../models/users.js';

const { mongoose } = 'mongoose';

export const readUser = async (req, res) => {
  const { username } = req.params;
  try {
    const userFound = await UserModel.findOne({ username });
    res.sendStatus(200).json(userFound);
  } catch (error) {
    res.sendStatus(404).json({ message: error });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  try {
    await newUser.save();
    res.sendStatus(201).json(newUser);
  } catch (error) {
    res.sendStatus(500).json({ message: error });
  }
};
