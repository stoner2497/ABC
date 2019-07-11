const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LoanSchema = new Schema({
    
    Name:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    DOB:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    contact:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    alternateNumber:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    email:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    pan:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    Aadhar:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    city:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    state:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    cibl:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    profession:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    age:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    city:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    monthlyIncome:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    loanNature:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    loanType:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    monthlyExpense:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    TotalBussiness:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    annualTurnover:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    natureOfBussiness:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    loanAmt:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    maritialStatus:{
        type:Schema.Types.ObjectId,
        ref:'users'

    },
    residentialStatus:{
        type:Schema.Types.ObjectId,
        ref:'users'

    },
    Designation:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    gender:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    Branch:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    status:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    intrestRate:{
        type:Number,

    },
    emiAmt:{
        type:String,

    },
    loansanction:{
        type:Number,
    },
    StartDate:{
        type:Date,
        
    },
    endDate:{
        type:Date
    },
    teneor:{
        type:Date,

    },
    RepaymentMethod:{
        type:Number
    },
    amountPaid:{
        type:String,
    },
    graceDays:{
        type:String,
    },

})

module.exports = Loans = mongoose.model('loandetail',LoanSchema)