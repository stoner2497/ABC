const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AdminSchema = new Schema({
    Branch:{
        type:String,
        required:true
    },
    Name:{
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

module.exports = Admin = mongoose.model('admin',AdminSchema)