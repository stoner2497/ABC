const mongoose = require('mongoose');
const Schema = mongoose.Schema

const EmpSchema = new Schema({
    Admin:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = Emp = mongoose.model('emp',EmpSchema)