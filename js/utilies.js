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


