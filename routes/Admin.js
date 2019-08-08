const express = require('express');
const router = express.Router();
const passport = require('passport')
const multer = require('../Api/multer')
const keys = require('../config/Keys')
const fs = require('fs')
const FileReader = require('filereader')
const Admin = require('../models/Admin')
const Loans = require('../models/LoanDetails')
const uuid = require('uuid')
const User = require('../models/User')
var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: keys.aws_access_key_id,
    secretAccessKey:keys.aws_secret_access_key,
    region:'ap-northeast-1'
})
const Rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'})
const S3 = new AWS.S3()
const createBucket = (bucketNames,keyNames) => {
    const bucketName = bucketNames + uuid.v4();
// Create name for uploaded object key
const keyName = 'image.jpg';

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: bucketName}).promise();

// Handle promise fulfilled/rejected states
bucketPromise.then(
  function(data) {
    // Create params for putObject call
    const byte = JSON.stringify(keyNames)
    var objectParams = {Bucket: bucketName, Key: keyName, Body:byte};
    // Create object upload promise
    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
    uploadPromise.then(
      function(data) {
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      });
}).catch(
  function(err) {
    console.error(err, err.stack);
});
}

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
    
    router.post('/image',multer.single('image'),async (req,res) => {
        // function getBinary(encodedFile) {
        //     var base64Image = encodedFile.split("data:image/jpeg;base64,")[1];
        //     var binaryImg = atob(base64Image);
        //     var length = binaryImg.length;
        //     var ab = new ArrayBuffer(length);
        //     var ua = new Uint8Array(ab);
        //     for (var i = 0; i < length; i++) {
        //       ua[i] = binaryImg.charCodeAt(i);
        //     }
    
        //     var blob = new Blob([ab], {
        //       type: "image/jpeg"
        //     });
    
        //     return ab;
        //   }
        //   let reader = new FileReader();
        //   console.log(req.file)
        //   let file = req.file.path
        // reader.readAsDataURL(file);
        // let bucketName = 'rekognization';
            console.log(req.file.key)

            let params = {
                Image: { /* required */
                    S3Object:{
                        Bucket:req.file.bucket,
                        Name:req.file.key
                    }
                }
              };
              Rekognition.detectText(params, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else   {
                    // Object.values(data).map(value => {
                    //     console.log(value.Type)
                    // })
                    console.log(data)
                }           // successful response
              });
        

        // createBucket(bucketName,keyName)
    })

    

    return router
}
debugger;
