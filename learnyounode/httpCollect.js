var bl  = require('bl');
var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
	response.pipe(bl(function(err,data){
		if(err){
			console.log(err);
		};
		console.log(data.toString().length);
		console.log(data.toString());
	}));
});

/*
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err)
		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))
});

*/
