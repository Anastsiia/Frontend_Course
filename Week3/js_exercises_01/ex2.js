/* JavaScript – functions
The following exercise contains the following subjects:
● functions
Instructions
1. Write a function called ‘countryInfo’ which takes three
parameters: 'country', 'population' and 'capitalCity'. Based
on this input, the function returns a string with this format:
‘Spain has 47 million people and its capital city is Madrid’
2. Call this function 3 times, with input data for 3 different
countries. Store the returned values in 3 different
variables, and log them to the console. */

function countryInfo(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let israelInfo = countryInfo("Israel", 9.364, "Jerusalim");
let ukraineInfo = countryInfo("Ukraine", 43.79, "Kiev");
let russiaInfo = countryInfo("Rusiia", 143.4, "Moscow");

console.log(israelInfo);
console.log(ukraineInfo);
console.log(russiaInfo);