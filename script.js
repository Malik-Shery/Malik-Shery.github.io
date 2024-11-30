// Show Billbook
function showBillbook() {
    document.getElementById("billbook").style.display = "block";
    document.getElementById("calculator").style.display = "none";
    generateBillbookRows();
}

// Show Calculator
function showCalculator() {
    document.getElementById("billbook").style.display = "none";
    document.getElementById("calculator").style.display = "block";
}

// Generate 40 rows dynamically for the Billbook
function generateBillbookRows() {
    const billbookBody = document.getElementById("billbook-body");
    if (!billbookBody) {
        console.error("Billbook body element not found.");
        return;
    }

    billbookBody.innerHTML = ""; // Clear existing rows

    for (let i = 0; i < 40; i++) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><input type="number" class="input-box" oninput="updateTotal(this)" /></td>
            <td><input type="text" class="input-box" /></td>
            <td><input type="number" class="input-box" oninput="updateTotal(this)" /></td>
            <td><span class="value">0.00</span></td>
        `;

        billbookBody.appendChild(row);
    }

    console.log("40 rows have been generated successfully.");
}

// Update the total value
function updateTotal(input) {
    const row = input.closest("tr");
    const quantity = row.querySelector("td:nth-child(1) input").value || 0;
    const rate = row.querySelector("td:nth-child(3) input").value || 0;
    const valueCell = row.querySelector("td:nth-child(4) span");

    const value = parseFloat(quantity) * parseFloat(rate);
    valueCell.textContent = value.toFixed(2);

    calculateTotal();
}

// Calculate the total of all rows
function calculateTotal() {
    const valueCells = document.querySelectorAll("td:nth-child(4) span");
    let total = 0;

    valueCells.forEach((cell) => {
        total += parseFloat(cell.textContent) || 0;
    });

    document.getElementById("totalValue").textContent = total.toFixed(2);
}

// Calculator functionality
let displayValue = "";

function appendNumber(number) {
    displayValue += number;
    document.getElementById("display").value = displayValue;
}

function appendOperator(operator) {
    displayValue += operator;
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById("display").value = displayValue;
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}
