// Store Billbook and Calculator Toggle
document.getElementById('showBillbook').addEventListener('click', function() {
    document.getElementById('billbookSection').style.display = 'block';
    document.getElementById('calculatorSection').style.display = 'none';
});

document.getElementById('showCalculator').addEventListener('click', function() {
    document.getElementById('billbookSection').style.display = 'none';
    document.getElementById('calculatorSection').style.display = 'block';
});

// Billbook Logic
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

updateTotal();

// Calculator Logic
function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
