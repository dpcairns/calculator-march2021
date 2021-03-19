// import functions and grab DOM elements
import { 
    handleAddClick, 
    handleDivideClick, 
    handleMultiplyClick, 
    handleSubtractClick,
} from './handlers.js';

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');

// set event listeners to update state and DOM
addButton.addEventListener('click', handleAddClick);
subtractButton.addEventListener('click', handleSubtractClick);
multiplyButton.addEventListener('click', handleMultiplyClick);
divideButton.addEventListener('click', handleDivideClick);