// variables for the project
let a;
let b;
let display;


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
// select buttons using node
const number = document.querySelectorAll('#number');
const sign = document.querySelectorAll('#sign');
const equalSign = document.querySelectorAll('#equal');
const screen = document.querySelector('.screen');
// add event listener 

number.forEach(
    number => number.addEventListener( 'click' , function num() {
        let x = number.innerHTML;
            //console.log(x);
        display = screen.innerText += x;    
    })
)

sign.forEach(
    sign => sign.addEventListener( 'click' , () => {
        let x = sign.innerHTML;
            console.log(x);
    })
)

equalSign.forEach(
    equal => equal.addEventListener( 'click' , () => {
        let x = equal.innerHTML;
            console.log(x);
    })
)