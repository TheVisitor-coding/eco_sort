const { check } = require("express-validator")
const slugify = require("slugify")
const ValidatorMiddleware = require("../../src/middlewares/ValidatorMiddleware")



exports.CreateBrandValidator = [
  check("name")
    .notEmpty()
    .withMessage("Company name is required")
    .isLength({ min: 3 })
    .withMessage("Too short Company name")
    .isLength({ max: 32 })
    .withMessage("Too long Company name")
    .custom((val, {req}) => {
      req.body.slug = slugify(val);
      return true;
    }),
  ValidatorMiddleware,
];




