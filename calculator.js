function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}   

function operate(op, a, b) {
    if (op == '/') {
        return divide(a, b);
    }
    else if (op == '+') {
        return add(a, b);
    }
    else if (op == '-') {
        return subtract(a, b);
    }
    else if (op == '*') {
        return multiply(a, b);
    }
    
}

/*
console.log(add(5, 6));
console.log(subtract(5, 6));
console.log(multiply(5, 6));
console.log(divide(5, 6));

console.log(operate('*', 7, 8));
console.log(operate('/', 70, 35));
*/

let temp = ""; // first number 
let tempNext = ""; // next number
let tempOperator = ""; // first operator 

let tempToInt = parseInt(temp);;
let tempNextToInt = parseInt(tempNext);

const x = document.createElement("Input");
x.setAttribute("value", temp);
x.setAttribute("readonly", "readonly"); // Add this line
x.classList.add("centered");
document.body.appendChild(x);

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    x.value = "";
    temp = "";
    tempOperator = "";
    tempNext = "";
    tempToInt = parseInt(temp);
    tempNextToInt = parseInt(tempNext);
    zero.removeEventListener('click', addZeroNext);
    zero.addEventListener('click', addZero);
    one.removeEventListener('click', addOneNext);
    one.addEventListener('click', addOne);
    two.removeEventListener('click', addTwoNext);
    two.addEventListener('click', addTwo);
    three.removeEventListener('click', addThreeNext);
    three.addEventListener('click', addThree);
    four.removeEventListener('click', addFourNext);
    four.addEventListener('click', addFour);
    five.removeEventListener('click', addFiveNext);
    five.addEventListener('click', addFive);
    six.removeEventListener('click', addSixNext);
    six.addEventListener('click', addSix);
    seven.removeEventListener('click', addSevenNext);
    seven.addEventListener('click', addSeven);
    eight.removeEventListener('click', addEightNext);
    eight.addEventListener('click', addEight);
    nine.removeEventListener('click', addNineNext);
    nine.addEventListener('click', addNine);
});

function addZero() {
    temp = temp + "0";
    tempToInt = parseInt(temp);
    x.value = temp; 
}
function addOne() {
    temp = temp + "1";
    tempToInt = parseInt(temp);
    x.value = temp; 
}
function addTwo() {
    temp = temp + "2";
    tempToInt = parseInt(temp);
    x.value = temp; 
}
function addThree() {
    temp = temp + "3";
    tempToInt = parseInt(temp);
    x.value = temp; 
}
function addFour() {
    temp = temp + "4";
    tempToInt = parseInt(temp);
    x.value = temp; 
}
function addFive() {
    temp = temp + "5";
    tempToInt = parseInt(temp);
    x.value = temp; 
}
function addSix() {
    temp = temp + "6";
    tempToInt = parseInt(temp);
    x.value = temp; 
}
function addSeven() {
    temp = temp + "7";
    tempToInt = parseInt(temp);
    x.value = temp; 
}
function addEight() {
    temp = temp + "8";
    tempToInt = parseInt(temp);
    x.value = temp; 
}
function addNine() {
    temp = temp + "9";
    tempToInt = parseInt(temp);
    x.value = temp; 
}

const zero = document.querySelector('#zero');
zero.addEventListener('click', addZero);

const one = document.querySelector('#one');
one.addEventListener('click', addOne);

const two = document.querySelector('#two');
two.addEventListener('click', addTwo);

const three = document.querySelector('#three');
three.addEventListener('click', addThree);

const four = document.querySelector('#four');
four.addEventListener('click', addFour);

const five = document.querySelector('#five');
five.addEventListener('click', addFive);

const six = document.querySelector('#six');
six.addEventListener('click', addSix);

const seven = document.querySelector('#seven');
seven.addEventListener('click', addSeven);

const eight = document.querySelector('#eight');
eight.addEventListener('click', addEight);

const nine = document.querySelector('#nine');
nine.addEventListener('click', addNine);

function addZeroNext () {
    tempNext = tempNext + "0";
    x.value = tempNext; 
    tempNextToInt = parseInt(tempNext);
}

function addOneNext () {
    tempNext = tempNext + "1";
    x.value = tempNext; 
    tempNextToInt = parseInt(tempNext);
}

function addTwoNext () {
    tempNext = tempNext + "2";
    x.value = tempNext; 
    tempNextToInt = parseInt(tempNext);
}

function addThreeNext () {
    tempNext = tempNext + "3";
    x.value = tempNext; 
    tempNextToInt = parseInt(tempNext);
}

function addFourNext () {
    tempNext = tempNext + "4";
    x.value = tempNext; 
    tempNextToInt = parseInt(tempNext);
}

function addFiveNext () {
    tempNext = tempNext + "5";
    x.value = tempNext; 
    tempNextToInt = parseInt(tempNext);
}

function addSixNext () {
    tempNext = tempNext + "6";
    x.value = tempNext; 
    tempNextToInt = parseInt(tempNext);
}

function addSevenNext () {
    tempNext = tempNext + "7";
    x.value = tempNext; 
    tempNextToInt = parseInt(tempNext);
}

function addEightNext () {
    tempNext = tempNext + "8";
    x.value = tempNext; 
    tempNextToInt = parseInt(tempNext);
}

function addNineNext () {
    tempNext = tempNext + "9";
    x.value = tempNext; 
    tempNextToInt = parseInt(tempNext);
}

const addition = document.querySelector('#add');
addition.addEventListener('click', () => {
    if (tempNext == "") {
        tempOperator = "+";
        zero.removeEventListener('click', addZero);
        zero.addEventListener('click', addZeroNext);
        one.removeEventListener('click', addOne);
        one.addEventListener('click', addOneNext);
        two.removeEventListener('click', addTwo);
        two.addEventListener('click', addTwoNext);
        three.removeEventListener('click', addThree);
        three.addEventListener('click', addThreeNext);
        four.removeEventListener('click', addFour);
        four.addEventListener('click', addFourNext);
        five.removeEventListener('click', addFive);
        five.addEventListener('click', addFiveNext);
        six.removeEventListener('click', addSix);
        six.addEventListener('click', addSixNext);
        seven.removeEventListener('click', addSeven);
        seven.addEventListener('click', addSevenNext);
        eight.removeEventListener('click', addEight);
        eight.addEventListener('click', addEightNext);
        nine.removeEventListener('click', addNine);
        nine.addEventListener('click', addNineNext);
    } 
    else if ((tempToInt != "") && (tempNextToInt != "")) {
        let result = operate(tempOperator, tempToInt, tempNextToInt);
        x.value = result;
        temp = result.toString();
        tempToInt = result;
        tempOperator = "+";

        tempNext = "";

    }
});

const subtraction = document.querySelector('#subtract');
subtraction.addEventListener('click', () => {
    if (tempNext == "") {
        tempOperator = "-";
        zero.removeEventListener('click', addZero);
        zero.addEventListener('click', addZeroNext);
        one.removeEventListener('click', addOne);
        one.addEventListener('click', addOneNext);
        two.removeEventListener('click', addTwo);
        two.addEventListener('click', addTwoNext);
        three.removeEventListener('click', addThree);
        three.addEventListener('click', addThreeNext);
        four.removeEventListener('click', addFour);
        four.addEventListener('click', addFourNext);
        five.removeEventListener('click', addFive);
        five.addEventListener('click', addFiveNext);
        six.removeEventListener('click', addSix);
        six.addEventListener('click', addSixNext);
        seven.removeEventListener('click', addSeven);
        seven.addEventListener('click', addSevenNext);
        eight.removeEventListener('click', addEight);
        eight.addEventListener('click', addEightNext);
        nine.removeEventListener('click', addNine);
        nine.addEventListener('click', addNineNext);
    } 
    else if ((tempToInt != "") && (tempNextToInt != "")) {
        let result = operate(tempOperator, tempToInt, tempNextToInt);
        x.value = result;
        temp = result.toString();
        tempToInt = result;
        tempOperator = "-";

        tempNext = "";

    }
});

const multiplication = document.querySelector('#multiply');
multiplication.addEventListener('click', () => {
    // 5 * 
    if (tempNext == "") {
        tempOperator = "*";
        zero.removeEventListener('click', addZero);
        zero.addEventListener('click', addZeroNext);
        one.removeEventListener('click', addOne);
        one.addEventListener('click', addOneNext);
        two.removeEventListener('click', addTwo);
        two.addEventListener('click', addTwoNext);
        three.removeEventListener('click', addThree);
        three.addEventListener('click', addThreeNext);
        four.removeEventListener('click', addFour);
        four.addEventListener('click', addFourNext);
        five.removeEventListener('click', addFive);
        five.addEventListener('click', addFiveNext);
        six.removeEventListener('click', addSix);
        six.addEventListener('click', addSixNext);
        seven.removeEventListener('click', addSeven);
        seven.addEventListener('click', addSevenNext);
        eight.removeEventListener('click', addEight);
        eight.addEventListener('click', addEightNext);
        nine.removeEventListener('click', addNine);
        nine.addEventListener('click', addNineNext);
    } 
    // 5 + 4 * 
    else if ((tempToInt != "") && (tempNextToInt != "")) {
        let result = operate(tempOperator, tempToInt, tempNextToInt);
        x.value = result;
        temp = result.toString();
        tempToInt = result;     

        tempNext = "";
        tempOperator = "*";
    }
});

const divison = document.querySelector('#divide');
divison.addEventListener('click', () => {
    if (tempNext == "") {
        tempOperator = "/";
        zero.removeEventListener('click', addZero);
        zero.addEventListener('click', addZeroNext);
        one.removeEventListener('click', addOne);
        one.addEventListener('click', addOneNext);
        two.removeEventListener('click', addTwo);
        two.addEventListener('click', addTwoNext);
        three.removeEventListener('click', addThree);
        three.addEventListener('click', addThreeNext);
        four.removeEventListener('click', addFour);
        four.addEventListener('click', addFourNext);
        five.removeEventListener('click', addFive);
        five.addEventListener('click', addFiveNext);
        six.removeEventListener('click', addSix);
        six.addEventListener('click', addSixNext);
        seven.removeEventListener('click', addSeven);
        seven.addEventListener('click', addSevenNext);
        eight.removeEventListener('click', addEight);
        eight.addEventListener('click', addEightNext);
        nine.removeEventListener('click', addNine);
        nine.addEventListener('click', addNineNext);
    } 
    else if ((tempToInt != "") && (tempNextToInt != "")) {
        let result = operate(tempOperator, tempToInt, tempNextToInt);
        x.value = result;
        temp = result.toString();
        tempToInt = result;
        tempOperator = "/";

        tempNext = "";

    }
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    let result = operate(tempOperator, tempToInt, tempNextToInt);
    x.value = result;
    temp = result.toString();
    tempToInt = result;
    tempNext = "";
    tempNextToInt = tempNext;
    /*
    zero.removeEventListener('click', addZero);
    one.removeEventListener('click', addOne);
    two.removeEventListener('click', addTwo);
    three.removeEventListener('click', addThree);
    four.removeEventListener('click', addFour);
    five.removeEventListener('click', addFive);
    six.removeEventListener('click', addSix);
    seven.removeEventListener('click', addSeven);
    eight.removeEventListener('click', addEight);
    nine.removeEventListener('click', addNine);
    */
});


// click one (temp)
// once u hit an operation, remove event listener from above / add event listener for below
// click one (tempNext), which calls operate and removes this event listener / adds back old event listener


// if u do more than 2 operations, it automatically evalautes the first 2 operations 
// 3 + 5 and if u press another operator, it will calculate 8  