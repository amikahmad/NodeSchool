// Tell the program that it requires the module to work, and assign it to filterFn (shorthand for filter Function)
var filterFn = require('./6_module.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

// Now use the module on the command line arguments
//  Use directory name, the extension, and the callback function as our 3 arguments
filterFn(dir, filterStr, function (err, list) {
    if (err)
        return console.error('fuckin error:', err)

    list.forEach(function (file) {
        console.log(file)
    })
})
