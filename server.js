const express = require('express');

const app = express();

app.use('/', function (req, res) {
  res.send('Hello there!');
});

app.listen(3000);

console.log('The application is lissening at http://localhost:3000 port');
