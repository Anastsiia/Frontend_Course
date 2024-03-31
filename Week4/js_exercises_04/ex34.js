/* JavaScript – average
The following exercise contains the following subjects:
● debugging
Instructions
# Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!
What is wrong with this code?
1. First find the line that contains the problem. Write it down.
var sum ;
} return sum ;
2. Which debug method did you use to find the bug?
vs code debugger + debug console
3. Explain the bug in your own words.
var sum ; - if we adding sth to undefined variable, so we need to initialize as '0' it before 
} return sum ; - to calculate average we need to divide sum by the number of elements
4. Fix the code and submit it all.
*/
function calcAverage (arr){
    var sum = 0;
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];
    } return sum/ arr .length;
    }
console.log(calcAverage ([ 85 , 90 , 92 ]));