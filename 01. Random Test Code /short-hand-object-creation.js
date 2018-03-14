// Illustrates how ECMAScript handles object creation in a more streamlined fashion. 
// This new representation of an object is similar to JSON and thus recommended to cross-application 
// communication

'use strict';

function submit(name, feedback, rating = 5){
    let data = { name, feedback, rating};
    // In ECMA15 specifications, createing objects using this short hand notation allows you to specidy only the object values.
    // The object keys are just the same as the object values. 
    // Therefore the internal representation is data = {name: "name", feedback: "feedback", rating: "rating"}


    for( let key in data){
        console.log(key + " : " + data[key]);
    }
}

submit("Ryan Dsouza", "This is awesome");