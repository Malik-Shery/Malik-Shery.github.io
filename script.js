// Toggle sections
document.getElementById("showBillbook").onclick = () => {
    document.getElementById("billbookSection").style.display = "block";
    document.getElementById("calculatorSection").style.display = "none";
};

document.getElementById("showCalculator").onclick = () => {
    document.getElementById("calculatorSection").style.display = "block";
    document.getElementById("billbookSection").style.display = "none";
};

// Update total in Billbook
function updateTotal() {
    let total = 0;
    const rows = document.querySelectorAll("#billTable tbody tr");

    rows.forEach(row => {
        const quantity = parseFloat(row.querySelector(".quantity").value) || 0;
        const rate = parseFloat(row.querySelector(".rate").value) || 0;
        const value = quantity * rate;
        row.querySelector(".value").textContent = value.toFixed(2);
        total += value;
    });

    document.getElementById("totalValue").textContent = total.toFixed(2);
}

// Calculator functionality
let calcDisplay = "";

function press(key) {
    calcDisplay += key;
    document.getElementById("calcDisplay").value = calcDisplay;
}

function calculate() {
    try {
        calcDisplay = eval(calcDisplay).toString();
        document.getElementById("calcDisplay").value = calcDisplay;
    } catch {
        document.getElementById("calcDisplay").value = "Error";
        calcDisplay = "";
    }
}

function clearDisplay() {
    calcDisplay = "";
    document.getElementById("calcDisplay").value = "";
}
