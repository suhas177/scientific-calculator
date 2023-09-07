
function backspace() {
    const currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

function clearResult() {
    document.getElementById('result').value = '';
}

function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateFactorial() {
    try {
        const value = parseFloat(document.getElementById('result').value);
        if (!isNaN(value) && Number.isInteger(value) && value >= 0) {
            let factorial = 1;
            for (let i = 2; i <= value; i++) {
                factorial *= i;
            }
            document.getElementById('result').value = factorial;
        } else {
            document.getElementById('result').value = 'Invalid input';
        }
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
}


Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
}

function calculateResult() {
    try {
        const expression = document.getElementById('result').value;
        const result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error! Clear and proceed';
    }
}





