import express from "express";
import { getFighters, getFighterById, addFighter, updateFighter, deleteFighter } from "../controllers/fighterController.js";

const router = express.Router();

// Agrego las funciones del postman
router.get('/', getFighters);  // 
router.get('/:id', getFighterById);  // 
router.post('/', addFighter);  // 
router.delete('/:id', deleteFighter);  // 
router.put('/:id', updateFighter);  // 

export default router;
