import express from 'express';
import { addUser, getUsers,getUserById, updateUser, deleteUser, auth} from '../controllers/userController.js';
import { validacionToken } from '../middlewares/auth.js';
const router = express.Router();

router.post('/', addUser);        // Crear usuario
router.get('/', getUsers); 
router.get('/:id',getUserById ,validacionToken);     // Listar usuarios
router.put('/:id',updateUser, validacionToken); // Actualiza el usuario por id
router.delete('/:id', deleteUser , validacionToken); // Elimina el usuario  por id

export default router;
