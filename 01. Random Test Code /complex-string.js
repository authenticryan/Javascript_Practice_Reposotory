// Program illustrates the power of string functions and operations to be peformed on Date object.

'use strict';

var message = "There are [x] days till Christmas";

var c_date = new Date(new Date().getFullYear(), 12, 25);

var str_complex = message.replace('[x]', dayCount(new Date, c_date));

function dayCount(start, end){
    return Math.round((end - start)/(1000*60*60*24)); // For ms*s*minutes*hours
}


console.log(str_complex);