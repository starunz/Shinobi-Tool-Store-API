import { signInSchema } from '../schemas/signInSchema.js'

export function validateSignIn(req, res, next) {

  const validation = signInSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map(detail => detail.message);

    return res.status(422).send(errors);
  }
  next();
}