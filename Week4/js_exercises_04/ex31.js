/* JavaScript – functions
The following exercise contains the following subjects:
● Debugging
Instructions
# Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!
What is wrong with this code?
1. First, find the line that contains the problem. Write it down.
getSum([1,2,3][5,66,23]);   
const sum = 0;
2. Which debug method did you use to find the bug?
debug console & "run and debug" in vs code
3. Explain the bug in your own words.
getSum([1,2,3][5,66,23]);  - we need to send 2 arrays in this func, so wrong calling of the func makes our arrays undefined
const sum = 0; - we can't change constant variable
4. Fix the code and submit it all.
*/

function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    console.log(sum)
    }
    getSum([1,2,3],[5,66,23]);
