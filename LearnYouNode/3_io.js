// Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console.

// Load the filesystem (fs) module from the Node core library. This module loads all the required dependencies to perform filesystem functions.
var fs = require('fs')

// Read the file to output a buffer object and put into the variable 'contents'.
var contents = fs.readFileSync(process.argv[2])

// Buffer objects are used by Node to represent arbitrary arrays of data. We must convert this object to a string, then split the array and put each element into a new line.
var lines = contents.toString().split('\n').length - 1

// Print the number of lines to the console
console.log(lines)








