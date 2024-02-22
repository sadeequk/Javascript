// Create a function in js that takes a number as an argument.
//  Add up all the numbers from 1 to the number you passed to the function.
//  For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function sadeeq(number) {
  if (number <= 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 1; i <= number; i++) {   // lets in inside in forloop so it can be only ecessible in for loop
    sum += i;
  }

  return sum;
}

const result = sadeeq(6); 
console.log(result);

// This function first checks if the input number is non-positive, 
// and if so, it returns 0 since there are no numbers to sum in that case. 
// Otherwise, it initializes a variable sum to 0 and then uses a for loop to 
// add all numbers from 1 to the given number to the sum. Finally, it returns the computed sum