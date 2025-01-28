let display = document.getElementById('display');
let currentInput = '';
let operatorValue = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
  if (currentInput.includes('.') && number === '.') return; // Prevent multiple decimals
  currentInput += number;
  updateDisplay();
}

function operator(op) {
  if (currentInput === '') return;
  if (firstOperand !== '') calculate();
  operatorValue = op;
  firstOperand = currentInput;
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || firstOperand === '') return;
  secondOperand = currentInput;
  let result = '';
  switch (operatorValue) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operatorValue = '';
  firstOperand = '';
  secondOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operatorValue = '';
  firstOperand = '';
  secondOperand = '';
  updateDisplay();
}

function toggleSign() {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }
}

function percent() {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  }
}

function updateDisplay() {
  display.textContent = currentInput || '0';
  }