const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")

let result = document.getElementById("result")

document.getElementById("somar").onclick = test

function test(){
    result.innerHTML = num1+num2;
    console.log("result")
}