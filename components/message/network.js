const express = require('express');

const response = require('../../network/response');

const router = express.Router();

router.get('/', function (req, res) {
  console.log(req.headers);
  res.header({ 'custom-header': 'My custom header' });
  response.success({ req, res, message: 'List of messages' });
});

router.post('/', function (req, res) {
  if (req.query.error == 'ok') {
    response.error({
      req,
      res,
      message: 'Unexpected error!',
      details: 'Its a Simulated error!',
    });
  } else {
    response.success({
      req,
      res,
      message: `Message '${req.body.message}'successfuly added `,
    });
  }
});

module.exports = router;
