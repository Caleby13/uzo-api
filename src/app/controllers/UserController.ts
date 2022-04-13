import { Request, Response } from 'express';
import { generateToken } from '../utils/generateToken';
import User from '../models/user';

class UserController {
  async store(req: Request, res: Response): Promise<Response> {
    try {
      const requiredFields = ['name', 'user_name', 'password'];

      for (const field of requiredFields) {
        if (!req.body[field]) {
          return res.status(400).json({ error: `Missing param ${field}` });
        }
      }

      const user = await User.findOne({ user_name: req.body.user_name });

      if (!!user) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const newUser = await User.create(req.body);
      const token = generateToken({
        id: newUser.id,
        secret: process.env.SECRET_JWT,
      });

      return res.json({ newUser, token });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async index(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.find();
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }

      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const previewsUser = await User.findByIdAndUpdate(id, req.body);
      if (!previewsUser) {
        return res.status(400).json({ error: 'User not found' });
      }
      const user = await User.findById(id);
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndRemove(id);
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
      return res.send();
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }
}

export default new UserController();
