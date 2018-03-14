// Challenge - Convert the commented script below and make it into the arrow function denotation

// If there is one parameter to be passed to the function, the circular brackets can be omitted.
const addToTen = num => 10*num;

// For 2 or 0 parameters, we need to have the circular brackets. That is to ensure that the intepreter 
// knows its a function
const divideUs = (num1, num2) => num1/num2;

// 0 parameters. Thus it knows it is a funciton
const printMyName = () => {
    let myName = "Ryan Dsouza";
    console.log(myName);
}

console.log(addToTen(10)); 
console.log(divideUs(20,2));
printMyName();

// function addToTen(num){
//     return 10*num;
// }

// function divideUs(num1, num2) {
//     return num1/num2;
// }

// funciton printMyName(){
//     let myName = "Ryan Dsouza";
//     console.log(myName);
// }