var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
app.get('/mars', function (req, res) {
  res.send('Hello MARS!\n');
});
app.get('/anan', function (req, res) {
  res.send('Hello anaanin ami!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

