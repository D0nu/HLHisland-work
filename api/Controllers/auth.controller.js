import User from "../Models/User.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  
  const { username, email, password, roles } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword, roles });
  try {
    await newUser.save()
    res.status(201).json("User created successfully!");
  } catch (error) {
    res.status(500).json(error.message);
  }
};