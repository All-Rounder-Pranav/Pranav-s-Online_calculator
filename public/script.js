// public/script.js
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

// Update your script.js file with these new functions
function clearOne() {
    currentInput = currentInput.slice(0, -1);  // Remove the last character
    updateDisplay();
}

function clearAll() {
    currentInput = '';  // Clear the entire input
    updateDisplay();
}




function calculate() {
    try {
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = String(result);
    } catch (error) {
        console.error('Error:', error);  // Log the error to the console
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

function updateDisplay() {
    console.log('Current Input:', currentInput);  // Log currentInput to the console
    document.getElementById('display').value = currentInput;
}
