let serial = 0;
function gentInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputValueString = input.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
};
function multiply(value1, value2) {
    const multiplyingValue = value1 * value2;
    const multiplyingValueFloat = multiplyingValue.toFixed(2);
    return multiplyingValueFloat;
};
function multiplyingValueWithHalf(value1, value2) {
    const multiplyingValue = 0.5 * value1 * value2;
    const multiplyingValueFloat = multiplyingValue.toFixed(2)
    return multiplyingValueFloat;
};
function addOnCalcutionArea(shapeName, value, serial) {
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="px-5">${serial}<span>.</span></td>
    <td class="px-5">${shapeName}</td>
    <td class="px-5">${value}<span>cm<sup>2</sup></span></td>
    <td class="px-5">
    <button class="my-2 px-2 py-3 bg-[#1090D8] rounded-lg text-white font-bold">Convert to m<sup>2</sup></button>
    </td>
    `;
    tableContainer.appendChild(tr);
};
document.getElementById('triangle-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const base = gentInputValue('triangle-base');
    const height = gentInputValue('triangle-height');
    const multiplyValue = multiplyingValueWithHalf(base, height);
    if (isNaN(base) || isNaN(height)) {
        alert("Provide data correctly");
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
    document.getElementById('triangle-base').value = '';
    document.getElementById('triangle-height').value = '';
});
document.getElementById('rectangle-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const width = gentInputValue('rectangle-width');
    const length = gentInputValue('rectangle-length');
    const multiplyValue = multiply(width, length);
    if (isNaN(width) || isNaN(length)) {
        alert("Provide data correctly");
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
    document.getElementById('rectangle-width').value = '';
    document.getElementById('rectangle-length').value = '';
    
});
document.getElementById('pentagon-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const perimeter = gentInputValue('perimeter');
    const apothem = gentInputValue('apothem');
    const multiplyValue = multiply(perimeter, apothem);
    if (isNaN(perimeter) || isNaN(apothem)) {
        alert("Provide data correctly");
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
    document.getElementById('perimeter').value = '';
    document.getElementById('apothem').value = '';
    
});
document.getElementById('parallelogram-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const base = gentInputValue('parallelogram-base');
    const height = gentInputValue('parallelogram-height');
    const multiplyValue = multiply(base, height);
    if (isNaN(base) || isNaN(height)) {
        alert("Provide data correctly");
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
    document.getElementById('parallelogram-base').value = '';
    document.getElementById('parallelogram-height').value = '';
});
document.getElementById('rhombus-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const diagonal1 = gentInputValue('diagonal1');
    const diagonal2 = gentInputValue('diagonal2');
    const multiplyValue = multiplyingValueWithHalf(diagonal1, diagonal2);
    if (isNaN(diagonal1) || isNaN(diagonal2)) {
        alert("Provide data correctly");
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
    document.getElementById('diagonal1').value = '';
    document.getElementById('diagonal2').value = '';
});


