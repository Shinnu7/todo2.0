const Todo = require("../models/todoModel");

// Create Todo
exports.createTodo = async (req, res) => {
  const todo = await Todo.create({ text: req.body.text });
  res.json(todo);
};

// Get All Todos
exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// Update Todo
exports.updateTodo = async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed },
    { new: true }
  );
  res.json(updated);
};

// Delete Todo
exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
