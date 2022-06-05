const express = require('express');

const db = require('./db');
const routes = require('./network/routes');
const config = require('./network/config');

const uri = `mongodb+srv://${config.user}:${config.pasword}@cluster0.nxuer.mongodb.net/${config.db_name}`;
db(uri);

const app = express();
routes(app);

const server = require('http').Server(app);

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('New client get conected');
  socket.emit('message', 'Welcome!');
});

setInterval(() => {
  io.emit('message', 'Hi, Im notifying you guys');
}, 3000);
server.listen(3000, () => {
  console.log('The application is lissening at http://localhost:3000 port');
});
