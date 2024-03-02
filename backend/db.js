const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@cluster0.rlckg0p.mongodb.net/TodoApp");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('TodoApp', todoSchema);

module.exports = { todo }