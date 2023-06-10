// DOM Elements
const displayResult = document.querySelector("#result");
const operators = document.querySelectorAll("#operator");
const equalBtn = document.querySelector("#equal");
const digits = document.querySelectorAll(".digit");
const clearBtn = document.querySelector("#clear");
const backspaceBtn = document.querySelector("#backspace");

let result = 0;
let operand = null;
let operator = null;
displayResult.textContent = result;

// Operation Functions
function add(n1,n2){
    result = n1 + n2;
    displayResult.textContent = result;
}

function subtract(){
    
}

function multiply(){
    
}

function divide(){
    
}

// Operate Function
function operate(n1, n2, operation){
    if(n2 === null){
        result = "Give me another number to work with!";
        displayResult.textContent = result;
    }
    if(operation === "+"){
        add(n1,n2);
    }else if(operation === "-"){
        subtract();
    }else if(operation === "x"){
        multiply();
    }else{
        divide();
    }
}

//Clear & Backspace Functions
function clear(){
    operand = null;
    operator = null;
    result = 0;
    displayResult.textContent = result;
}

// Event Listeners
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        operand = digit.textContent;
        result = operand;
        displayResult.textContent = result;  
        // result += parseInt(digit.textContent);
        // displayResult.textContent = result;
    })
})

operators.forEach(op => {
    op.addEventListener("click", () => {
        operator = op.textContent;
        result += operator;
        displayResult.textContent = result; 
    })
})

equalBtn.addEventListener("click", () => {
    operate(result,operand,operator);
})

clearBtn.addEventListener("click", clear);
// operate(2,3,"+");