const ErrorHandler = require("../utils/errorHandler");
const Joi = require("joi");

const firstName = Joi.string()
  .required()
  .min(2)
  .max(20)
  .label("firstName")
  .messages({
    "string.base": `{#label} must have a type of string`,
    "string.min": `{#label} should have minimum length of {#limit}`,
    "string.max": `{#label} can not be more than {#limit}`,
    "any.required": `{#label} is required`,
  });

  const lastName = Joi.string()
  .required()
  .min(1)
  .max(20)
  .label("lastName")
  .messages({
    "string.base": `{#label} must have a type of string`,
    "string.min": `{#label} should have minimum length of {#limit}`,
    "string.max": `{#label} can not be more than {#limit}`,
    "any.required": `{#label} is required`,
  });

  const email = Joi.string()
  .email()
  .label("email")
  .messages({
    "string.base": `{#label} must be a type of string`,
    "string.email": `{#label} must be an Email`,
  });
  const landMark = Joi.string()
  .required()
  .min(3)
  .max(50)
  .label("landMark")
  .messages({
    "string.base": `{#label} must have a type of string`,
    "string.min": `{#label} should have minimum length of {#limit}`,
    "string.max": `{#label} can not be more than {#limit}`,
    "any.required": `{#label} is required`,
  });
  const city = Joi.string()
  .required()
  .min(3)
  .max(20)
  .label("city")
  .messages({
    "string.base": `{#label} must have a type of string`,
    "string.min": `{#label} should have minimum length of {#limit}`,
    "string.max": `{#label} can not be more than {#limit}`,
    "any.required": `{#label} is required`,
  });
  const state = Joi.string()
  .required()
  .min(3)
  .max(20)
  .label("state")
  .messages({
    "string.base": `{#label} must have a type of string`,
    "string.min": `{#label} should have minimum length of {#limit}`,
    "string.max": `{#label} can not be more than {#limit}`,
    "any.required": `{#label} is required`,
  });
  const country = Joi.string()
  .min(1)
  .max(20)
  .label("country")
  .messages({
    "string.base": `{#label} must have a type of string`,
    "string.min": `{#label} should have minimum length of {#limit}`,
    "string.max": `{#label} can not be more than {#limit}`,
    "any.required": `{#label} is required`,
  });

const options = {
  errors: {
    wrap: {
      label: "",
    },
  },
};

const createObj = Joi.object({
 firstName,
 lastName,
 email,
 landMark,
 city,
 state,
 country,
});

exports.createValidate = async (req, res, next) => {
  try {
    await createObj.validateAsync(req.body, options);
  } catch (e) {
    return next(new ErrorHandler(e.message));
  }
  return next();
};
