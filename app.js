/*
 * Module dependencies
 */
var express = require('express');
var app = express();
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}

app.set('view engine', 'jade');
app.use(express.static('./', options));

app.get('/', function (req, res) {
  res.render('index');
});
app.listen(3000);

