// Creates a constant variable which is fixed to a funciton which accepts one parameter, multiplies 
// them by 10 and then returns it.
const multiplyByTen = num => 10*num;


const printToTen = () => {
    for(let i=1; i<10; i++) 
        console.log(i);
}

const addUs = (num1, num2) => console.log(num1+num2);

console.log(multiplyByTen(20));
printToTen();
addUs(20,40);