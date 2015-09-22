// generate the console.log output of:
// a: 1, b: 8, c: 6

var a = 1, b = 2, c = 3; // global variables

( function firstFunction() {
    var b = 5, c = 6; // a = 1 (global), b = 5, c =6
        ( function secondFunction() {
            var b = 8; // a = 1 (global), b = 8 (secondFunction), c = 6 (firstFunction)
            console.log("a: "+a+", b: "+b+", c: "+c); // the secondFunction has the scope we are looking for ...
                (function thirdFunction() {
                    var a = 7, c = 9; // a = 7 (thirdFunction), b = 8 (secondFunction), c = 9 (thirdFunction)
                        (function fourthFunction() {
                            var a = 1, c = 8; // a = 1 (fourthFunction), b = 8 (secondFunction), c = 8 (fourthFunction)

                        }) ();
                }) ();
        }) ();
}) ();
