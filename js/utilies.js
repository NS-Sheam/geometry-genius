let serial = 0;
function gentInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputValueString = input.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
};
function multiply(value1, value2) {
    const multiplyingValue = value1 * value2;
    return multiplyingValue;
};
function multiplyingValueWithHalf(value1, value2) {
    const multiplyingValue = 0.5 * value1 * value2;
    return multiplyingValue;
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
});
document.getElementById('rhombus-btn').addEventListener('click', function (event) {
    const shapeName = event.target.parentNode.children[1].innerText;
    const diagonal1 = gentInputValue('diagonal2');
    const diagonal2 = gentInputValue('diagonal2');
    const multiplyValue = multiplyingValueWithHalf(diagonal1, diagonal2);
    if (isNaN(diagonal1) || isNaN(diagonal2)) {
        alert("Provide data correctly");
        return;
    }
    serial+=1;
    addOnCalcutionArea(shapeName, multiplyValue, serial);
});

function addOnCalcutionArea(shapeName, value, serial) {
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="px-5">${serial}<span>.</span></td>
    <td class="px-5">${shapeName}</td>
    <td class="px-5">${value.toFixed(2)}<span>cm<sup>2</sup></span></td>
    <td class="px-5">
    <button class="my-2 px-2 py-3 bg-[#1090D8] rounded-lg text-white font-bold">Convert to m<sup>2</sup></button>
    </td>
    `;
    tableContainer.appendChild(tr);
};
