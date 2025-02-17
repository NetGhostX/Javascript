let age = 13;

if(age >=18){
       console.log("You are old enough to enter this site");
}else{
       console.log("You must be 18+ to visit this site.");
}


let time = 9;

if(time < 12){
       console.log("Good morning");
}else{
       console.log("Good afternoon");
}


let age2 = 25;
let hasLinces = false;

if(age2 >= 16){
       console.log("You are old enough to drive");
       

       if(hasLinces){
              console.log("You already have a license!");
       }else{
              console.log("You do not have your license yet!");
       }
}else{
       console.log("You must be 16+ to have a license");
}



//working with else if. 

if(age2 >= 18){
       console.log("You are old enough to enter this site");
}else if(age < 0){
       console.log("Your age cant be below 0");
}
else{
       console.log("You must be 18+ to enter this site")
}


//working with html 
let newAge;
const myAge = document.getElementById("age");
const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");

mysubmit.onclick = function(event){
    event.preventDefault(); 
    newAge = Number(myAge.value);
    
    if(newAge >= 18){
        resultElement.textContent = "You are old enough to enter this site";
    } else if(newAge < 0){
        resultElement.textContent = "Your age can't be below 0";
    } else {
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}
