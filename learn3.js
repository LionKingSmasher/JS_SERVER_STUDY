const express = require('express');
const app = express();

app.get('/', function(request, response){
	response.end("<?php echo "Hello World" ?>");
});

app.listen(8081, function(){
	console.log("Server Starting!!");
});