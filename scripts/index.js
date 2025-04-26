document.getElementById('triangleCalculate').addEventListener('click', function(){
    // let triangleFirstInputField = document.getElementById('triangleFirstInput');
    // let firstInputValue = triangleFirstInputField.value

    let first = firstInput('triangleFirstInput');
    let second = secondInput('triangleSecondInput');
    
    let result = 0.5 * first * second;
    setInnerText('triangleCalculation',result);
})

document.getElementById('rectangleCalculate').addEventListener('click', function(){
    let firstField = firstInput('rectangleFirstInput');
    let secondField = secondInput('rectangleSecondInput')
    
    let result = firstField * secondField;
    setInnerText('rectangleCalculation',result);
})
document.getElementById('parallelogramCalculate').addEventListener('click', function(){
    let firstField = firstInput('parallelogramFirstInput');
    let secondField = secondInput('parallelogramSecondInput')
    
    let result = firstField * secondField;
    setInnerText('parallelogramCalculation',result);
})
document.getElementById('rhombusCalculate').addEventListener('click', function(){
    let firstField = firstInput('rhombusFirstInput');
    let secondField = secondInput('rhombusSecondInput')
    
    let result = 0.5* firstField * secondField;
    setInnerText('rhombusCalculation',result);
})
document.getElementById('pentagonCalculate').addEventListener('click', function(){
    let firstField = firstInput('pentagonFirstInput');
    let secondField = secondInput('pentagonSecondInput')
    
    let result = 0.5* firstField * secondField;
    setInnerText('pentagonCalculation',result);
})
// document.getElementById('ellipseCalculate').addEventListener('click', function(){
//     let firstField = firstInput('ellipseFirstInput');
//     let secondField = secondInput('ellipseSecondInput')
    
//     let result = 3.1416 * firstField * secondField;
//     setInnerText('ellipseCalculation',result);
// })
document.getElementById('ellipseCalculate').addEventListener('click', function(){
    let firstField = firstInput('ellipseFirstInput');
    let secondField = secondInput('ellipseSecondInput')
    
    let result = 3.1416 * firstField * secondField;
    setInnerText('ellipseCalculation',result);
})
