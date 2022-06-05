const express = require('express');
const cors = require('cors');

const db = require('./db');
const routes = require('./network/routes');
const socket = require('./socket');
const config = require('./network/config');

const uri = `mongodb+srv://${config.user}:${config.pasword}@cluster0.nxuer.mongodb.net/${config.db_name}`;
db(uri);

const app = express();
app.use(cors());
routes(app);

const server = require('http').Server(app);

socket.connect(server);

// socket.socket.io.on('connection', (socket) => {
//   console.log('New client get conected');
//   socket.emit('message', 'Welcome!');
// });

// setInterval(() => {
//   socket.socket.io.emit('message', 'Hi, Im notifying you guys');
// }, 3000);

server.listen(3000, () => {
  console.log('The application is lissening at http://localhost:3000 port');
});
