// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console.

var fs = require('fs')

// Return the file as a buffer object.
var buffObj = fs.readFileSync(process.argv[2])

// Convert the buffObj to string.
var buffStr = buffObj.toString()

// Count how many lines there are.
// Use .split to create an array of substrings. Each split should be a new line.
// In this example the test file  does not have a newline character so the array has one more element than desired. Simply subtract this.
var lines = buffStr.split('\n').length - 1

console.log(lines)
