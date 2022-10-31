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
    return a / b;
};

const doTheMaths = function (a, b, operator) {
    if (operator === 'add') {
        return add(a, b);
    } else if (operator === 'subtract') {
        return subtract(a, b);
    } else if (operator === 'multiply') {
        return multiply(a, b);
    } else if  (operator === 'divide') {
        return divide(a, b);
    } else {
        return 'There is an error, my guy';
    }
};

const display = document.querySelector('#display');

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '';
});

const btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', () => {
    display.textContent += 0;
});

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    display.textContent += 1;
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    display.textContent += 2;
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    display.textContent += 3;
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
    display.textContent += 4;
});

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {
    display.textContent += 5;
});

const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', () => {
    display.textContent += 6;
});

const btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', () => {
    display.textContent += 7;
});

const btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', () => {
    display.textContent += 8;
});

const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {
    display.textContent += 9;
});