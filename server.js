const express = require('express');
const app = express();

const server = require('http').Server(app);
const socket = require('./socket');

const path = require('path');
const routes = require('./router/index');
const connectDB = require('./db/mongodb');

connectDB();

app.use(express.json());
// app.use(router);

socket.connect(server);

// branch project

routes(app);

//app

app.use('/', express.static('public'));

app.use('/user', express.static('public'));

server.listen(3001, () => {
  console.log('My app listening on port 3001');
});