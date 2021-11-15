import { Response } from "express";

export const badRequest = (res: Response, param: string) => {
  return res.status(400).json({
    message: `Missing param ${param}`,
  });
};

export const serverError = (res: Response) => {
  return res.status(500).json({
    message: `Internal server error`,
  });
};
