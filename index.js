let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

const result = document.getElementById("result");

document.getElementById("somar").onclick = function() {
    let soma = num1.valueAsNumber+num2.valueAsNumber;
    console.log(soma);

    result.innerHTML = soma;
}

/*
function test(result){
    result.innerHTML = soma;
    console.log(result);
}*/