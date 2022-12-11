const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: 'http://localhost:4000',
    optionsSuccessStatus: 200
}));

let allUsers = [
    { userId: 1, name: 'User 1' },
    { userId: 2, name: 'User 2' },
    { userId: 3, name: 'User 3' }
];

app.get('/', (req, res) => {
    res.send({ status: 'success', data: [...allUsers] });
});
app.get('/:id', (req, res) => {
    const user = allUsers.filter(item => item.userId == req.params.id);
    if (user.length) {
        res.send({ status: 'success', data: { ...user[0] } });
    } else {
        res.send({ status: 'success', data: {} });
    }
})
app.delete('/:id', (req, res) => {
    allUsers = allUsers.filter(item => item.id != req.params.id)
    res.send({ status: 'success' });
})

app.listen(4002., () => {
    console.log('USERS microservice started at port 4002')
})