let firstNumber;
let secondNumber;
let operatorButton;
let answer = false;
let activeOperator = false;
let output;

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    if (b === 0) {
        return 'ERROR';
    } else {
        return a / b;
    };
};

const doTheMaths = function (a, b, operator) {
    if (operator === 'add') {
        output = add(a, b);
    } else if (operator === 'subtract') {
        output = subtract(a, b);
    } else if (operator === 'multiply') {
        output = multiply(a, b);
    } else if  (operator === 'divide') {
        output= divide(a, b);
    } else {
        return 'ERROR';
    }
    if (output % 1 === 0) {
        return output;
    } else {
        return output.toFixed(2);
    };
};

const display = document.querySelector('#display');

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    display.textContent = '';
    firstNumber = null;
    secondNumber = null;
    activeOperator = false;
    answer = false;

});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    if (!answer) {
        secondNumber = display.textContent;
        display.textContent = doTheMaths(+firstNumber, +secondNumber, operatorButton);
        answer = true;
        firstNumber = null;
        secondNumber = null;
        activeOperator = false;
    }
});

const getAnswer = function () {
    secondNumber = display.textContent;
    display.textContent = doTheMaths(+firstNumber, +secondNumber, operatorButton);
    answer = true;
    firstNumber = null;
    secondNumber = null;
    activeOperator = false;  
};



//Operator Buttons: add, subtract, multiply, divide
const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    if (!activeOperator){
        firstNumber = display.textContent;
        display.textContent = null;
        operatorButton = 'add';
        activeOperator = true;
    };

    if (activeOperator && display.textContent) {
        getAnswer();
    };
});

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', () => {
    if (!activeOperator){
        firstNumber = display.textContent;
        display.textContent = null;
        operatorButton = 'subtract';
        activeOperator = true;
    };
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    if (!activeOperator){
        firstNumber = display.textContent;
        display.textContent = null;
        operatorButton = 'multiply';
        activeOperator = true;
    };
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    if (!activeOperator){
        firstNumber = display.textContent;
        display.textContent = null;
        operatorButton = 'divide';
        activeOperator = true;
    };
});


//0-9 buttons
const btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', () => {
    if (answer) {
        display.textContent = null;
        answer = false;
    }
    display.textContent += 0;
});

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    if (answer) {
        display.textContent = null;
        answer = false;
    }
    display.textContent += 1;
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    if (answer) {
        display.textContent = null;
        answer = false;
    }
    display.textContent += 2;
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    if (answer) {
        display.textContent = null;
        answer = false;
    }
    display.textContent += 3;
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
    if (answer) {
        display.textContent = null;
        answer = false;
    }
    display.textContent += 4;
});

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {
    if (answer) {
        display.textContent = null;
        answer = false;
    }
    display.textContent += 5;
});

const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', () => {
    if (answer) {
        display.textContent = null;
        answer = false;
    }
    display.textContent += 6;
});

const btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', () => {
    if (answer) {
        display.textContent = null;
        answer = false;
    }
    display.textContent += 7;
});

const btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', () => {
    if (answer) {
        display.textContent = null;
        answer = false;
    }
    display.textContent += 8;
});

const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {
    if (answer) {
        display.textContent = null;
        answer = false;
    }
    display.textContent += 9;
});