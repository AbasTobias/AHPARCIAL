import express from "express";
import { getFighters, getFighterById, addFighter, updateFighter, deleteFighter } from "../controllers/fighterController.js";

const router = express.Router();

import{validacionToken} from "../Middleware/auth.js" 

// Agrego las funciones del postman
router.get('/', getFighters);  // 
router.get('/:id', getFighterById);  // 
router.post('/', addFighter);  // 
router.delete('/:id', validacionToken, deleteFighter);  // 
router.put('/:id',validacionToken, updateFighter);  // 

export default router;
