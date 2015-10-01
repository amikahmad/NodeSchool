// This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

// Create a function to print out the data.

function printResults () {
    for (var i = 0; i < 3; i++)
        console.log(results[i])
}

// Create a function to stream data from the 3 URL's.

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        // Pipe the stream to collect the data.
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)

            // String the data.
            results[index] = data.toString()
            count++

            if (count == 3) // The last one!
                printResults()
        }))
    })
}

// Collect the data and store it in the results array. If "i" is less than 3 console log that that element in position "i"
for (var i = 0; i < 3; i++)
    httpGet(i)
