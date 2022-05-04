function howManyHundreds(number){
if(number<100){
  return 0;
}
if(number>100){
  // let modulo = number % 100;
  // let hundereds = number- modulo;
  // return hundereds;
  // Or
  let count = Math.floor(number / 100);
  return count;
}
}

const result = howManyHundreds(578);
console.log(result);