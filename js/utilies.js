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
    addOnCalcutionArea();
});
function addOnCalcutionArea(shapeName, value) {
    
}