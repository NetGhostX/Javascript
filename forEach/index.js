// forEach() = method used to iterate over elements of an array and apply a specified function (callback)
//to each element


let numbers = [1,2,3,4,5,6];

numbers.forEach(display)


function display(element){
    console.log(element);
}



let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(displayFruit);

function displayFruit(element){
    console.log(element)
}

fruits.forEach(toUppercase);

fruits.forEach(displayFruit); // Add this line to display the uppercase fruits

function toUppercase(element, index, array){
    array[index] = element.toUpperCase();
}