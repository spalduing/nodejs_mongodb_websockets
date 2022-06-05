const express = require('express');

const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const userChatFilter = req.query.user || null;
    const message = await controller.getChats(userChatFilter);

    response.success({ res, message });
  } catch (error) {
    const [message, details] = error;

    response.error(res, message, details);
  }
});

router.post('/', async (req, res) => {
  try {
    const message = await controller.addChat(req.body);

    response.success({ res, message });
  } catch (error) {
    const [message, details] = error;

    response.error(res, message, details);
  }
});

module.exports = router;
