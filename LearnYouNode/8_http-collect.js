// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

// The first line you write should just be an integer representing the number of characters received from the server and the second line should contain the complete String of characters sent by the server.

// Use 'npm install bl'  to install the 3rd party buffer list package

var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    // Use the .pipe() method in your module to pipe your stream
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        // Manipulate the data
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})

