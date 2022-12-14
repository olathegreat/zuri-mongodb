const router = require ("express").Router();

const controller = require("../controller/todoController")

router
    .get("/", controller.getAllTodos)
    .get("/:id", controller.getTodo)
    .post("/",controller.createTodos)
    .put("/:id", controller.updateTodo)
    .delete(":/id", controller.deleteTodo)






module.exports = router;