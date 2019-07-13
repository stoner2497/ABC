const express = require('express');
const router = express.Router();
const passport = require('passport')


const Admin = require('../models/Admin')
const Loans = require('../models/LoanDetails')
const User = require('../models/User')


module.exports  = function (io)  {
   //function
   
    const loansDue = (req,res) => {
        User.find({Branch:req.user.Branch})
            .then(user => {
               const Filter = user.filter(user => user.status !== true)
               res.status(200).json(Filter)
               
            })
    }

    const acceptedLoan = (req,res) => {
        User.find({Branch:req.user.Branch})
            .then(user => {
               const Filter = user.filter(user => user.status !== false)
               console.log(Filter)
              
            })
    }

    const personalLoanLength = (req,res) => {
        User.find({Branch:req.user.Branch})
        .then(user => {
          const fillter = user.filter(user => user.loanType !== "Bussiness") 
          res.status(200).json(fillter.length)
        })
    }
   //routes goes here
   
    router.get('/', passport.authenticate('jwt',{session:false}), async (req,res) => {
     await Admin.find({id:req.user.id})
        .then( admin  => {
            if (!admin) {
                res.status(404).json({error:'no Admin found'})
            }else {
                
            const userlength = () => {
                 User.find({Branch:req.user.Branch})
                    .then(user => {
                        if(user){
                            console.log(user.length)
                           return user.length  
                        }
                    }).catch(err => console.log(err))
                }  
            const loansDueLength = () => {
                    // userlength(req,res)            
                return User.find({Branch:req.user.Branch}) 
                            .then(user => {
                            const Filter = user.filter(user => user.status !== true)
                            console.log(Filter.length)
                            res.status(200).json(Filter.length)
                        }).catch(err => console.log(err))
                }
                loansDueLength().then(() => {
                    userlength()
                })
            }
            }).catch(err =>console.log(err))
    })

    router.get('/acceptedLoan', passport.authenticate('jwt',{session:false}),async (req,res) => {
        acceptedLoan(req,res)
    })

    router.get('/loansDue', passport.authenticate('jwt',{session:false}),async (req,res) => {
        loansDue(req,res) 
        // personalLoanLength(req,res)      
        })
    
    router.put('/Accept/:id',passport.authenticate('jwt',{session:false}),async(req,res) => {
        User.findByIdAndUpdate(req.params.id, {
            $set:{  
                status:true
            }
        }).then(user => {
                io.emit('loanStatus',res.json(user))
            }).catch(err => console.log(err))
    })

    router.get('/alluser', passport.authenticate('jwt',{session:false}),(req,res) => {
        User.find({})
            .then(user => {
                res.status(200).json(user)
            }).catch(err => console.log(err))
    })

    router.get('/',passport.authenticate('jwt',{session:false}),(req,res) => {
        Admin.find()
            .then(admin => {
                res.status(200).json(admin)
            })
    })
    

    

    return router
}