document.getElementById('triangleCalculate').addEventListener('click', function(){
    // let triangleFirstInputField = document.getElementById('triangleFirstInput');
    // let firstInputValue = triangleFirstInputField.value

    let first = firstInput('triangleFirstInput');
    let second = secondInput('triangleSecondInput');
    
    let result = 0.5 * first * second;
    setInnerText('triangleCalculation',result);
})