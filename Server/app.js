const express = require('express');
const cors = require('cors')
const app = express();
var data = require('./users');
const jsonData = data;
app.use(cors());

app.get('/', (req, res, next) => {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(`<h2>Welcome to json server</h2>`));
});

app.get('/data', (req, resp) => {
    resp.json(jsonData);
});

app.listen(3000);