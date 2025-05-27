import User from '../models/Usermodel.js';
import { userSchema } from '../Validations/userValidation.js';
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
const saltRounds = 10;

dotenv.config();

const auth = async(request, response) =>{
    const { email, password } = request.body;
    const user = await User.findOne({email: email});

    if( !user){
        response.status(404).json({msg: "El usuario es invalido"});
    }
    
    const passOk = await bcrypt.compare(password, user.password);

    if( !passOk){
        
        response.status(404).json({msg: "Contraseña invalida"});
    }
    
    const data = {
        id: user._id,
        email: user.email
    }
    const jwt = jsonwebtoken.sign( data, secret_key, { expiresIn: '1h'} );

    response.json({msg: "Credenciales correctas", token: jwt})

}


export const getUsers = async (req,res) => {
  try{
    const users = await User.find();
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message});
  }
};
export const addUser = async (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      const errores = error.details.map(e => e.message);
      return res.status(400).json({ errores });
    }

    const existe = await User.findOne({ email: value.email });
    if (existe) {
      return res.status(400).json({ error: 'El email del usuario ya existe' });
    }

    const passwordHash = await bcrypt.hash(value.password, saltRounds);

    const newUser = new User({
      ...value,
      password: passwordHash
    });

    await newUser.save();

    const { password, ...userWithoutPassword } = newUser.toObject();

    res.status(201).json({
      msg: "Usuario creado correctamente",
      data: userWithoutPassword
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
  



export const getUserById = async (req , res) => {
  try {
    const  user = await User.findByid(req.params.id);
    if(!user) return res.status(404).json({ error: 'Usuario no encontrado por id'});
    res.json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message});
  }
};

export const updateUser = async (req,res) => {
  try{
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true});
    if(!updated) return res.status(404).json({ error: 'No se pudo actualizar el usuario'});
    res.json(updated);
  }catch (error) {
    return res.status(500).json({error: error.message});
  }
};

export const deleteUser = async (req,res) => {
  try{
    const deleted = await User.findByIdAndDelete(req.params.id);
    if(!deleted) return res.status(404).json({error: 'no se puedo eliminar el usuario por id'});
    res.json(deleted);
  } catch (error){
     return res.status(500).json({error: error.message});
  }

}