const fs 			= require('fs');
const chalk 		= require('chalk');

module.exports = (target, value, file, appendFunc) => {
	try {
		var body = fs.readFileSync(file).toString();
		var search = target;
		var append = value;
		return appendFunc(body, search, append, filename);
	} catch(err) {
		console.log(chalk.red(`ERROR: Could not find the file ${file}`));
		console.log(err);
	}
}
