import express from "express";
import { getCafes, getCafeById, addCafe, updateCafe, deleteCafe,getCafeByOrigin /*auth*/ } from "../controllers/cafeController.js";

 //import { validacionToken } from "../middleware/auth.js";
const router = express.Router();

// Rutas para los cafés
router.get('/', getCafes);  // Obtener todos los cafés
router.get('/:id', getCafeById);  // Obtener café por ID
router.post('/', addCafe);  // Crear un nuevo café
router.put('/:id', updateCafe);  // Actualizar café por ID
router.delete('/:id', deleteCafe);  // Eliminar café por ID
router.get('/pais/:origen', getCafeByOrigin);// Busca cafe por pais Case Sens


export default router;
