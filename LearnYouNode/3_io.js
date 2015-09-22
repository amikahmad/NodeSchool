// USE A SYNCHRONOUS FILESYSTEM OPERATION TO READ A FILE AND PRINT THE NUMBER OF NEWLINES (\n) IT CONTAINS TO THE CONSOLE

// Load the fs module and put in a global variable.
var fs = require('fs')

// This method will return a Buffer object containing the complete contents of the file.
// Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format.
fs.readFileSync('/path/to/file')


