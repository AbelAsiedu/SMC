const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let users = [];
let id = 1;

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const user = { id: id++, ...req.body };
    users.push(user);
    res.status(201).json(user);
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== parseInt(id));
    res.status(204).end();
});

app.listen(8081, () => {
    console.log('Server running on http://localhost:8081');
});
