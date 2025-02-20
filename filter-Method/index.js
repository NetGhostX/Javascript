let numbers = [1,2,3,4,5,6,7];
let evenNumbs = numbers.filter(isEven);

let oddNumbs =  numbers.filter(isOdd);

console.log( `Even numbers: ${evenNumbs}`);
console.log( `Odd numbers: ${oddNumbs}`);

function isEven(element){
       return element % 2 === 0;
}

function isOdd(element){
       return element % 2 !== 0;
}