var fs = require('fs');

var path = require('path');

console.log(__dirname);

fs.readdir(__dirname, function(err, dir){
	dir.forEach(function(item){
		var fullpath = path.join(__dirname, item);

		console.log(fs.statSync(fullpath));
	});
});