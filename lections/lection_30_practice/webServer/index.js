const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json());
const port = 3000;

const TODO_EXAMPLE = {
    id: '1',
    title: 'Hit the gym',
    checked: false
};

const todoList = [TODO_EXAMPLE];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/user', (err, req, res, next) => {
    // add headers

    next();
});

app.get('/todo-list/', (req, res) => {
    res.send(todoList)
});

app.post('/todo-list', (req, res) => {
    console.log(req.body);

    const {title} = req.body

    const todo = {
        id: String(Date.now()),
        title,
        checked: false
    }

    todoList.push(todo);

    res.send(true);
});

app.put('/todo-list/:id', (req, res) => {
    const {checked} = req.body;
    const {id} = req.params;

    if (!id) {
        res.status(401).send('Id is required');

        return;
    }

    const foundToDo = todoList.find(({id: currentId}) => {
        return currentId === id;
    });

    if (!foundToDo) {
        res.status(401).send('Todo not found');

        return;
    }

    foundToDo.checked = !!checked;

    res.send(true);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
