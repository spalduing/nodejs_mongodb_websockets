const express = require('express');

const db = require('./db');
const routes = require('./network/routes');
const config = require('./network/config');

const server = express();

const uri = `mongodb+srv://${config.user}:${config.pasword}@cluster0.nxuer.mongodb.net/${config.db_name}`;
db(uri);

routes(server);

server.listen(3000);

console.log('The application is lissening at http://localhost:3000 port');
