import User from '../models/Usermodel.js';
import { userSchema } from '../Validations/userValidation.js';

const saltRounds = 10;


export const getUsers = async (req,res) => {
  try{
    const users = await User.find();
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};

export const  addUser= async (req,res) => {
  try {
    const {error,value} = userSchema.validate(req.body,{
      abortEarly: false,
      stripUnknown: true
    });
    if (error) {
      const errores = error.details.map(e => e.message);
      return res.status(400).json({ errores });
    }

    const newUser = new User(value);
    await newUser.save();
    res.status(201).json(newUser);
    
  } catch (error) {
  if(error.code === 11000) {
    return res.status(400).json({ error: 'El nombre del Usuario ya existe'});

  } 
  res.status(400).json({ error: error.message});   
  }
};