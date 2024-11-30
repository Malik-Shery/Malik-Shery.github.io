function showBillbook() {
    document.getElementById("billbook").style.display = "block";
    document.getElementById("calculator").style.display = "none";
}

function showCalculator() {
    document.getElementById("calculator").style.display = "block";
    document.getElementById("billbook").style.display = "none";
}

function updateTotal() {
    const rows = document.querySelectorAll("#billbook table tbody tr");
    let total = 0;

    rows.forEach((row, index) => {
        if (index < rows.length - 1) {
            const quantity = parseFloat(row.querySelector(".quantity").value) || 0;
            const rate = parseFloat(row.querySelector(".rate").value) || 0;
            const value = quantity * rate;

            row.querySelector(".value").textContent = value.toFixed(2);
            total += value;
        }
    });

    document.getElementById("totalValue").textContent = total.toFixed(2);
}

// Calculator Functions
let displayValue = "";

function appendNumber(number) {
    displayValue += number;
    document.getElementById("display").value = displayValue;
}

function appendOperator(operator) {
    displayValue += ` ${operator} `;
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}
