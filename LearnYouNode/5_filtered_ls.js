// Create a program that prints a list of files in a given directory, filtered by the extension of the files.

var fs = require('fs')
// this module gives access to  file directory structure and manipulation
var path = require('path')

// readdir() reads the contents of a directory
fs.readdir(process.argv[2], function (err, list) {
    // forEach executes a specified function for each element in an array
    list.forEach(function (file) {
        // extname returns the part of a string that comes after the dot including the dot itself
        // + prefixes the string on the right hand side with the string on the left hand side
        if (path.extname(file) === '.' + process.argv[3])
            console.log(file)
    })
})
