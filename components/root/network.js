const express = require('express');

const router = express.Router();

const response = require('../../network/response');

router.get('/', function (req, res) {
  response.success({ req, res, message: 'Hello from get' });
});
router.post('/', function (req, res) {
  response.success({ req, res, message: 'Hello from post' });
});

module.exports = router;
