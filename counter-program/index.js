const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel =  document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(event){
       event.preventDefault(); //page refreshes every time i press increase button, so i used this to prevent that from happening. 
       count++;
       countLabel.textContent = count;
}

decreaseBtn.onclick = function(event){
       event.preventDefault();  
       count--;
       countLabel.textContent = count;
}


resetBtn.onclick = function(event){
       event.preventDefault(); 
       count = 0;
       countLabel.textContent = count;
}