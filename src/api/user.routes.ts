import { Router } from 'express';
import UserController from '../controllers/UserController';
import authMIddleware from '../middlewares/auth';

const userRoutes = Router();

userRoutes.get('/', UserController.index);

userRoutes.use(authMIddleware);
userRoutes.post('/', UserController.store);
userRoutes.get('/:id', UserController.show);
userRoutes.put('/:id', UserController.update);
userRoutes.delete('/:id', UserController.delete);

export default userRoutes;
