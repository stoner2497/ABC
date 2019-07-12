const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
      
    Name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    alternateNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pan:{
        type:String,
        required:true
    },
    Aadhar:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    cibl:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    Branch:{
        type:String,
    },
    monthlyIncome:{
        type:Number,
        
    },
    loanNature:{
        type:String
    },
    loanType:{
        type:String
    },
    monthlyExpense:{
        type:Number,
        
    },
    TotalBussiness:{
        type:Number,
    },
    annualTurnover:{
        type:Number,
    },
    bussinessSector:{
        type:String,
    },

    loanAmt:{
        type:Number,
    },
    status:{
        type:Boolean,
        required:true
    },
    maritialStatus:{
        type:String,

    },
    residentialStatus:{
        type:String,

    },
    Designation:{
        type:String,

    },
    timeStamp:{
        type:Date,
        default:Date.now()
    }
})

module.exports = User = mongoose.model('users',UserSchema)