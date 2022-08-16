import Joi from "joi";

export const validateRegistration = (req, res, next) => {
  try {
    const schema = Joi.object({
      firstName: Joi.string().alphanum().min(3).max(30).required(),
      lastName: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().min(3).max(60).required(),
      emailCode: Joi.string().min(3).max(60),
    });
    const { value, error } = schema.validate(req.body);
    if (error) {
      return next(error);
    }
    next();
  } catch (error) {
    error && console.log(error);
  }
};

export const validEmailVerify = (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      emailCode: Joi.string().min(3).max(60),
    });
    const { value, error } = schema.validate(req.body);
    if (error) {
      return next(error);
    }
    next();
  } catch (error) {
    error && console.log(error);
  }
};
