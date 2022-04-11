import { Request, Response } from 'express';
import Input from '../models/inputs';

class InputController {
  async store(req: Request, res: Response): Promise<Response> {
    try {
      const input = await Input.findOne({
        name: req.body.name,
      });

      if (!!input) {
        return res.status(400).json({ error: 'Input already exists' });
      }
      const newInput = await Input.create({ ...req.body, user: req.user_id });

      return res.json({ newInput });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const input = await Input.find().populate('user');
      return res.json(input);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const input = await Input.findById(id).populate('user');

      if (!input) {
        return res.status(400).json({ error: 'Input not found' });
      }

      return res.json(input);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const previewsInput = await Input.findByIdAndUpdate(id, {
        ...req.body,
        user: req.user_id,
      });
      if (!previewsInput) {
        return res.status(400).json({ error: 'Input not found' });
      }
      const input = await Input.findById(id);
      return res.json(input);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const input = await Input.findByIdAndRemove(id);
      if (!input) {
        return res.status(400).json({ error: 'Input not found' });
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
