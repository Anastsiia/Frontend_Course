/* The following exercise contains the following subjects:
● functions
Instructions
Write a function that calculates the circle area by a given radius
as an argument. Print the area as it is calculated and then print
it rounded to two decimal places. */

function calcRadius(radius) {
    const area = Math.PI * radius * radius;
    
    console.log("Area of the circle: " +  area);
    console.log("Rounded area: ", area.toFixed(2));
}

let radius = 5;
calcRadius(radius);