import { Router } from 'express';
import InputController from '../controllers/InputController';

const inputRoutes = Router();

inputRoutes.post('/', InputController.store);
inputRoutes.get('/', InputController.index);
inputRoutes.get('/:id', InputController.show);
inputRoutes.put('/:id', InputController.update);
inputRoutes.delete('/:id', InputController.delete);

export default inputRoutes;
