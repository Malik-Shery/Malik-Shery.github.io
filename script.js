function updateTotal() {
    let total = 0;
    const rows = document.querySelectorAll('#billTable tbody tr');
    rows.forEach((row, index) => {
        if (index < 10) { // Skip the total row
            const quantity = parseFloat(row.querySelector('.quantity').value) || 0;
            const rate = parseFloat(row.querySelector('.rate').value) || 0;
            const value = quantity * rate;
            row.querySelector('.value').textContent = value.toFixed(2);
            total += value;
        }
    });
    document.getElementById('totalValue').textContent = total.toFixed(2);
}

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

document.getElementById('showBillbook').addEventListener('click', () => {
    document.getElementById('billbookSection').style.display = 'block';
    document.getElementById('calculatorSection').style.display = 'none';
});

document.getElementById('showCalculator').addEventListener('click', () => {
    document.getElementById('billbookSection').style.display = 'none';
    document.getElementById('calculatorSection').style.display = 'block';
});
