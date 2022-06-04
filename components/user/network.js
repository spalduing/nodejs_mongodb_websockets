const express = require('express');
const controller = require('./controller');
const response = require('../../network/response');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const message = await controller.getUsers();
    response.success({ res, message });
    res;
  } catch (error) {
    const [message, details] = error;

    response.error({ res, message, details });
  }
});

router.post('/', async (req, res) => {
  try {
    const message = await controller.addUser(req.body);
    response.success({ res, message });
    res;
  } catch (error) {
    const [message, details] = error;

    response.error({ res, message, details });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const message = await controller.updateUser(req.params.id);
    response.success({ res, message });
    res;
  } catch (error) {
    const [message, details] = error;

    response.error({ res, message, details });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const message = await controller.deleteUser(req.params.id);
    response.success({ res, message });
    res;
  } catch (error) {
    const [message, details] = error;

    response.error({ res, message, details });
  }
});

module.exports = router;
