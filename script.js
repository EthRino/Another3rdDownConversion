// Compute the value at a given quantile
function computeQuantile(array, quantile) {
    array.sort((a, b) => a - b);
    let index = Math.ceil(quantile * array.length) - 1;
    return array[index];
}

function computeAndDisplayQuantile() {
    let array = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
    let quantileValue = 0.95;
    let result = computeQuantile(array, quantileValue);

    let greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = "The " + (quantileValue * 100) + "th percentile is: " + result;

    // Add the 'visible' class to make the greeting fade in
    greetingElement.classList.add('visible');
}

// Function to generate a random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color of the page
function changeBackground() {
    document.body.style.backgroundColor = getRandomColor();
}
