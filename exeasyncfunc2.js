var fs = require ("fs");

function rereadFile(err){
	if (err) return err;
	
	fs.readFile("input2.txt", finishprogram)
	
}

function finishprogram(err,data){
	console.log(data.toString());
	console.log("Finish re-reading file");
}


function appendFile(err,data){
	if (err) return err;
	console.log(data.toString());
	console.log("Finish reading file")
	console.log("Begin appending file");
	fs.appendFile("input2.txt", "I am appending something", rereadFile)
	console.log("Finish appending file");
	console.log("Begin re-reading file");
	
}


console.log("Begin reading file")

fs.readFile("input2.txt", appendFile)
