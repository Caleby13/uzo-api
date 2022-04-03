import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const authMIddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void | Response => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const parts = authHeader.split(' ');

  if (!(parts.length === 2)) {
    return res.status(401).json({ error: 'Token error' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ error: 'Token malformatted' });
  }

  jwt.verify(
    token,
    process.env.SECRET_JWT,
    (
      err: jwt.VerifyErrors,
      decoded: {
        id: string;
        iat: number;
        exp: number;
      },
    ): void | Response => {
      if (err) {
        return res.status(401).json({ error: 'Token invalid' });
      }

      req.user_id = decoded.id;
    },
  );

  return next();
};

export default authMIddleware;
