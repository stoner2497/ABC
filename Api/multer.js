const multerS3 = require("multer-s3");
const multer = require("multer");
const path = require('path')
var AWS = require('aws-sdk');
const s3 = new AWS.S3()


AWS.config.update({
  accessKeyId: 'AKIAXSNX55CJLZ2SOMXA',
  secretAccessKey:'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',
  region:'ap-northeast-1'
})


module.exports = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'rekognizationd5c7c244-75a8-4f68-8878-7b0c77d7cd07',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, file.fieldname.toString())
    }
  })
});


// storage: multer.diskStorage({
//   destination: "./public/uploads/",
// filename: function(req, file, cb){
//    cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
// }
// }),
// fileFilter: (req, file, cb) => {
//   if (!file.mimetype.match(/jpe|jpeg|png|gif/)) {
//     cb(console.log("file not suported"), false);
//     return;
//   }
//   cb(null, true);
// },
// limits: { fileSize: 5242880 }