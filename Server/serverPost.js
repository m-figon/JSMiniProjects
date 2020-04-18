const express = require('express');
const cors = require('cors')
const app = express();
var data = require('./posts');
const jsonData = data;
app.use(cors());

const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(`<h2>Welcome to json server</h2>`));
});

app.get('/posts', (req, resp) => {
    resp.json(jsonData);
});

app.post('/login',function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    res.end("yes");
  });

app.listen(3000);