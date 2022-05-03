function loopyLHL(num){
  if (num % 4 === 0 && num % 3 === 0) {
    console.log("Loopy Lighthouse")
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  }  
}
loopyLHL(108);