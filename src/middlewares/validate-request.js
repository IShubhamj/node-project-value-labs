const {query, validationResult} = require("express-validator");

const validateQueryParams = [
    query('num1')
      .exists().withMessage('num1 is required')
      .isNumeric().withMessage('num1 must be a number')
      .toFloat(),
  

    query('num2')
      .exists().withMessage('num2 is required')
      .isNumeric().withMessage('num2 must be a number')
      .toFloat(), 

    (req, res, next) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        // Filter only the msg property from each error object
        const errorMessages = errors.array().map(error => error.msg);
        return res.status(400).json({ errors: errorMessages });
      }
      next();
    }
  ];

  module.exports = {
    validateQueryParams
  }