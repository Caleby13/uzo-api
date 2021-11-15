import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

const validateSchema =
  (schema: Schema) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        sucess: false,
        message: error.details[0].message,
      });
    }
    return next();
  };

export default validateSchema;
