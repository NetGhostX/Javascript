  

let fullName = "Kelvi Yawo"; //string
let age = 23; // int
let student = true; //boolean


document.getElementById("p1").textContent =`Your name is : ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old `;
document.getElementById("p3").textContent =`Enrolled: ${student}`;


//Taker user input. 
//let username = window.prompt("What's your username ?");

//User input the right way.
let username2;
document.getElementById("mysubmit").onclick= function(event){
       event.preventDefault(); //prevent form submission
       username2 = document.getElementById("myText").value;

       document.getElementById("myH1").textContent = `Hello ${username2}`
}


//Type Conversion

let age1 = window.prompt("How old are you ?");
age1 = Number(age);

age1 +=1;

console.log(age1, typeof age1)

