
var express = require('express');
var app = express();

app.get('/',function(req,res) {
	  res.send("Hello World");
	  res.send("test ci");
});

app.listen(4001);
