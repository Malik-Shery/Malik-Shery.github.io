// script.js

function updateTotal() {
    let total = 0;
    // Select all rows with input fields
    const rows = document.querySelectorAll('#billTable tbody tr');

    rows.forEach((row, index) => {
        const quantityInput = row.querySelector('.quantity');
        const rateInput = row.querySelector('.rate');
        const valueSpan = row.querySelector('.value');
        
        const quantity = parseFloat(quantityInput.value) || 0;
        const rate = parseFloat(rateInput.value) || 0;

        const value = quantity * rate;
        valueSpan.textContent = value.toFixed(2);

        // Add to the total if it's not the last row (Total row)
        if (index < rows.length - 1) {
            total += value;
        }
    });

    // Update the total value
    document.getElementById('totalValue').textContent = total.toFixed(2);
}

// Call the updateTotal function initially to calculate the total even if no values are entered yet
updateTotal();
