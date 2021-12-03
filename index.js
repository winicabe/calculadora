let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

const result = document.getElementById("result");

document.getElementById("somar").onclick = function() {
    let soma = num1.valueAsNumber+num2.valueAsNumber;
    result.innerHTML = soma;
}

document.getElementById("subtrair").onclick = function() {
    let subtrair = num1.valueAsNumber-num2.value
    result.innerHTML = subtrair;
}

document.getElementById("multiplicar").onclick = function() {
    let subtrair = num1.valueAsNumber*num2.value
    result.innerHTML = subtrair;
}

document.getElementById("dividir").onclick = function() {
    let subtrair = num1.valueAsNumber/num2.value
    result.innerHTML = subtrair;
}