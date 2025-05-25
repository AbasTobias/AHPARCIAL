import express from 'express';
import { addUser, getUsers, auth } from '../controllers/userController.js';

const router = express.Router();

router.post('/', addUser);        // Crear usuario
router.get('/', getUsers);        // Listar usuarios
router.post('/login', auth);      // Login (si haces autenticación)

export default router;
