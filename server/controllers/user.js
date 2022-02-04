import UserModel from '../models/users.js';
import bcrypt from 'bcrypt'

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
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({msg: 'Please enter all fields'})
    }

    const existingUser = await UserModel.findOne( { email } )
    if(existingUser) {
      return res.status(400).json({msg: 'This email is already used'})
    }

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    const newUser = new UserModel({
      username,
      email,
      password: passwordHash
    }
    );

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
