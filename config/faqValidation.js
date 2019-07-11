const Validator = require('validator');
const isEmpty = require('../Api/is-empty');

module.exports = function validateFaq(data) {
  let errors = {};

  data.user = !isEmpty(data.user) ? data.user : '';
  data.Questions = !isEmpty(data.Questions) ? data.Questions : '';
  data.Branch = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isLength(data.user, { min: 2, max: 30 })) {
    errors.user = 'Name must be between 2 and 30 characters';
  }
  
  if (!Validator.isLength(data.Questions, { min: 2, max: 50 })) {
    errors.Questions = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.user)) {
    errors.user = 'Name field is required';
  }

  if (Validator.isEmpty(data.Questions)) {
    errors.Questions = 'Questions field is required';
  }
  
  if (Validator.isEmpty(data.Branch)) {
    errors.Branch = 'Branch field is required';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
