const express = require('express');

const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();

router.get('/', async (req, res) => {
  // res.header({ 'custom-header': 'My custom header' });

  try {
    const filterUser = req.query.user || null;
    const messages = await controller.getMessages(filterUser);

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

router.put('/:id', async (req, res) => {
  try {
    const message = await controller.updateMesages(
      req.params.id,
      req.body.message
    );

    response.success({ req, res, message });
  } catch (error) {
    const [message, details] = error;

    response.error({ req, res, message, details });
  }
});

module.exports = router;
