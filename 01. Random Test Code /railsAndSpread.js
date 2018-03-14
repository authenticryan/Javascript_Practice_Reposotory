'use strict';

let widget = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];

// Rails property in display. 'd' becomes an array that takes all left over values
let [ a, b, c, ...d ] = widget;


// Another example of rails operator...
const functionPlaceHolder = (a, b, c, ...d) => {
    console.log("All your statements come here");
}

// Spread operator is used when you want to spread the values
// Code below for demonstaration purpose only. Undefined values are used
// let values = [a, b, c, ...d];

console.log(a);