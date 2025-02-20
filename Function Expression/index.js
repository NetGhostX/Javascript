//function expressions = a way to define functions as value or variables

const numbers = [1,2,3,4,5,6,7];

const squares = numbers.map(function(element)
{return Math.pow(element,2)
})

console.log(squares)


const cubes = numbers.map(function(element){
       return Math.pow(element,3);
})

const evenNums = numbers.filter(function(element){
       return element % 2 === 0; 
})

console.log(evenNums)


function cube(element){
       return Math.pow(element, 3)
}