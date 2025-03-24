// destructuring = extract values from arrays and objects, then assign them to variables in a convinient way
//                [] = to perform array destructuring
//                {} = to perform object destructuring

//ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extractColors] = colors;
console.log(firstColor);
console.log(extractColors)


//----------------------------------EXAMPLE 4-----------------------------------------------
// EXTRACT VALUES FROM OBJECTS


function displayPerson({firstName, lastName,age,job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age} `);
    console.log(`job: ${job}`);

}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}


const {firstName, lastName, age, job= "unemployed"} = person2;

console.log(firstColor);
console.log(lastName);
console.log(age)
console.log(job);


displayPerson(person2)