//callback = a function that is passed as an argument to another function

hello(goodbye);

function hello(callback){
    console.log("Hello!");
}

function leave(){
    console.log("Leave!!")
}
function goodbye(){
    console.log("Hello!");
}
 