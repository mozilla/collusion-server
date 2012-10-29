var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello world');
});

app.get('/:adjective', function(req, res){
  res.send('Hello ' + req.param('adjective') + ' world');
});

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.listen(process.env['PORT'] || 3000, '127.0.0.1');
