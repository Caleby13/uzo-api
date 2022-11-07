import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRoutes = Router();

productRoutes.post('/', ProductController.store);
productRoutes.get('/', ProductController.index);
productRoutes.get('/:id', ProductController.show);
productRoutes.put('/:id', ProductController.update);
productRoutes.delete('/:id', ProductController.delete);

export default productRoutes;
