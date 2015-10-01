// Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument.
// Write the String contents of each "data" event from the response to a new line on the console (stdout).

// load the required module for http requests
var http = require('http')

// .get is one http method , which is used for making requests to a server
// the .get callback function doesn't follow the same node format that we have seen previously
http.get(process.argv[2], function (response) {
    // Good practice to always set the encoding
    response.setEncoding('utf8')
    // .on() assigns our event handlers
    response.on('data', console.log)
    response.on('error', console.error)
})
