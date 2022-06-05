const express = require('express');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();
const upload = multer({ storage });

router.get('/', async (req, res) => {
  // res.header({ 'custom-header': 'My custom header' });

  try {
    const messageFilter = {
      user: req.query.user || null,
      chat: req.query.chat || null,
    };
    const message = await controller.getMessages(messageFilter);

    response.success({ req, res, message });
  } catch (error) {
    const [message, details] = error;

    response.error({ res, message, details });
  }
});

// router.post('/', upload.single('file'), async (req, res) => {
router.post('/', async (req, res) => {
  try {
    const message = await controller.addMessage(req.body);

    response.success({
      res,
      status: 201,
      message,
    });
  } catch (error) {
    const [message, details] = error;

    response.error({
      res,
      message,
      details,
    });

    return false;
  }
});

router.put('/:id', async (req, res) => {
  try {
    const message = await controller.updateMesages(req.params.id, req.body);

    response.success({ req, res, message });
  } catch (error) {
    const [message, details] = error;

    response.error({ req, res, message, details });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const message = await controller.deleteMessage(req.params.id);
    response.success({ req, res, message });
  } catch (error) {
    const [message, details] = error;

    response.error({ req, res, message, details });
  }
});

module.exports = router;
