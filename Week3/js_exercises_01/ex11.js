/*The following exercise contains the following subjects:
● Order Of Operation
● If statements
Instructions
John and Mike both play basketball on different teams. In the
latest 3 games, John's team scored 89, 120, and 103 points,
while Mike's team scored 116, 94, and 123 points.
1. Calculate the average score for each team.
2. Decide which team wins on average (highest average
score), and print the winner to the console. Also include
the average score in the output.
3. Then change the scores to show different winners. Don't
forget to take into account that there might be a draw (the
same average score).
4. EXTRA: Mary also plays basketball, and her team scored
97, 134, and 105 points. Like before, log the average
winner to the console.
5. Like before, change the scores to generate different
winners, keeping in mind there might be draws.*/

function arraySum(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
   return sum
}

const johnScores = [89, 120, 103];
const mikeScores = [116, 94, 123];
const maryScores = [97, 134, 105];

let johnAverageScore = arraySum(johnScores)/johnScores.length
let mikeAverageScore = arraySum(mikeScores)/mikeScores.length
let maryAverageScore = arraySum(maryScores)/maryScores.length

if (johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore) {
   console.log("The winner is John! His average score is: " + johnAverageScore.toFixed(0))
} else if (mikeAverageScore > maryAverageScore && mikeAverageScore > johnAverageScore) {
   console.log("The winner is Mike! His average score is: " + mikeAverageScore.toFixed(0))
} else if (maryAverageScore > mikeAverageScore && maryAverageScore > johnAverageScore.toFixed(0)) {
   console.log("The winner is Mary! Her average score is: " + maryAverageScore)
} else {
   console.log("It's a draws! Average score is: " + johnAverageScore)
}
 
