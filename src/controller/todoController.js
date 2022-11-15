const { MongoUnexpectedServerResponseError } = require("mongodb");
const Todo = require("../model/todo");

exports.getAllTodos = async (req,res)=>{
    try{
        let todos = await Todo.find();
        if(MongoUnexpectedServerResponseError.length===0){
            return res.status(404).json({
                success:false,
                message: "no user was found"
            })
        }
        res.status(200).json({
            success: true,
            message: "todos found",
            todos
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"internal server error",
            err:"err.message",
        })
    }
}