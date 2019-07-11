const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();
const validator = require('validator')

//models
const SuperAdmin = require('../models/superAdmin')
const Admin = require('../models/Admin')
const Emp = require('../models/Emp')




// keys
const Keys = require("../config/keys");

//validation api
const validateRegisterInput = require('../Api/registerValidation')



router.post("/", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  SuperAdmin.findOne({ email: email }).then(superAdmin => {
    if (!superAdmin) {
        Admin.findOne({email})
            .then(admin => {
                if(!admin){
                    Emp.findOne({email})
                     .then(emp => {
                         if(!emp ) {
                             res.status(404).json({error:'no user Found!!!'})
                         }else {
                            bcrypt.compare(password, emp.password).then(isMatch => {
                                if (isMatch) {
                                  const payload = {
                                    id: emp.id,
                                    name: emp.name,
                                    branch:emp.Branch,
                                    email:emp.email
                                  };
                                  jwt.sign(
                                    payload,
                                    Keys.secretOrKey,
                                    { expiresIn: 3600 },
                                    (err, token) => {
                                      res.json({
                                        success: true,
                                        token: "Bearer " + token
                                      });
                                    }
                                  );
                                } else {
                                  res.status(400).json({ msg: "password not matched" });
                                }
                              });
                         }
                     })
                }else {
                    bcrypt.compare(password, admin.password).then(isMatch => {
                        if (isMatch) {
                          const payload = {
                            id: admin.id,
                            Name: admin.Name,
                            Branch:admin.Branch,
                            email:admin.email
                          };
                          jwt.sign(
                            payload,
                            Keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                              res.json({
                                success: true,
                                token: "Bearer " + token
                              });
                            }
                          );
                        } else {
                          res.status(400).json({ msg: "password not matched" });
                        }
                      });
                }
            })
    } else {
      bcrypt.compare(password, superAdmin.password).then(isMatch => {
        if (isMatch) {
          const payload = {
            id: superAdmin.id,
            Name: superAdmin.Name,
            email:superAdmin.email
          };
          jwt.sign(
            payload,
            Keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          res.status(400).json({ msg: "password not matched" });
        }
      });
    }
  });
});

router.post('/register/superAdmin',(req,res) => {

    const {errors,isValid} = validateRegisterInput(req.body)
      if(!isValid) {
        res.status(400).json(errors)
      }
        const newsuperadmin = new SuperAdmin({
            Name:req.body.Name,
            email:req.body.email,
            password:req.body.password
        })
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newsuperadmin.password, salt, (err, hash) => {
              if (err) throw err;
              newsuperadmin.password = hash;
              newsuperadmin
                .save()
                .then(superadmin => {
                  res.status(200).json(superadmin);
                })
                .catch(err => console.log(err));
            });
          });
       
    
})


router.post('/register/Admin',(req,res) => {
  
  SuperAdmin.findOne({email:req.body.email})
         .then(async superadmin => {
             if(!superadmin) {
                await Admin.findOne({email:req.body.email})
                        .then(admin => {
                            if(admin) {
                                res.status(404).json({error:'user exist'})
                            }else {                            
                                    // const {errors,isValid} = validateRegisterInput(req.body)
                                    // if(!isValid) {
                                    //   res.status(400).json(errors)
                                    // }
                                    Admin.findOne({Branch:req.body.Branch})
                                      .then(branch  => {
                                        if(branch)
                                         {
                                           res.status(400).json({error:'Branch has Already Been Reserved'})
                                         }else {
                                          const newadmin = new Admin({
                                            Branch:req.body.Branch,
                                                Name:req.body.Name,
                                            email:req.body.email,
                                            password:req.body.password
                                        })
                                        bcrypt.genSalt(10, (err, salt) => {
                                            bcrypt.hash(newadmin.password, salt, (err, hash) => {
                                                if (err) throw err;
                                                newadmin.password = hash;
                                                newadmin
                                                .save()
                                                .then(admin => {
                                                    res.status(200).json(admin);
                                                })
                                                .catch(err => console.log(err));
                                            });
                                            });
                                         }
                                      })
                            }
                        }).catch(err => console.log(err))   
             }else {
                res.status(404).json({error:'email is reserved'})
             }
         })

})

router.post('/register/Employee',passport.authenticate('jwt',{session:false}) ,(req,res) => {
    let errors = []
    SuperAdmin.findOne({email:req.body.email})
     .then(async superadmin => {
         if(!superadmin) {
            await Admin.findOne({email:req.body.email})
                        .then(admin => {
                            if(!admin) {
                                Emp.findOne({email:req.body.email})
                                    .then(emp => {
                                        if(emp) {
                                            res.status(400).json({error:'employee exist'})
                                        }else {                                        
                                                // const fields  = {
                                                //   Name:req.body.Name,
                                                //   email:req.body.email,
                                                //   password:req.body.password
                                                // }
                                                // const {errors,isValid} = validateRegisterInput(fields)
                                                // if(!isValid) {
                                                //   res.status(400).json(errors)
                                                // }
                                                const newemp = new Emp({
                                                    Admin:req.user.id,
                                                    Branch:req.body.Branch,
                                                    Name:req.body.Name,
                                                    email:req.body.email,
                                                    password:req.body.password
                                                })
                                                console.log(newemp)
                                                bcrypt.genSalt(10, (err, salt) => {
                                                    bcrypt.hash(newemp.password, salt, (err, hash) => {
                                                        if (err) throw err;
                                                        newemp.password = hash;
                                                        newemp
                                                        .save()
                                                        .then(emp => {
                                                            res.status(200).json(emp);
                                                        })
                                                        .catch(err => console.log(err));
                                                    });
                                                    });
                                           
                                        }
                                    }).catch(err => console.log(err))
                            }else {
                                res.status(400).json({error:"email is reserved by higher authorities"})
                            }
                        })
         }else {
             res.status(400).json({error:"email is reserved by higher authorities"})
         }
     })
})


router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      Name: req.user.Name,
      email:req.user.email,
      Branch:req.user.Branch
    });
  }
);

module.exports = router;
