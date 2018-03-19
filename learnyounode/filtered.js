var fs = require('fs');
var file = process.argv[2];
var extension = process.argv[3];

fs.readdir(file, function(err,list){
	for (var i=0; i< list.length; i++){
	    var file = list[i].split('.');
	    if(file[1] === extension){
		console.log(list[i]);
}
	    
}
});
