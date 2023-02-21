// variables for the project
let a = "";
let b = "";
let display;
let esign;
let calculate = 0;


// Basic arithmetic functions
function add(a = 0, b = 0){
    return +a + +b; 
}

function subtract(a, b){
    return +a - +b;
}

function multiply(a, b){
    return +a * +b;
}

function divide(a, b){
    return +a / +b;
}

function operate(esign, a , b){
    //let a = number1;
    ///let b = number2;

        if(esign == "add"){
            calculate += add(a,b);
                return calculate;
        } else if(esign == "subtract"){
            calculate += subtract(a,b);
                return calculate;
        } else if(esign == "multiply"){
            calculate += multiply(a,b);
                return calculate;
        } else if(esign == "divide"){
            calculate += divide(a,b);
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
        display = screen.innerText +=  x; 
    })
)

sign.forEach(
    sign => sign.addEventListener( 'click' , () => {
        let x = sign.innerText;
            console.log(x);
            display = screen.innerText += x;  
    })
)
sign.forEach(
    sign => sign.addEventListener( 'click' , () => {
        let x = sign.innerText;
        let z = display.slice(display.length-1);
        let y = display.match(/[0-9](\+|x|\÷|\-)$/g)
            console.log(x);
            if((display.slice(display.length-2) ==  y)
                &&
                (display.length > 3)
                &&
                ((display.match(/\+|x|\÷|\-/g)|| []).length >= 2))  {
                for ( i = 0; i < display.length-1 ; i++){
                    if( (isNaN(display[i])) && (display.length > 1) ){
                       if( display[i] == "+" ){
                         esign = "add";
                       }
                       else if( display[i] == "-" ){
                         esign = "subtract";
                       }
                       else if( display[i] == "x" ){
                         esign = "multiply";
                       }
                       else{ 
                         esign = "divide";
                       }
                    }
                   else if(  esign == undefined ){
                     a += display[i];
                   }
                   else if ( a !== undefined && esign !== undefined ){
                     b += display[i];
                   }
                 }
                 
                console.log(operate(esign, a , b));
                display = screen.innerText = String(calculate) + z;
                a = '';
                b = '';
                esign = undefined;
                calculate = 0;    
            }
    })
)

equalSign.forEach(
    equal => equal.addEventListener( 'click' , () => {
        //let x = equal.innerText;
          //  console.log(x);
            //display = screen.innerText += x;
            for ( i = 0; i < display.length ; i++){
              
                if( isNaN(display[i]) && i > 0 ){
                   if( display[i] == "+" ){
                     esign = "add";
                   }
                   else if( display[i] == "-" ){
                     esign = "subtract";
                   }
                   else if( display[i] == "x" ){
                     esign = "multiply";
                   }
                   else{ 
                     esign = "divide";
                   }
                }
               else if(  esign == undefined ){
                 a += display[i];
               }
               else if ( a !== undefined && esign !== undefined ){
                 b += display[i];
               }
             }
             
            console.log(operate(esign, a , b)); 
            display = screen.innerText = String(calculate);
            a = '';
            b = '';
            esign = undefined;
            calculate = 0;
        })
)