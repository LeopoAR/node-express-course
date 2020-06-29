const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'},
]

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billyTheKid";
    const mockPassword = "superSecret";

    if(username === mockUsername && password === mockPassword){
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encryted token goes here'
        });
    }else {
        res.json({
            success: false,
            message: 'password and username do not match'
        });
    }
});

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    });
});

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    });
});

app.listen(8000, () => {
    console.log("server is running");
});