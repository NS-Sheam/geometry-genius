// Triangle area calculation
document.getElementById('triangle-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const base = gentInputValue('triangle-base');
    const height = gentInputValue('triangle-height');
    const multiplyValue = multiplyingValueWithHalf(base, height);
    if (isNaN(base) || isNaN(height)) {
        alert("Provide both data correctly");
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
    document.getElementById('triangle-base').value = '';
    document.getElementById('triangle-height').value = '';
});
// Rectangle area calculation
document.getElementById('rectangle-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const width = gentInputValue('rectangle-width');
    const length = gentInputValue('rectangle-length');
    const multiplyValue = multiply(width, length);
    if (isNaN(width) || isNaN(length)) {
        alert("Provide both data correctly");
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
    document.getElementById('rectangle-width').value = '';
    document.getElementById('rectangle-length').value = '';
    
});
// Parallelogram area calculation
document.getElementById('parallelogram-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const base = gentInputValue('parallelogram-base');
    const height = gentInputValue('parallelogram-height');
    const multiplyValue = multiply(base, height);
    if (isNaN(base) || isNaN(height)) {
        alert("Provide both data correctly");
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
    document.getElementById('parallelogram-base').value = '';
    document.getElementById('parallelogram-height').value = '';
});
// Rhombus area calculation
document.getElementById('rhombus-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const diagonal1 = gentInputValue('diagonal1');
    const diagonal2 = gentInputValue('diagonal2');
    const multiplyValue = multiplyingValueWithHalf(diagonal1, diagonal2);
    if (isNaN(diagonal1) || isNaN(diagonal2)) {
        alert("Provide both data correctly");
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
    document.getElementById('diagonal1').value = '';
    document.getElementById('diagonal2').value = '';
});
// Pentagon area calculation
document.getElementById('pentagon-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const perimeter = gentInputValue('perimeter');
    const apothem = gentInputValue('apothem');
    const multiplyValue = multiplyingValueWithHalf(perimeter, apothem);
    if (isNaN(perimeter) || isNaN(apothem)) {
        alert("Provide both data correctly");
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
    document.getElementById('perimeter').value = '';
    document.getElementById('apothem').value = '';
    
});
// ellipse area calculation
document.getElementById('ellipse-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const axisA = gentInputValue('axis-a');
    const axisB = gentInputValue('axis-b');
    const multiplyValue = (Math.PI * axisA * axisB).toFixed(2);
    if (isNaN(axisA) || isNaN(axisB)) {
        alert("Provide both data correctly");
        return;
    }if (axisA < 0 || axisB < 0) {
        alert("Input cannot be negative number");
        multiplyingValueFloat = '';
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
    document.getElementById('axis-a').value = '';
    document.getElementById('axis-b').value = '';
    
});
// QNA window shifting
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'answer.html';
});
// Random hover function 
function generateRandomNumber() {
    let random = Math.round(Math.random() * 1000000);
    let randomString = random.toString();
    if (randomString.length === 6) {
        return '#' + randomString;
    }
    else {
        return generateRandomNumber();
    }
};
function color(card) {
    let color = generateRandomNumber();
    card.style.backgroundColor = color;
};