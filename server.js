const express = require('express');

const routes = require('./network/routes');

const server = express();

routes(server);

server.listen(3000);

console.log('The application is lissening at http://localhost:3000 port');
