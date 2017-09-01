require('dotenv').config;
const expect 	= require('chai').expect;
const Writer	= require('../index');
const fs 		= require('fs');

describe('Function appendLine should append a line underneath a target in a file.', () => {
	it('should correctly append a line to a file', () => {

		Writer.appendLine('//-target-append', 'const success = true;', process.env.HOME_PATH + '/mock/mock.js',  Writer.writeLine);
	});
});
