const express = require("express");
const { getTodos, createTodo, updateTodo, deleteTodo } = require("./todoController");
const { verifyToken } = require("../middlewares/auth");
const router = express.Router();

router.get("/",verifyToken, getTodos);
router.post("/",verifyToken, createTodo);
router.put("/:id",verifyToken, updateTodo);
router.delete("/:id",verifyToken, deleteTodo);

module.exports = router;