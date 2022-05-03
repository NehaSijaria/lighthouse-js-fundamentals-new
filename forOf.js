const amounts = [61.0, 52.25, 112.99, 5.0];
//for..of
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log("Order total is: ", total);
//for Loop
let total1 = 0;
for (let i = 0; i < amounts.length; i++) {
  total1 += amounts[i];
}
console.log("Order total is: ", total1);
