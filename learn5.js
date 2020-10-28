var express = require('express');
var app = express();

app.get('/', function(req, res){ //만약 그냥 접속을 하면, Success출력
    res.send('Success!');
});

app.listen(3000, function(){
    console.log('Connected!');
});