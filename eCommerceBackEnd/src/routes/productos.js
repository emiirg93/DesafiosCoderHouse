import { Router } from 'express';
import { getAll } from '../controllers/productos.js';

const router = Router();

router.get('/', getAll);

export default router;