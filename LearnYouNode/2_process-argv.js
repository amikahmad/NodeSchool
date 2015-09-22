// LOOP THROUGH ARGUMENTS AND OUTPUT THEIR SUM

// set result as a global variable
var result = 0

for (var i = 2; i < process.argv.length; i++)
    result += Number(process.argv[i])

console.log(result)
