import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import UserModel from '../models/users.js';

dotenv.config({ path: '../.env.local' });

export const readUser = async (req, res) => {
  const { username } = req.params;
  console.log(req.params);
  try {
    const userFound = await UserModel.findOne({ username });
    return res.status(200).json(userFound);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Account has not been registered' });
    }
    const userFound = await bcrypt.compare(password, user.password);
    if (!userFound) {
      return res.status(400).json({ msg: 'Invalid password' });
    }
    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);
    return res.json({ accessToken });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'This email already existed, please login' });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new UserModel({
      username,
      email,
      password: passwordHash,
    });
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
