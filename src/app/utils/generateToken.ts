import jwt from 'jsonwebtoken';

interface IGenerateToken {
  id: string;
  secret: string;
  expiresIn: number;
}

export const generateToken = ({
  id,
  expiresIn,
  secret,
}: IGenerateToken): string => {
  return jwt.sign({ id }, secret, {
    expiresIn,
  });
};
