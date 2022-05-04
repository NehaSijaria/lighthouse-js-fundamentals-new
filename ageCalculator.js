function ageCalculator(name,birthYear, currentYear){
  return `${name} is ${currentYear -birthYear} years old.`
}

const result = ageCalculator("Suzie", 1983, 2015);
const result1 = console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(result);
