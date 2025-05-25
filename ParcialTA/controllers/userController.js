import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { userSchema } from '../validations/userValidation.js';

const saltRounds = 10;

export const addUser = async (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({ errors: error.details.map(e => e.message) });
    }

    const existingUser = await User.findOne({ email: value.email });
    if (existingUser) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(value.password, saltRounds);
    value.password = hashedPassword;

    const newUser = new User(value);
    await newUser.save();

    res.status(201).json({ msg: 'Usuario creado', user: { id: newUser._id, name: newUser.name, email: newUser.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); 
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
