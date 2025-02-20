
//map  = acccepts a bacllback and applies that function to each elemtn of an array, then returns a new array
const numbers = [1,2,3,4,5,6];
const squares = numbers.map(square);

console.log(squares);


function square(element){
       return Math.pow(element,2);
}

function cube(element){
       return Math.pow(element,3);
}


const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper)

console.log();
function upperCase(element){
       return element.toUpperCase();
}