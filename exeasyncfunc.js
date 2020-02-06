var fs = require ("fs");


function appendFile(err,data){
	if (err) return err;
	console.log(data.toString());
	console.log("Finish reading file")
}

console.log("Begin reading file")
fs.readFile("input2.txt", appendFile)