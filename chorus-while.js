const chorus = "Let's dance! - ";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus + repeat);
  repeat++;
}
console.log("Until the sun comes up!");
//while with if-block
const chorus1 = "Let's dance more! - ";
let repeat1 = 0;
while (repeat1 < 10) {
  if (repeat1 === 5) {
    console.log("*change key*");
  }
  console.log(chorus1 + repeat1);
  repeat1++;
}
console.log("Until the sun comes up again!");