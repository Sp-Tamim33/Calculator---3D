let outputDisplay = document.getElementById('display');


// Display Funtion
function display(num) {
    outputDisplay.value += num;
}

// Clear Function
function Clear() {
    outputDisplay.value = '';
}

// Delete one by one
function Delete() {
    outputDisplay.value = outputDisplay.value.slice(0, -1)
}

// Calculate Function
function calculate() {


    /*     if (outputDisplay) {
            outputDisplay.value = eval(outputDisplay.value)
        } */

    try {
        outputDisplay.value = eval(outputDisplay.value)
    }

    catch (err) {
        alert('Invalid')
    }


}