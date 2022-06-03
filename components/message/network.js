const express = require('express');

const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();

router.get('/', async (req, res) => {
  console.log(req.headers);
  res.header({ 'custom-header': 'My custom header' });

  try {
    const messages = await controller.getMessages();

    response.success({ req, res, message: messages });
  } catch (error) {}
});

router.post('/', async (req, res) => {
  try {
    if (req.query.error == 'ok') {
      response.error({
        req,
        res,
        message: 'Unexpected error!',
        details: 'Its a Simulated error!',
      });
      return false;
    }

    const message = await controller.addMessage(
      req.body.user,
      req.body.message
    );

    response.success({
      req,
      res,
      status: 201,
      message,
    });
  } catch (error) {
    const [message, details] = error;

    response.error({
      req,
      res,
      message,
      details,
    });

    return false;
  }
});

module.exports = router;
