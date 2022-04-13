import jwt from 'jsonwebtoken';

interface IGenerateToken {
  id: string;
  secret: string;
}

export const generateToken = ({
  id,

  secret,
}: IGenerateToken): string => {
  return jwt.sign({ id }, secret);
};
