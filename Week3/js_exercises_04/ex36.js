/* JavaScript – scope & hoisting
The following exercise contains the following subjects:
● scope
● hoisting
Instructions
Without running the code below, explain in your own words
what the result of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix
them.
*/

/*Block 1 
in this block funcA will log variable 'a' - undefined - to solve it we can move line with initialization 'a' before
than funcA logging returned value from func 'foo', and func 'foo' return '2'*/
function funcA() {
    //var a = 1; moving this line here we'll solve the problem with undefined
console.log(a);
console.log(foo());
var a = 1;
function foo() {
return 2;
}
}
funcA();

/*Block 2 
 on the first line we assign fullName variable 
then we crreate object 'obj' with properties: 'fullName' & 'prop' 
meanwhile 'prop' is also an object witch contains property 'fullName' and 'getFullName' method 
then we log into the console 'obj.prop.getFullName()' and well get 'Aurelio De Rosa', because we call method of nested object 'prop' 
var test = obj.prop.getFullName; - on this line we assign method getFullName to the var 'test'
and then get undefined in the consols logs cos we didn't refer to any specific obj which contains 'fullName' property. */
var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;
}
}
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

/* Block 3
 we declared variables 'a' and 'b' inside 'funcB' so var 'a' is inside a block scope and 'b' is a global var, cos there is no key word before 
 thats why we can see only var 'b' in our main */
function funcB() {
let a = b = 0;
a++;
return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

//Block 4
// second declaration override funcC, so we'll have console.log("2");
function funcC() {
console.log("1");
}
funcC();
function funcC() {
console.log("2");
}
funcC();

// //Block 5
//same as in block 3 d - is global, and e - is not 
function funcD1() {
d = 1;
}
funcD1();
console.log(d);
function funcD2() {
var e = 1;
}
funcD2();
console.log(e);

// Block 6 
// f - is global var, but  for first console.log this var doesnt exist yet
//so we'll see '1' only after inizialisation 'var f = 1;', when we call 'funcE'
function funcE() {
console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();