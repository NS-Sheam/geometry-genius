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
    if (value1 < 0 || value2 < 0) {
        alert("Input cannot be negative number");
        multiplyingValueFloat = '';
        return;
    }
    return multiplyingValueFloat;
};
function multiplyingValueWithHalf(value1, value2) {
    const multiplyingValue = 0.5 * value1 * value2;
    const multiplyingValueFloat = multiplyingValue.toFixed(2);
    return multiplyingValueFloat;
};
function addOnCalcutionArea(shapeName, value, serial) {
    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="px-2 text-xs">${serial}<span>.</span></td>
    <td class="px-2 text-xs">${shapeName}</td>
    <td class="px-2 text-xs"><span>${value}</span><span>cm</span><sup>2</sup></td>
    <td class="px-2 text-xs">
    <button class="meter-btn my-2 px-2 py-3 bg-[#1090D8] rounded-lg text-white font-bold flex items-center"><p>Convert to m</p><sup>2</sup></button>
    </td>
    `;
    tableContainer.appendChild(tr);
    // meter conversion button code 
    const meterBtns = document.querySelectorAll('.meter-btn');
    for (const meterBtn of meterBtns) {
        meterBtn.addEventListener('click', function(event){
            meter = centiToMeter(value);
            meterBtn.parentNode.parentNode.children[2].children[0].innerText = meter.toFixed(2);
            meterBtn.parentNode.parentNode.children[2].children[1].innerText = 'm';
            event.target.innerText = "Converted to m";
        })
    }
};
// Centimeter to meter convertion
function centiToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
};


