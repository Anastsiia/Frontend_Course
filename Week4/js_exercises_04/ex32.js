/* JavaScript – get sum
The following exercise contains the following subjects:
● find smallest
Instructions
# Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!
What is wrong with this code?
1. First, find the line that contains the problem. Write it down.
findSmalest(52,66, 2);
if (a > b > c)
} else if (a > c > b) {
2. Which debug method did you use to find the bug?
debug console + vs code debugger 
3. Explain the bug in your own words.
findSmalest(52,66, 2); - wrong call name
if (a > b > c) we can't use triple >, and we need to compare 'c' with other  
} else if (a > c > b) { - we need to compare 'a' with other variables to make sure that 'a' is the smallest to return it
4. Fix the code and submit it all.
*/
function findSmallest(a, b, c){
    if (a > c && b > c){
    return c;
    } else if (a < c && a < b) {
    return a;
    } else {
    return b;
    }
    }
console.log(findSmallest(52, 66, 2));