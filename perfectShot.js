const moves = ["north", "north", "west", "west", "north", "east", "north"];
//find coordinates based on moves
function finalPosition(moves) {
  let finalCoordinates = [0,0]
  let x=0;
  let y=0;
  //loop array and check at every move if coordinates are adding/substracting and update finalCoordinates accordingly 
  for (let i=0; i<= moves.length; i++){
    if (moves[i]==="north"){
      y += 1
      finalCoordinates[1] = y
    } 
    if (moves[i] === "west") {
      x -= 1;
      finalCoordinates[0] = x;
    } 
    if (moves[i] === "east") {
      x += 1;
      finalCoordinates[0] = x;
    } 
    if (moves[i] === "south") {
      y -= 1;
      finalCoordinates[1] = y;
    } 
  }
  return finalCoordinates;
}

const ans = finalPosition(moves);
console.log(ans);