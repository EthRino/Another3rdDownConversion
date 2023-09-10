// Function to update the greeting
function updateGreeting() {
    const name = document.getElementById('nameInput').value;
    const greeting = document.getElementById('greeting');

    if (name) {
        greeting.textContent = `Hello, ${name}! Welcome to Another3rdDownConversion.`;
    } else {
        greeting.textContent = 'Hello! Please enter your name above.';
    }
}

// Function to compute the quantile for an array
function computeQuantile(arr, quantile) {
    // First, sort the array
    const sortedArr = arr.sort((a, b) => a - b);
    
    // Compute position
    const pos = (sortedArr.length - 1) * quantile;
    const base = Math.floor(pos);
    const rest = pos - base;

    if (sortedArr[base + 1] !== undefined) {
        return sortedArr[base] + rest * (sortedArr[base + 1] - sortedArr[base]);
    } else {
        return sortedArr[base];
    }
}

// Function to display the computed quantile
function displayQuantile() {
    // Sample data
    const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Compute 50th percentile (median)
    const result = computeQuantile(dummyData, 0.5);

    // Display the result
    document.getElementById('quantileResult').innerText = `The 50th percentile is: ${result}`;
}
