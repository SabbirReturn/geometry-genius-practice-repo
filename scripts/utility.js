function firstInput(elementById){
    let inputfield = document.getElementById(elementById);
    let input = inputfield.value
    return input;
}
function secondInput(elementById){
    let inputfield = document.getElementById(elementById);
    let input = inputfield.value
    return input;
}

function setInnerText(elementById,value){
    let text = document.getElementById(elementById);
    text.innerText = value;
}