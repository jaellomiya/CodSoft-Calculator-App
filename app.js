let display = document.getElementById("display");
let clearButton = document.querySelector(".opps")

function initializeDisplay() {
  display.value = "0";
  clearButton.textContent = "AC";
}

function displayNumber(input){
  if (display.value === "0" || display.value === ""){
    display.value = input;
        clearButton.textContent = "C"  
 } else {
    display.value += input; 
    clearButton.textContent = "C"  
}
}

function displayOperation(input){
 display.value += input; 
     clearButton.textContent = "C"  
 }
        

function calculatePercentage(){
    display.value = parseFloat(display.value) / 100;
}

function clearDisplay(){
 display.value = "0";  
     clearButton.textContent = "AC"  
 
}

function calculate(){
    try{
         display.value =eval(display.value); 
    }
catch(error){
    display.value = "Error";
}
}

window.onload = initializeDisplay