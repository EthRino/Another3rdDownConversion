function computeQuantile(array, quantile) {
    if(!Array.isArray(array) || array.length === 0) return null;

    let sorted = [...array].sort((a, b) => a - b);
    let index = (quantile * (sorted.length - 1) + 1) | 0;
    let frac = (quantile * (sorted.length - 1) + 1) % 1;

    if (sorted[index + 1] !== undefined) {
        return sorted[index] + frac * (sorted[index + 1] - sorted[index]);
    } else {
        return sorted[index];
    }
}

function computeAndDisplayQuantile() {
    let sampleData = [1, 5, 7, 9, 12, 15, 16, 19, 20, 24, 25, 28, 30];
    let quantileValue = computeQuantile(sampleData, 0.95);
    
    document.getElementById('result').innerText = `The 95th percentile value is: ${quantileValue}`;
}

function changeBackground() {
    let colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#A633FF'];
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}
