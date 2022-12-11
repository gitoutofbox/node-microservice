const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: 'http://localhost:4000',
    optionsSuccessStatus: 200
}));

let allOrders = [
    { orderId: 1, orderBy: 'John smaual' },
    { orderId: 2, orderBy: 'Raby Thane' },
    { orderId: 3, orderBy: 'Zakus Mula' }
];
app.get('/', (req, res) => {
    res.send({ status: 'success', 'app': 'ordes', data: [...allOrders] });
});
app.get('/:id', (req, res) => {
    const order = allOrders.filter(item => item.orderId == req.params.id)
    if (order.length) {
        res.send({ status: 'success', 'app': 'ordes', data: { ...order[0] } });
    } else {
        res.send({ status: 'success', 'app': 'ordes', data: {} });
    }
})
app.delete('/:id', (req, res) => {
    allOrdersr = allOrders.filter(item => item.id != req.params.id)
    res.send({ status: 'success', 'app': 'ordes' });
})

app.listen(4001., () => {
    console.log('ORDERS microservice started at port 4001')
})