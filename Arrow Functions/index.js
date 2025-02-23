// arrow functions = a consise way to write function expressions

const hello = (name,age) => {
       console.log(`Hello ${name}`);
       console.log(`You are ${age} years old`);

}


hello("Kelvin", 23);



//setTimeout(callback,3000);

setTimeout(()=> console.log("Hello"),3000);


const numbers = [1,2,3,4,5,6]

const squares = numbers.map((element) => Math.pow(element,2));


const evenNums = numbers.filter((element) => element %2 === 0);

const total = numbers.reduce((accumulator,element) => accumulator + element);

console.log(squares);

console.log(evenNums)

console.log(total);