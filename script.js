// Billbook Script
function updateTotal() {
    let total = 0;
    const rows = document.querySelectorAll('#billTable tbody tr');
    rows.forEach((row, index) => {
        if (index < rows.length - 1) {
            const quantityInput = row.querySelector('.quantity');
            const rateInput = row.querySelector('.rate');
            const valueSpan = row.querySelector('.value');

            const quantity = parseFloat(quantityInput.value) || 0;
            const rate = parseFloat(rateInput.value) || 0;

            const value = quantity * rate;
            valueSpan.textContent = value.toFixed(2);
            total += value;
        }
    });
    document.getElementById('totalValue').textContent = total.toFixed(2);
}

// Calculator Script
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Navigation Script
document.getElementById('showBillbook').addEventListener('click', () => {
    document.getElementById('billbookSection').style.display = 'block';
    document.getElementById('calculatorSection').style.display = 'none';
});

document.getElementById('showCalculator').addEventListener('click', () => {
    document.getElementById('calculatorSection').style.display = 'block';
    document.getElementById('billbookSection').style.display = 'none';
});
