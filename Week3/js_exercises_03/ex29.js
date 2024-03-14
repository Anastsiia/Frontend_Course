/* Write a function that has one argument, a positive integer.
Let's call it N.
The function should console log a step shape.
With N levels using the # character. Make sure the step has
spaces on the right-hand side if empty!
Note:
Examples:
steps(2)
‘# ‘
‘##’
steps(3)
‘# ‘
‘## ‘
‘###’
steps(4)
‘# ‘
‘## ‘
‘### ‘
‘####’
Notice that if each step is not populated by a step it should
consist of empty space. For example, if n = 3:
steps(3)
‘# ‘ ←-- 2 empty spaces
‘## ‘ ←-- 1 empty space
‘###’
Ninja:
You are not allowed to use the repeat method. Use 2 loops
instead*/

function printSteps(num) {
    if (typeof(num) != 'number' || num <= 0)
    {
        console.log("Invalid");
        return
    }

    for (let i = 1; i <= num; i++) {
        let str = "";
        for (let a = 0; a < num; a++) {
            if (a < i) {
                str += "#"
            } else {
                str += " "
            }
        }
        console.log(str);
    }
}

printSteps(4)


