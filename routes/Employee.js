const express = require('express');
const router = express.Router();
const passport = require('passport');

//model
const Emp = require('../models/Emp');
const Task = require('../models/Task');
const Faq = require('../models/Faq')
const User = require('../models/User')

//validator
const validateFaq = require('../config/faqValidation')

//socket

const eleigibiltyReports = (monthlyIncome,monthlyExpense,res) =>{
    let annualIncome = monthlyIncome * 12;
    let annualExpense = monthlyExpense * 12;
    let balance  = annualIncome - annualExpense
    return res.status(200).json(balance)
}

const emiGenerator = (interestRate, loanAmt , repaymentPeriod) => {
    rateofIntrest = interestRate/(12 * 100)
    generator  = (loanAmt * rateofIntrest ) / repaymentPeriod
    return generator
}

module.exports = function (io) {
    //Socket.IO
    router.get('/' ,passport.authenticate('jwt',{session:false}) ,(req,res) => {
        Emp.findOne()
         .then(emp => {
             res.status(200).json(emp)
         })
    })
    
    router.get('/task',passport.authenticate('jwt',{session:false}),(req,res) => {
        Task.findOne({Employee:req.user.Name})
            .then(task => {
                if(task) {
                    res.status(200).json(task)
            }else {
                res.status(404).json({msg:"No Task Assigned To You"})
            }
            })
    })
    
    router.get('/queries',passport.authenticate('jwt',{session:false}), (req,res) => {
            Faq.findOne({Branch:req.user.Branch})
                .then(faq => {
                    if(faq) {
                        res.status(200).json(faq)
                    }else {
                        res.status(404).json({msg:'no Customer Queries For Your Branch'})
                    }
                })
    })
    
    router.post('/queries',passport.authenticate('jwt',{session:false}),(req,res) => {
       
        const newQuries = new Faq({
            user:req.body.user,
            Question:req.body.Question,
            Branch:req.user.Branch,
            reply:{
                name:req.body.name
            }
        })
        newQuries.save()
         .then (faq => {
            io.emit('newFaq',() => {
                res.status.json(faq)
            })
         })
    })
    
    
    router.post('/queriesuser',(req,res) => {
        const {errors,isValid} = validateFaq(req.body)
        if(!isValid) {
          res.status(400).json(errors)
        }
        const newQuries = new Faq({
            user:req.body.user,
            Questions:req.body.Questions,
            Branch:req.user.Branch,
            reply:{
                name:req.body.name
            }
        })
        res.status(200).json(newQuries)
    })
    
    router.post("/loanAcception",passport.authenticate('jwt',{session:false}),(req,res) => {
        let errors = []
        let pan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        let aadhar = /^\d{4}\s\d{4}\s\d{4}$/g;
    
        if(req.body.Name.length < 2 || req.body.Name.length > 30  ) {
            errors.push({error:'please enter correcct Name'})
        }
       
        if(req.body.contact.length > 10) {
            errors.push({error:'please enter correct Contact!!!'})
        }
        if(!pan.test(req.body.pan)) {
            errors.push({error:'please eneter correct PAN NUMBER'})
        }
        // if(!aadhar.test(req.body.Aadhar)) {
        //     errors.push({error:"please enter correct AADHAR NUMBER"})
        // }
        if(errors.length > 0) {
            res.status(400).json(errors)
        }
        const newUser = new User({
            Name:req.body.Name,
            contact:req.body.contact,
            alternateNumber:req.body.alternateNumber,
            email:req.body.email,
            pan:req.body.pan,
            Aadhar:req.body.Aadhar,
            city:req.body.city,
            state:req.body.state,
            cibl:req.body.cibl,
            profession:req.body.profession,
            age:req.body.age,
            gender:req.body.gender,
            Branch:req.body.Branch,
            status:false,
            monthlyIncome:req.body.monthlyIncome,
            monthlyExpense:req.body.monthlyExpense,
            loanNature:req.body.loanNature,
            loanType:req.body.loanType,
            TotalBussiness:req.body.TotalBussiness,
            annualTurnover:req.body.annualTurnover,
            natureofBussiness:req.body.natureofBussiness,
            loanAmt:req.body.loanAmt,
            maritialStatus:req.body.maritialStatus,
            residentalStatus:req.body.residentialStatus,
            Designation:req.body.Designation
        })
    
        newUser.save()
         .then(newUser => {
            eleigibiltyReports(newUser.monthlyIncome,newUser.monthlyExpense,res)
         }).catch(err => {
             res.status(400).json(err.message)
         })
    
    })
    return router;
};