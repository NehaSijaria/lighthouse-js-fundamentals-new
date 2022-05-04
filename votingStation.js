// //
// ];
// ["Bright Lights Elementary", "Moose Mountain Community Centre"];

function chooseStations(stations) {
  let availableStn = []
  for (const st of stations){ 
    if(st[1] >= 20){
      if( st[2]==='school' || st[2]==='community centre')
     availableStn.push(st[0]);
    }
  } 
  return availableStn;
}

const finalStations = chooseStations([
  ["Moose Mountain Community Centre", 45, "community centre"],
  ["Big Bear Donair", 20, "school"],
  ["Bright Lights Elementary", 50, "restaurant"],
]);
console.log(finalStations);