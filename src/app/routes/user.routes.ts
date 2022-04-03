import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.post('/', UserController.store);
userRoutes.get('/', UserController.index);
userRoutes.get('/:id', UserController.show);
userRoutes.put('/:id', UserController.update);
userRoutes.delete('/:id', UserController.delete);

export default userRoutes;
