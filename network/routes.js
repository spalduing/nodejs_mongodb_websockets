const express = require('express');
const bodyParser = require('body-parser');

const root = require('../components/root/network');
const message = require('../components/message/network');

const routes = (server) => {
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use('/', root);
  server.use('/message', message);
  server.use('/server', express.static('public'));
};

module.exports = routes;
