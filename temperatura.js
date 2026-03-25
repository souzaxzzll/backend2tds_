const cidade = "Curitiba";
const tempCelsius = 19;

const tempFahrenheit = tempCelsius * (9 / 5) + 32
const tempKelvin = tempCelsius + 273.15;
const variacaoDiaria = 26.3 - tempCelsius;

console.log(`A Temperatura em ${cidade} está ${tempCelsius}Cº`)
console.log(`\nCelsius: ${tempCelsius} Cº`);
console.log(`Fahreinheit: ${tempFahrenheit} Fº`);
console.log(`Kelvin: ${tempKelvin} Kº`);
console.log(`Variação prevista: ${variacaoDiaria}`);

