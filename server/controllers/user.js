import userModel from "../models/users.js";

export default loginUser = (req, res) => {
  res.send('user login route')
}

export default logoutUser = (req, res) => {
  res.send('user logout route')
}

export default registerUser = (req, res) => {
  res.send('user register route')
}
