const isEmpty = require('../Api/is-empty');

module.exports = function validateUser(data) {
  let errors = {};
  let pan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  let aadhar = /^\d{4}\s\d{4}\s\d{4}$/g;

//   data = !isEmpty(data) ? data : '';
  
//   if (!Validator.isLength(data.Name, { min: 2, max: 30 })) {
//     errors.user = 'Name must be between 2 and 30 characters';
//   }
   if(isEmpty(data.Name)) {
       errors.Name
   }  
   if(!pan.test(data.pan)) {
       errors.pan = 'please enter correct pan'
   }
   if(!aadhar.test(data.Aadhar)) {
       errors.aadhar = "please enter correct Aadhar"
   }
   if(data.age >=! 22 && data.age <=! 55) {
    errors.age = "you should be in the age group of 22-55 "
   }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
