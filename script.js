let firstNumber;
let secondNumber;
let operatorButton;
let operatorMode = false;
let answerMode = false;
let errorMode = false;
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
    };

    if (output === 'ERROR'){
        errorMode = true;
        return output;
    };

    if (output % 1 != 0) {
        output = parseFloat(output.toFixed(2));
    };

    if (output.toString().length > 10) {
        return output.toExponential(4);
    } else {
        return output;
    };
};

const display = document.querySelector('#display');

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    clearEverything();
});

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    if (errorMode) {
        clearEverything();
    } else if (!operatorMode && !answerMode) {
        display.textContent = display.textContent.slice(0, -1);
    };
});

const clearEverything = function () {
    display.textContent = '';
    firstNumber = null;
    secondNumber = null;
    operatorButton = null;
    operatorMode = false;
    answerMode = false;
    errorMode = false;
};

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    if (operatorButton && display.textContent && !operatorMode){
        getAnswer();
        operatorButton = null;
    } else if (errorMode) {
        clearEverything();
    } else if (operatorMode) {
        display.textContent = 'ERROR';
        errorMode = true;
    };
});

const getAnswer = function () {
        secondNumber = display.textContent;
        display.textContent = doTheMaths(+firstNumber, +secondNumber, operatorButton);
        firstNumber = display.textContent;
        secondNumber = null;
        answerMode = true; 
};

//Operator buttons: add, subtract, multiply, divide
const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    addOperator();
});

const addOperator = function () {
    if (errorMode) clearEverything();
    if (display.textContent && operatorButton && !operatorMode) {
        getAnswer();
        operatorMode = true;
        operatorButton = 'add';
    } else if (display.textContent) {
        operatorMode = true;
        operatorButton = 'add';
        firstNumber = display.textContent;
    } else if (operatorMode && !display.textContent) {
        operatorButton = 'add'; 
    }
};

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', () => {
    subtractOperator();
});

const subtractOperator = function () {
    if (errorMode) clearEverything();
    if (display.textContent && operatorButton && !operatorMode) {
        getAnswer();
        operatorMode = true;
        operatorButton = 'subtract';
    } else if (display.textContent) {
        operatorMode = true;
        operatorButton = 'subtract';
        firstNumber = display.textContent;
    } else if (operatorMode && !display.textContent) {
        operatorButton = 'subtract'; 
    }
};

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    multiplyOperator();
});

const multiplyOperator = function () {
    if (errorMode) clearEverything();
    if (display.textContent && operatorButton && !operatorMode) {
        getAnswer();
        operatorMode = true;
        operatorButton = 'multiply';
    } else if (display.textContent) {
        operatorMode = true;
        operatorButton = 'multiply';
        firstNumber = display.textContent;
    } else if (operatorMode && !display.textContent) {
        operatorButton = 'multiply'; 
    }
};

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    divideOperator();
});

const divideOperator = function () {
    if (errorMode) clearEverything();
    if (display.textContent && operatorButton && !operatorMode) {
        getAnswer();
        operatorMode = true;
        operatorButton = 'divide';
    } else if (display.textContent) {
        operatorMode = true;
        operatorButton = 'divide';
        firstNumber = display.textContent;
    } else if (operatorMode && !display.textContent) {
        operatorButton = 'divide'; 
    }
};

//pos-neg, decimal, and 0-9 buttons
const inputNumber = function () {
    if (errorMode) clearEverything();
    if (answerMode || operatorMode) {
        display.textContent = null;
    }
    operatorMode = false;
    answerMode = false;
};

const posNeg = document.querySelector('#pos-neg');
posNeg.addEventListener('click', () => {
    inputNumber();
    if (display.textContent.length < 10) {
        if (display.textContent[0] === '-') {
            display.textContent = display.textContent.slice(1);
        } else {
            display.textContent = '-' + display.textContent;
        }
    }
});

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => {
    if (!display.textContent.includes('.') || (firstNumber && operatorMode)) {
        inputNumber();
        display.textContent += '.';
    }
});

const btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', () => {
    inputNumber();
    if (display.textContent.length < 10 && display.textContent != '0') {
        display.textContent += 0;
    }
});

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    inputNumber();
    if (display.textContent.length < 10) {
        display.textContent += 1;
    }
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    inputNumber();
    if (display.textContent.length < 10) {
        display.textContent += 2;
    }
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    inputNumber();
    if (display.textContent.length < 10) {
        display.textContent += 3;
    }
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
    inputNumber();
    if (display.textContent.length < 10) {
        display.textContent += 4;
    }
});

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {
    inputNumber();
    if (display.textContent.length < 10) {
        display.textContent += 5;
    };
});

const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', () => {
    inputNumber();
    if (display.textContent.length < 10) {
        display.textContent += 6;
    };
});

const btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', () => {
    inputNumber();
    if (display.textContent.length < 10) {
        display.textContent += 7;
    }
});

const btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', () => {
    inputNumber();
    if (display.textContent.length < 10) {
        display.textContent += 8;
    }
});

const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {
    inputNumber();
    if (display.textContent.length < 10) {
        display.textContent += 9;
    }
});

//Keyboard functionality
window.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) {
        return; //
    }

    switch (event.key) {
        case ".":
            if (!display.textContent.includes('.') || (firstNumber && operatorMode)) {
                inputNumber();
                display.textContent += '.';
            }
            break;

        case "0":
            inputNumber();
            if (display.textContent.length < 10 && display.textContent != '0') {
                display.textContent += 0;
            };
            break;

        case "1":
            inputNumber();
            if (display.textContent.length < 10) {
                display.textContent += 1;
            };
            break;

        case "2":
            inputNumber();
            if (display.textContent.length < 10) {
                display.textContent += 2;
            };
            break;
            
        case "3":
            inputNumber();
            if (display.textContent.length < 10) {
                display.textContent += 3;
            };
            break;

        case "4":
            inputNumber();
            if (display.textContent.length < 10) {
                display.textContent += 4;
            };
            break;

        case "5":
            inputNumber();
            if (display.textContent.length < 10) {
                display.textContent += 5;
            };
            break;

        case "6":
            inputNumber();
            if (display.textContent.length < 10) {
                display.textContent += 6;
            };
            break;

        case "7":
            inputNumber();
            if (display.textContent.length < 10) {
                display.textContent += 7;
            };
            break;

        case "8":
            inputNumber();
            if (display.textContent.length < 10) {
                display.textContent += 8;
            };
            break;

        case "9":
            inputNumber();
            if (display.textContent.length < 10) {
                display.textContent += 9;
            };
            break;

        case "+":
            addOperator();
            break;

        case "-":
            subtractOperator();
            break;

        case "*":
            multiplyOperator();
            break;

        case "/":
            divideOperator();
            break;

        case "Backspace":
            if (errorMode) {
                clearEverything();
            } else if (!operatorMode && !answerMode) {
                display.textContent = display.textContent.slice(0, -1);
            };
            break;

        case "Enter":
            if (operatorButton && display.textContent && !operatorMode){
                getAnswer();
                operatorButton = null;
            } else if (errorMode) {
                clearEverything();
            } else if (operatorMode) {
                display.textContent = 'ERROR';
                errorMode = true;
            };
            break;

        case "=":
            if (operatorButton && display.textContent && !operatorMode){
                getAnswer();
                operatorButton = null;
            } else if (errorMode) {
                clearEverything();
            } else if (operatorMode) {
                display.textContent = 'ERROR';
                errorMode = true;
            };
            break;

        case "Escape":
            clearEverything();
            break;

        default:
            return;
    }

    event.preventDefault();
}, true);


