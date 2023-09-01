// Get the display element
const display = document.getElementById("display");

// Function to update the display
function updateDisplay(value) {
    display.value = value;
}

// Function to perform calculations
function calculate() {
    try {
        const result = eval(display.value);
        updateDisplay(result);
    } catch (error) {
        updateDisplay("Error");
    }
}

// Event listeners for calculator buttons
// You need to add event listeners for each button to update the display accordingly

// Example for the "=" button:
document.getElementById("equals").addEventListener("click", calculate);
