import express from 'express';
import { addUser, getUsers,} from '../controllers/userController.js';

const router = express.Router();

router.post('/', addUser);        // Crear usuario
router.get('/', getUsers);        // Listar usuarios
//  router.post('/login', auth);      // Login 

export default router;
