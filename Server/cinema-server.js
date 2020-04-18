const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const accounts = require('./Cinema/cinemaInformation');
const films = require('./Cinema/filmsDataBase');


app.get('/info', (req, resp) => {
    resp.json(accounts);
});

app.get('/films', (req, resp) => {
    resp.json(films);
});

app.listen(3001);