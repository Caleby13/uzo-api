import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/generateToken';
import User from '../models/user';

class AuthController {
  async store(req: Request, res: Response): Promise<Response> {
    const { user_name, password } = req.body;
    const requiredFields = ['user_name', 'password'];

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `Missing param ${field}` });
      }
    }
    const user = await User.findOne({ user_name }).select('+password');
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    user.password = undefined;

    const token = generateToken({
      expiresIn: 86400,
      id: user.id,
      secret: process.env.SECRET_JWT,
    });

    return res.json({ user, token });
  }
}

export default new AuthController();
