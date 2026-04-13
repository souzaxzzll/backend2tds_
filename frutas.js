//Lista ordenada de valores - ARRAY
const frutas = ["Maçã", "Banana", "Uva", "Laranja"];
//Índice =        0         1       2       3

console.log(frutas[0]);
console.log(frutas[3]);
console.log(frutas.length); //faz a contagem dos elementos dentro do array

frutas[1] = "Morango";
console.log(frutas);

frutas.push("Pêssego");
frutas.unshift("Abacate")
console.log(frutas);
console.log(frutas.length);