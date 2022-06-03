const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const response = require('./network/response');

const router = express.Router();
// app.use('/', function (req, res) {
//   response.success(req, res,'Hello there!');
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use('/app', express.static('public'));

router.get('/', function (req, res) {
  response.success(req, res, 'Hello from get');
});
router.post('/', function (req, res) {
  response.success(req, res, 'Hello from post');
});
router.get('/message', function (req, res) {
  console.log(req.headers);
  res.header({ 'custom-header': 'My custom header' });
  response.success({ req, res, message: 'List of messages' });
});
router.post('/message', function (req, res) {
  //   console.log(req.body);
  //   console.log(req.query);
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

app.listen(3000);

console.log('The application is lissening at http://localhost:3000 port');
