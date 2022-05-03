const rain = true;
const cold = false;

if(rain) {
  console.log("take Umbrella");
}

if(cold) {
  console.log("Take Scarf!");
}

// ***** if we wanted to do one thing in one case and another in all other cases?
const isCold = false;
let temperature = 35;
if (isCold) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Still a bit cold");
} else {
  console.log("Nice Weather");
}

//More conditional example
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
temperature = 45;
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}