const express = require('express');
const app = express();

const server = require('http').Server(app);
const socket = require('./socket');

const config = require('./config');

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

app.use(config.publicRoute, express.static('public'));

app.use('/user', express.static('public'));

server.listen(config.port, () => {
  console.log(`My app listening on port ${config.host}:${config.port}`);
});