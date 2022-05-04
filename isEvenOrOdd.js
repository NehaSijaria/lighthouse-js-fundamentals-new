//Create a function to determine if a number is odd or not.
function isEvenOrOdd(num){
  if(num%2!==0){
    return num + " is Odd Number.";
  }
  if (num % 2 === 0) {
   return num + " is Even Number.";
  }
}

console.log(isEvenOrOdd(10));