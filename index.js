"use strict";
var fs = require("fs");

var options = {
	indexFilename: "index.html"
};

var srcFilename = "static/" + options.indexFilename;
fs.readFile(srcFilename, "utf8", function(err, data){
	if (err){
		return console.log(err);
	}

	fs.writeFile(process.cwd() + "/index.html", data, function(err){
		if (err){
			return console.log(err);
		}
	});
});
