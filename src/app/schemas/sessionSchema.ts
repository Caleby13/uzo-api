import Joi from "joi";

export const sessionSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
