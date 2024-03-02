const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.post('/createTodo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }
    
    // Put it into MongoDB
})

app.get('/allTodos', (req, res) => {
    // Get all Todos from MongoDB
})

app.put('/completedTodo', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent me wrong inputs"
        })
    }
    // Update the following ID Todo into MongoDB
})