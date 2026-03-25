const todoModel = require("./todoModel");

const getTodos = async (req, res) => {
  try {
    const todos = await todoModel.find({});
    res.json(todos);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = new todoModel(req.body);
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await todoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTodo)
      return res.json({ message: "Todo not found" });
    res.json(updatedTodo);
  } catch (err) {
    res.json({ message: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await todoModel.findByIdAndDelete(req.params.id);
    if (!deletedTodo)
      return res.json({ message: "Todo not found" });
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports={
    getTodos,
    updateTodo,
    createTodo,
    deleteTodo
}