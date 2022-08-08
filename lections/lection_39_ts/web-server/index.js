const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json());
const port = 9555;

const usersList = [
    {
        login: 'superman',
        password: 'ZXhhbXBsZQ=='
    }
];


const checkPassword = (user, password) => {
    const base64Pass = btoa(password);

    return user.password === base64Pass;
}

app.post('/auth/login', (req, res) => {
    let response = {
        status: 'Success'
    }
    const { login, password } = req.body;
    
    const user = usersList.find(item => item.login === login)
    
    if (!user) {
        response.status = 'Reject'
    }

    if (user && !checkPassword(user, password)) {
        response.status = 'Reject'
    }

    res.json(response)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
