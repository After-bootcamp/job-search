var express = require('express');
var app = express();
var port = 56789;
const path = require('path');

app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/Script'));


app.get('/', function(req,res){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.sendFile(index.html);
});



app.listen(port, function() {
  console.log('Let\'s use port: ', port);
});
