import { Router } from 'express';
import authMIddleware from '../middlewares/auth';
import authRoutes from './authenticate.routes';
import inputRoutes from './input.routes';
import productRoutes from './product.routes';
import userRoutes from './user.routes';

const routes = Router();

routes.use('/user', userRoutes);
routes.use('/authenticate', authRoutes);

routes.use(authMIddleware);

routes.use('/input', inputRoutes);
routes.use('/product', productRoutes);

export default routes;
