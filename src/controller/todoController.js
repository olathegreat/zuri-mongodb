const { MongoUnexpectedServerResponseError } = require("mongodb");
const Todo = require("../model/todo");


// to get all todos
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
            err:err.message
        })
    }
}


// to get single todo
exports.getTodo = async (req,res) =>{
    try{
       
        let id = {_id:req.params.id};
        let todo = await Todo.findOne(id);
        if(!user) return res.status(404).json({
            success:false,
            message:"todo not found",
            err: err.message
        })

        res.status(200).json({
            success: true,
            message:"user found",
            todo
        })
    }catch(err){
           res.status(500).json({
            success:false,
            message:"internal server error",
            err: err.message
           })
    }
}


// create todos
exports.createTodos = async (req,res)=>{
    try{
        let todo = await req.body;
        let created = await Todo.create(todo);
        if(!created) return res.status(400).json({
            success: false,
            message:"user created failed"
        })

        res.status(201).json({
            success:true,
            message:"todo created successfully",
            todo: created
        })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"internal server error",
            err:"err.message"
        })

    }
}


// update users

exports.updateTodo = async(req,res)=>{
    try{
           let id= {_id: req.params.id};
           let todo= await req.body;
           let update = await todo.findOneAndUpdate(id,todo, {new:true});
           if(!update) return res.status(400).json({
            success:false,
            message:"user not updated"
           })

        res.status(200).json({
            success:true,
            message:"user updated",
            todo: update

           })



    }catch(err){
         res.status(500).json({
            success:false,
            message:"internal server error",
            err: err.message
         })
    }
}



// delete users

exports.deleteTodo = async(req,res)=>{
    try{
          let id = {_id:req.params.id}
          let deleted = await user.findOneAndRemove(id);
          if(!deleted) return res.status(400).json({
            success:false,
            message:"user not deleted",
          });

          res.status(200).json({
            success:true,
            message:"user deleted sucessfully",
            err:"err.message"
          })

    }catch(err){
        res.status(500).json({
            success:false,
            message:"internal server error",
            err: err.message
        })

    }
}