/* eslint-disable consistent-return */
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import UserModel from '../models/users.js';
import MapModel from '../models/maps.js';

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

export const createUser = async (req, res) => {
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

export const readUserAllMap = async (req, res) => {
  try {
    const { id } = req.params;
    const userMaps = await MapModel.find({ owner: id });
    res.status(201).json(userMaps);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const readUserSingleMap = async (req, res) => {
  try {
    const { mapId } = req.params;
    const map = await MapModel.find({ _id: mapId });
    res.status(201).json(map);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const createUserMap = async (req, res) => {
  const map = req.body;
  const newMap = new MapModel(map);
  try {
    await newMap.save();
    res.status(201).json(newMap);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
