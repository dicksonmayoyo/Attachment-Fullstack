const display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(document.getElementById('display').value);
    } catch {
        display.value = 'Error';
    }
}

