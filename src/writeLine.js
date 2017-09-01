const fs 			= require('fs');
const chalk 		= require('chalk');
/**
 * Write a line after successfully
 * @param  {[type]} body     [description]
 * @param  {[type]} search   [description]
 * @param  {[type]} append   [description]
 * @param  {[type]} filename [description]
 * @return {[type]}          [description]
 */
module.exports = (body, search, append, filepath) => {
	try {
		const path = __approot + filepath;
		body = body.split('\n');
		body.splice(body.indexOf(search) + 1, 0, append);
		const output = body.join('\n');

		console.log(output);

		//return fs.writeFileSync(path, output);
		console.log(chalk.green(`Success: ${filepath} written.`));
	} catch (err) {
		console.log(chalk.red(err));
	}
}
