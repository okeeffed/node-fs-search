const path = require('path');
global.__approot = path.resolve(__dirname);

module.exports = {
	writeLine: require('./src/writeLine'),
	appendLine: require('./src/appendLine')
}
