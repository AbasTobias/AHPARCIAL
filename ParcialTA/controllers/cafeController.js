import Cafe from "../models/Cafe.js"; 
import { cafeSchema } from "../Validations/cafeValidation.js";
//import jsonwebtoken from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();
 //const secret_key =  process.env.SECRET_KEY;
const salt=  9;


//data falta crear token


// const jwt = jsonwebtoken.sign(secret_key, { expiresIn: '1h'});

// Obtener todos los cafes
export const getCafes = async (req, res) => {
  try {
    const cafes = await Cafe.find();
    res.json(cafes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener cafe por ID
export const getCafeById = async (req, res) => {
  try {
    const cafe = await Cafe.findById(req.params.id);
    if (!cafe) return res.status(404).json({ error: "No encontrado" });
    res.json(cafe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un cafe nuevo
export const addCafe = async (req, res) => {
  try {
    const { error, value } = cafeSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      const errores = error.details.map(e => e.message);
      return res.status(400).json({ errores });
    }

    const newCafe = new Cafe(value);
    await newCafe.save();
    res.status(201).json(newCafe);

  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'El nombre del café ya existe' });
    }
    res.status(400).json({ error: error.message });
  }
};


// Actualizar cafe por ID
export const updateCafe = async (req, res) => {
  try {
    const updated = await Cafe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "No encontrado" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar cafe por ID
export const deleteCafe = async (req, res) => {
  try {
    const deleted = await Cafe.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "No encontrado" });
    res.json({ message: "Cafe eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCafeByOrigin = async (req, res) => {
  const { origen } = req.params;

  try {
    const cafes = await Cafe.find({ origin: origen });
    if (cafes.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron cafés de ese país' });
    }

    res.json(cafes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Tener cafe por categoria
export const getCafeByCategory = async (req,res ) => {
  const  { categoria } = req.params;

  try {
    const cafes = await Cafe.find({category: categoria});
    if (cafes.length === 0) {
      return res.status(404).json({mensaje: 'No se encontraron cafes de esa categoria'});
    }
    res.json(cafes);
  
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

// Obtiene cafe por  peso
export const getCafeByWeight =  async (req,res) => {
  const { peso } = req.params;

  try {
    const cafes = await Cafe.find({weight: peso});
    if (cafes.length === 0) {
      return res.status(404).json({mensaje: 'No se encotraron cafes de este peso '})
    }
    res.json(cafes);
  
  }catch (error) {
    res.status(500).json({error: error.nessage});
  }
  
};