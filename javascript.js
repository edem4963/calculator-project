// Basic arithmetic functions
function add(a = 0, b = 0){
    return a + b; 
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, number1, number2){
    let a = number1;
    let b = number2;

        if(operator == "add"){
            let calculate = add(a,b);
                return calculate;
        } else if(operator == "subtract"){
            let calculate = subtract(a,b);
                return calculate;
        } else if(operator == "multiply"){
            let calculate = multiply(a,b);
                return calculate;
        } else if(operator == "divide"){
            let calculate = divide(a,b);
                return calculate;
        }

}