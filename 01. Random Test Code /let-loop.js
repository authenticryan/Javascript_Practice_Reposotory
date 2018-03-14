'use strict';


// This function is run, the first thing when the program runs. Its the initializer function.
// Immeidately invoked function
// (function init(){
//     console.log("This is printed to the output");
// })();

// console.log("This is printed second");

(function initLoop() {
    function doloop(x){
        console.log("loop: " + x); 
    }

    for (var i = 0; i < 10; i++){
        doloop(i);
    }
})();