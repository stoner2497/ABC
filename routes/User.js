const express = require('express');
const router = express.Router();
const passport = require('passport');


//models
const Faq = require('../models/Faq');

//validation

const validateFaq = require('../config/faqValidation')


router.post('/queries',(req,res) => {
    // const {errors,isValid} = validateFaq(req.body)
    // if(!isValid) {
    //   res.status(400).json(errors)
    // }
    const newQuries = new Faq({
        user:req.body.user,
        Questions:req.body.Questions,
        Branch:req.body.Branch,
        reply:{
            name:req.body.name
        }
    })

})

module.exports = router