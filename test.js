var jsonfile = require('jsonfile');
var dir = require('directory-tree');

var file = 'images.json';
var content = dir.directoryTree("images", ['.jpg']);

jsonfile.writeFile(file, content, function(err){
	console.error(err);
})
