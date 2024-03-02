const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post('/createTodo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }
    // Put it into MongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created!"
    })
})

app.get('/allTodos', async (req, res) => {
    // Get all Todos from MongoDB
    const allTodos = await todo.find({});
    res.json({
        allTodos
    })
})

app.put('/completedTodo', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success) {
        return res.status(411).json({
            msg: "You sent me wrong inputs"
        })
    }
    // Update the following ID Todo into MongoDB
    await todo.update({
        _id: req.body.id, 
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as Completed!"
    })
})

app.listen(3000);