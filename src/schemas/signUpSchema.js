import joi from 'joi';

export const signUpSchema = joi.object({
  name: joi.string().min(2).lowercase().trim().required(),
  email: joi.string().email().trim().required(),
  password: joi.string().trim().required(),
});