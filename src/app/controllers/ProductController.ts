import { Request, Response } from 'express';
import Item from '../models/item';
import Product from '../models/product';

class InputController {
  async store(req: Request, res: Response): Promise<Response> {
    try {
      const {
        name,
        customer_name,
        inputs_cost,
        labor,
        art,
        others,
        total_cost,
        sale_value,
        profit,
        items,
      } = req.body;

      const product = await Product.create({
        name,
        customer_name,
        inputs_cost,
        labor,
        art,
        others,
        total_cost,
        sale_value,
        profit,
        user: req.user_id,
      });

      await Promise.all(
        items.map(async (item: any) => {
          const product_item = new Item({
            ...item,
            user: req.user_id,
            product: product._id,
          });
          await product_item.save();
          product.items.push(product_item);
        }),
      );

      await product.save();

      return res.json({ product });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const product = await Product.find().populate(['user', 'items']);
      return res.json(product);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const product = await Product.findById(id).populate(['user', 'items']);

      if (!product) {
        return res.status(400).json({ error: 'Product not found' });
      }

      return res.json(product);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);

      if (!product) {
        return res.status(400).json({ error: 'Product not found' });
      }

      const {
        name,
        customer_name,
        inputs_cost,
        labor,
        art,
        others,
        total_cost,
        sale_value,
        profit,
        items,
      } = req.body;

      product.name = name;
      product.customer_name = customer_name;
      product.inputs_cost = inputs_cost;
      product.labor = labor;
      product.art = art;
      product.others = others;
      product.total_cost = total_cost;
      product.sale_value = sale_value;
      product.profit = profit;
      product.user = req.user_id;

      await Item.deleteMany({ product: id });

      product.items = [];

      await Promise.all(
        items.map(async (item: any) => {
          const product_item = new Item({
            ...item,
            user: req.user_id,
            product: id,
          });
          await product_item.save();
          product.items.push(product_item);
        }),
      );

      await product.save();

      return res.json(product);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndRemove(id);
      await Item.deleteMany({ product: id });

      if (!product) {
        return res.status(400).json({ error: 'Product not found' });
      }
      return res.send();
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }
}

export default new InputController();
