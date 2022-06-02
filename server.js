const express = require('express');

const app = express();

const router = express.Router();
// app.use('/', function (req, res) {
//   res.send('Hello there!');
// });

app.use(router);

router.get('/', function (req, res) {
  res.send('Hello from get');
});
router.post('/', function (req, res) {
  res.send('Hello from post');
});
router.get('/message', function (req, res) {
  res.send('List of messages');
});
router.post('/message', function (req, res) {
  res.send('Message added');
});

app.listen(3000);

console.log('The application is lissening at http://localhost:3000 port');
