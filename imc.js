//Calculadora de IMC

let nome = "City Boy";
let peso = "67";
let altura = "1,99";

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
};

let resultado = calcularIMC(peso, altura)
console.log(`IMC de ${nome}: ${resultado}`);