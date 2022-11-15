const {Schema, model} = require("mongoose");

const todoSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
        required:true

    },todoTitle:{
        type:String,
        required:true,
        maxlength:20
    },
    todoDescription:{
        type: String,
        required:true,
        minlength: 10
    }
});

const todoModel = model("todos", todoSchema);

module.exports = todoModel;