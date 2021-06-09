

var fs = require('fs');
var concat = require('concat-stream');
var text = fs.readFileSync('test.txt', 'utf-8');
var textByLine = text.split('\n')
console.log(textByLine);