// DOM Elements
const displayResult = document.querySelector("#result");
const operators = document.querySelectorAll("#operator");
const equalBtn = document.querySelector("#equal");
const digits = document.querySelectorAll(".digit");
const clearBtn = document.querySelector("#clear");
const backspaceBtn = document.querySelector("#backspace");

let result = 0;
let displayString = "0";
let operand1 = "";
let operand2 = "";
let operator = null;
displayResult.textContent = displayString;

// Functions
// Operation Functions
function add(n1,n2){
    if(!Number.isInteger(result)){
        result = parseFloat(n1) + parseFloat(n2);
        displayResult.textContent = result;
    }else{
        result = parseInt(n1) + parseInt(n2);
        displayResult.textContent = result;
    }
}

function subtract(n1,n2){
    if(!Number.isInteger(result)){
        result = parseFloat(n1) - parseFloat(n2);
        displayResult.textContent = result;
    }else{
        result = parseInt(n1) - parseInt(n2);
        displayResult.textContent = result;
    }
}

function multiply(n1,n2){
    if(!Number.isInteger(result)){
        result = parseFloat(n1) * parseFloat(n2);
        displayResult.textContent = result;
    }else{
        result = parseInt(n1) * parseInt(n2);
        displayResult.textContent = result;
    }
}

function divide(n1,n2){
    if(n2 === "0"){
        zeroError("Tricky 0!", 1000);
        // displayString = "Tricky 0!"
        // displayResult.textContent = displayString;
    }else{
        if(!Number.isInteger(result)){
            result = parseFloat(n1) / parseFloat(n2);
            result = Math.floor(result * 10) / 10;
            displayResult.textContent = result;
        }else{
            result = parseInt(n1) / parseInt(n2);
            result = Math.floor(result * 10) / 10;
            displayResult.textContent = result;
        }
    }
}

// Operate Function
function operate(n1, n2, operation){
    if(n2 === ""){
        missingOperand("4g0t 1?", 1000);
        // displayString = "4g0t 1?";
        // displayResult.textContent = displayString;
    }else{
        if(operation === "+"){
            add(n1,n2);
        }else if(operation === "-"){
            subtract(n1,n2);
        }else if(operation === "x"){
            multiply(n1,n2);
        }else{
            divide(n1,n2);
        }
    }
}

// Clear Function
function clear(){
    operand1 = "";
    operand2 = "";
    operator = null;
    result = 0;
    displayString = "0";
    displayResult.textContent = displayString;
    operators.forEach(op => {
        op.classList.remove("bg-[#FDBF58]");
    })
}

// Error Timed Messages
function zeroError(message,duration){
    displayResult.textContent = message;
    setTimeout(function() {
        displayString = operand1;
        displayResult.textContent = displayString;
    }, duration);
}

function missingOperand(message,duration){
    displayResult.textContent = message;
    setTimeout(function() {
        displayString = operand1;
        displayResult.textContent = displayString;
    }, duration);
}

// Event Listeners
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        displayString = "";
        if(operand1 !== "" && operator !== null){
            operand2 += digit.textContent
            displayString = operand2;
            //displayResult.textContent = operand2;
        }else{
            operand1 += digit.textContent;
            displayString = operand1;
            // displayResult.textContent = displayString;
            if(operand1.charAt(1) === "."){
                result = parseFloat(operand1);
            }else{
                result = parseInt(operand1);
            }
        }
        displayResult.textContent = displayString;
        // result += parseInt(digit.textContent);
        // displayResult.textContent = result;
    })
})

operators.forEach(op => {
    op.addEventListener("click", () => {
        operator = op.textContent;
        op.classList.add("bg-[#FDBF58]");
        if(operand2 !== ""){
            operate(result,operand2,operator);
            operand2 = "";
            op.classList.remove("bg-[#FDBF58]")
        }
        // result += operator;
        // displayResult.textContent = result; 
    })
})

equalBtn.addEventListener("click", () => {
    operate(result,operand2,operator);
    operand2 = "";
    operator = null;
    operators.forEach(op => {
        op.classList.remove("bg-[#FDBF58]");
    })
})

backspaceBtn.addEventListener("click", () => {
    if(operand1 !== "" && operator === null){
        operand1 = "";
        displayString = "0";
        displayResult.textContent = displayString;
    }else if(operand1 !== "" && operand2 !== ""){
        operand2 = "";
        displayString = "0";
        displayResult.textContent = displayString;
    }else if(operand1 !== "" && operator !== null){
        operator = null;
        operators.forEach(op => {
            op.classList.remove("bg-[#FDBF58]");
        })
    }
})

clearBtn.addEventListener("click", clear);
// operate(2,3,"+");