const num = [2, 3, 6];

const sum = num.reduce((acc, currValue) => {
  if (!acc[currValue]) {
    acc[currValue] = 0;
  }
  acc[currValue]++;
  return acc;
},
{});
 console.log(sum)