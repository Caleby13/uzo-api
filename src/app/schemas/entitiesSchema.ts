import Joi from "joi";

export const entitiesSchema = Joi.object({
  name: Joi.string().required(),
  provider: Joi.boolean().required(),
  client: Joi.boolean().required(),
});

export const entitiesSchemaUpdate = Joi.object({
  name: Joi.string().optional(),
  provider: Joi.boolean().optional(),
  client: Joi.boolean().optional(),
});
