/*Exercise 6: Promise all
Create "resolveImmediate" that resolves immediately to a number
Create "resolveDelayed" that resolves to a number after 2 seconds
`fetchX()` should return a promise that is resolved to 25 immediately
and `fetchY()` should return a promise that is resolved after 2 seconds to 17
combine(resolveImmediate(), resolveDelayed())
.then((sum) => {
console.log(sum);
});*/

function resolveImmediate() {
  return Promise.resolve(25);
}

function resolveDelayed() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(17);
    }, 2000);
  });
}

function combine(prmX, prmY) {
  return Promise.all([prmX, prmY]).then((values) => {
    return values[0] + values[1];
  });
}

combine(resolveImmediate(), resolveDelayed()).then((sum) => {
  console.log(sum);
});
