/* The following exercise contains the following subjects:
● callback functions
Instructions
1. Write a function called ‘isString’ that receives 2 arguments,
a string and a callback function. The function checks that
the string is indeed a string. If the string is a string, pass
the string to a callback function that logs that string to the
console.
2. Create a function called ‘firstWordUpperCase’ that
receives 2 arguments, a string and a callback function.
The function will capitalize the first word in the sentence
and pass the string to a callback function which will create
dashes between the words.
3. Call the ‘firstWordUpperCase’ function with a callback of
your choice.
4. Create your own function that will receive from one of its
arguments a callback function*/

function firstWordUpperCase(str, func) {
    if (typeof(str) == 'string')
    {
        const strWithUpper = str.charAt(0).toUpperCase() + str.slice(1);
        func(strWithUpper);
        return
    }
    console.log("invalid");
}

function addDashes(str) {
    const dashedString = str.replace(/\s+/g, '-');
    console.log(dashedString);
}

function printSring (str) {
    console.log(str);
}

function isString(str, func) {
    if (typeof(str) == 'string')
    {
        func(str);
        return
    }
    console.log("invalid");
}

isString("dgdgd", printSring)
isString(3, printSring)
firstWordUpperCase("ggg hhh jjj kkk lll dddd", addDashes)
firstWordUpperCase(3, addDashes)


