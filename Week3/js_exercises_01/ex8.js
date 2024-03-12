/*The following exercise contains the following subjects:
● functions
Instruction
1. The world population is 7900 million people. Create
a function declaration called 'percentageOfWorld1'
which receives a 'population' value, and returns the
percentage of the world population that the given
population represents. For example, China has
1441 million people, so it's about 18.2% of the world
population.
2. To calculate the percentage, divide the given
'population' value by 7900 and then multiply by 100.
3. Call 'percentageOfWorld1' for 3 populations of
countries of your choice, store the results into
variables and log them to the console.
4. Create a function expression that does the exact
same thing, called 'percentageOfWorld2', and also
call it with 3 country populations (can be the same
populations)*/

function percentageOfWorld1(population) {
    const worldPopulation = 7900;
    return population*100/worldPopulation;
}

let chinaPopulation = percentageOfWorld1(1441)
let israelPopulation = percentageOfWorld1(9)
let russiaPopulation = percentageOfWorld1(144)

console.log(chinaPopulation.toFixed(1))
console.log(israelPopulation.toFixed(1))
console.log(russiaPopulation.toFixed(1))

const percentageOfWorld2 = (population) => population*100/7900

let ukrainaPopulation = percentageOfWorld1(43)
let italyPopulation = percentageOfWorld1(59)
let usaPopulation = percentageOfWorld1(331)

console.log(ukrainaPopulation.toFixed(1))
console.log(italyPopulation.toFixed(1))
console.log(usaPopulation.toFixed(1))