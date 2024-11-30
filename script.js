// Switch between Billbook and Calculator
function showBillbook() {
    document.getElementById('billbook').style.display = 'block';
    document.getElementById('calculator').style.display = 'none';
}

function showCalculator() {
    document.getElementById('billbook').style.display = 'none';
    document.getElementById('calculator').style.display = 'block';
    document.getElementById('display').disabled = false; // Allow keyboard typing
}

// Update Total Value in Billbook
function updateTotal(element) {
    const row = element.parentElement.parentElement;
    const quantity = parseFloat(row.cells[0].children[0].value) || 0;
    const rate = parseFloat(row.cells[2].children[0].value) || 0;
    const value = quantity * rate;
    row.cells[3].children[0].textContent = value.toFixed(2);

    // Update total
    let total = 0;
    document.querySelectorAll('.value').forEach(cell => {
        total += parseFloat(cell.textContent) || 0;
    });
    document.getElementById('totalValue').textContent = total.toFixed(2);
}

// Calculator Logic
let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateCalculatorDisplay();
}

function appendOperator(operator) {
    displayValue += ` ${operator} `;
    updateCalculatorDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    updateCalculatorDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateCalculatorDisplay();
}

function updateCalculatorDisplay() {
    document.getElementById('display').value = displayValue;
}

// Keyboard Input for Calculator
document.addEventListener('keydown', (event) => {
    const allowedKeys = '0123456789+-*/.()';
    if (allowedKeys.includes(event.key)) {
        appendNumber(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        updateCalculatorDisplay();
    }
});
