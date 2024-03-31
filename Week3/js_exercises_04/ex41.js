/*JavaScript – closures
The following exercise contains the following subjects:
● closures
Instructions
Without running the code below, explain in your own
words what the result of each block of code will be and
why.
Block 1 - variable 'b' is declared in global scope, inside func 'someFunction' declared func 'otherFunction' and then update 'b' and call 'otherFunction'.
we assign 'someFunction' with parameter '9' to 'firstResult' variable, and 'firstResult' with parameter '2' to var 'result' 
var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);*/

/*Block 2 inside b2 we declared func 'a' then we reassign it to 10, 
outside the func 'b2' nothing is changed 'a' is '1'
var a = 1;
function b2() {
a = 10;
return;
function a() { }
}
b2();
console.log(a); */

/*Block 3 - we'll have '3 3 3' output becouse after timeout all log func will use the same variable i
let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
}
setTimeout(log, 100);
}*/