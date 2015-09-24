// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console .

var fs = require('fs')

// fs.readFile('/etc/passwd', function (err, data) {
// if (err) throw err;
// console.log(data);
// });

fs.readFile(process.argv[2], function (err, contents) {
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines);
})
