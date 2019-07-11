const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FAQSchema = new Schema({
    user:{
        type:String,
        required:true
    },
    Question:{
        type:String,
        required:true
   },
   Branch:{
    type:String
   },
   reply:{
       name:{
           type:String,
       },
       timeStamp:{
           type:Date,
           default:Date.now()
       }
   }
})

module.exports = FAQ = mongoose.model('faq',FAQSchema);