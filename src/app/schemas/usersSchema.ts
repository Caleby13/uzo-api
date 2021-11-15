import Joi from "joi";

export const usersSchema = Joi.object({
  name: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const usersSchemaUpdate = Joi.object({
  name: Joi.string().optional(),
  username: Joi.string().optional(),
  password: Joi.string().optional(),
});
