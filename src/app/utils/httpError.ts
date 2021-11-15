import { Response } from "express";

export const badRequest = (res: Response, param: string) => {
  return res.status(400).json({
    sucess: false,
    message: `Missing param ${param}`,
  });
};

export const serverError = (res: Response) => {
  return res.status(500).json({
    sucess: false,
    message: `Internal server error`,
  });
};
