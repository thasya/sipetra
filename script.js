var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection ({
//properties..
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'transmigrasi'
});

connection.connect(function(error){
	if (!!error){
		console.log('Error');
	} else {
		console.log('Conneted');
	}
});

app.get ('/', function(req,resp){
	//about mysql
	connection.query("SELECT * FROM upt", function(error, rows, fields){
		if(!!error){
			console.log('Error in the query');
		} else {
			console.log('Sucess!');
			console.log(rows);
			//parse with your rows/field
		}
	});
})

app.listen(1337);

