const express = require('express');
const path = require('path');
const routes = require('./router/index');

const app = express();

app.use(express.json());
// app.use(router);

// branch project

routes(app);

//app

app.use('/', express.static('public'));

app.use('/user', express.static('public'));

app.listen(3001);
console.log('My app listening on port 3001');