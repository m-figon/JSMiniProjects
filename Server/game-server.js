const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const accounts = require('./GameStore/accounts');
const PS = require('./GameStore/PS');
const XBOX = require('./GameStore/XBOX');
const PC = require('./GameStore/PC');
const NINTENDO = require('./GameStore/NINTENDO');


app.get('/accounts', (req, resp) => {
    resp.json(accounts);
});

app.get('/PS', (req, resp) => {
    resp.json(PS);
});
app.get('/XBOX', (req, resp) => {
    resp.json(XBOX);
});
app.get('/PC', (req, resp) => {
    resp.json(PC);
});
app.get('/NINTENDO', (req, resp) => {
    resp.json(NINTENDO);
});

app.listen(3001);