import { 
    add, 
    subtract, 
    multiply, 
    divide,
} from './utils.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addAnswer = document.getElementById('add-answer');
const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractAnswer = document.getElementById('subtract-answer');
const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyAnswer = document.getElementById('multiply-answer');
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideAnswer = document.getElementById('divide-answer');


export function handleAddClick() {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const sum = add(value1, value2);

    addAnswer.textContent = sum;
}

export function handleSubtractClick() {
    const value1 = Number(subtractInput1.value);
    const value2 = Number(subtractInput2.value);
    const difference = subtract(value1, value2);
    
    subtractAnswer.textContent = difference;
}

export function handleMultiplyClick() {
    const value1 = Number(multiplyInput1.value);
    const value2 = Number(multiplyInput2.value);
    const product = multiply(value1, value2);

    multiplyAnswer.textContent = product;
}

export function handleDivideClick() {
    const value1 = Number(divideInput1.value);
    const value2 = Number(divideInput2.value);
    const quotient = divide(value1, value2);
    
    divideAnswer.textContent = quotient;
}
