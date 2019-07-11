const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const TaskSchema = new Schema({
    assignie:{
        type:String,
        required:true
    },
    Employee:{
        type:String,
        
    },
    Admin:{
        type:String
    },
    customer:{
        type:String,
        required:true
    },
    taskDescription:{
        type:String,
        required:true,
        maxlength:80
    },
    date:{
        type:Date,
        default:Date.now()
    },
    endDate:{
        type:Date,
        required:true
    }
})

module.exports = Task = mongoose.model('task',TaskSchema);