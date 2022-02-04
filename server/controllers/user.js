import UserModel from '../models/users.js';
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'


const { mongoose } = 'mongoose';
dotenv.config()

export const readUser = async (req, res) => {
  const { username } = req.params;
  try {
    const userFound = await UserModel.findOne({ username });
    res.status(200).json(userFound);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' })
    }

    const user = await UserModel.findOne( {username} )
    if(!user) {
      return res.status(400).json({ msg: 'Account has not been registered'})
    }

    const userFound = await bcrypt.compare(password, user.password)

    if (!userFound) {
      return res.status(400).json({ msg: 'Invalid password'})
    }

    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken:accessToken })

  } catch (error) {
    res.status(404).json({ message: error })
  }
}


export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({msg: 'Please enter all fields'})
    }

    const existingUser = await UserModel.findOne( { email } )
    if(existingUser) {
      return res.status(400).json({msg: 'This email already existed, please Login'})
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

