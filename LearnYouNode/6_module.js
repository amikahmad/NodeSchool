// Require the filesystem module
var fs = require('fs')
    // Require the path module
var path = require('path')

// Write the module.export with 3 arguments
module.exports = function (dir, filterStr, callback) {

    fs.readdir(dir, function (err, list) {
        // Use if (err) early on in your script for early error callback for efficiency
        if (err)
            return callback(err)

        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })
        // Make sure to provide a null value when there is no error.
        callback(null, list)
    })
}
