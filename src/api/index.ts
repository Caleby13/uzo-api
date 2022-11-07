import { Router } from 'express';
import authMIddleware from '../app/middlewares/auth';
import authRoutes from './authenticate.routes';
import inputRoutes from './input.routes';
import productRoutes from './product.routes';
import userRoutes from './user.routes';

const routes = Router();

routes.use('/api/user', userRoutes);
routes.use('/api/authenticate', authRoutes);

routes.use(authMIddleware);

routes.use('/api/input', inputRoutes);
routes.use('/api/product', productRoutes);

export default routes;
