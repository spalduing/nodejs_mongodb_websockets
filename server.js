const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
// app.use('/', function (req, res) {
//   res.send('Hello there!');
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/', function (req, res) {
  res.send('Hello from get');
});
router.post('/', function (req, res) {
  res.send('Hello from post');
});
router.get('/message', function (req, res) {
  console.log(req.headers);
  res.header({ 'custom-header': 'My custom header' });
  res.send('List of messages');
});
router.post('/message', function (req, res) {
  console.log(req.body);
  console.log(req.query);
  res.send(`Message '${req.body.message}'successfuly added `);
});

app.listen(3000);

console.log('The application is lissening at http://localhost:3000 port');
