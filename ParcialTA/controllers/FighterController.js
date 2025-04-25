import Fighter from "../models/Fighter.js";

// Obtener todos los luchadores
export const getFighters = async (req, res) => {
  try {
    const fighters = await Fighter.find();
    res.json(fighters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
export const getFighterById = async (req, res) => {
  try {
    const fighter = await Fighter.findById(req.params.id);
    if (!fighter) return res.status(404).json({ error: "No encontrado" });
    res.json(fighter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un Luchador Nuevo
export const addFighter = async (req, res) => {
  try {
    const newFighter = new Fighter(req.body);
    await newFighter.save();
    res.status(201).json(newFighter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar por ID
export const updateFighter = async (req, res) => {
  try {
    const updated = await Fighter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "No encontrado" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar por ID
export const deleteFighter = async (req, res) => {
  try {
    const deleted = await Fighter.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "No encontrado" });
    res.json({ message: "Luchador eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


