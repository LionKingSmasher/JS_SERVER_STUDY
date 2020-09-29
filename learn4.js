var express = require('express');
var app = express();
var router = require('./router/test')(app); //test.js를 불러와 app을 전달

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8081, function(){
	console.log("Server Starting")
})