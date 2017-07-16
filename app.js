var express = require('express');
var app = express();
var filein = require('./route/filein.js');
var signal = require('./route/signal.js');
app.use('/pika', filein);
app.use('/pikasig', signal)

app.listen(3000, ()=>{
  console.log('Fuck Up The Server on Port 3000');
});

module.exports = app;
