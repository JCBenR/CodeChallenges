/**
 * Find itinerary from the given list of departure and arrival airports
 * 
 * 
 * Given a list of departure and arrival airports, find the itinerary in order. It may be assumed that departure is scheduled from every airport except the final destination, and each airport is visited only once, i.e., there are no cycles in the route.
 * 
 * 
 * Input:
 * HKG —> DXB
 *  FRA —> HKG
 * DEL —> FRA
 *  
 * Output: DEL —> FRA —> HKG —> DXB
 * 
 * 1. assign departures and arrivals to their own arrays
 * 2. find which departure isn't in arrivals: that's your starting point
 * 3. add the departure to the fullPath array
 * 4. find the subarray with the departure as index[0] from master array, and then the arrrival (index[1]) is the new departure.
 * 5. loop through finding the matches, adding to the fullPath as you go. When you hit one that doesn't match, that's your final destination
 * LAX —> DXB
DFW —> JFK
LHR —> DFW
JFK —> LAX
 */

let inputArray = [['HKG', 'DXB'],['FRA', 'HKG'], ['DEL', 'FRA']];
let inputArray2 = [['LAX', 'DXB'], ['DFW', 'JFK'], ['LHR', 'DFW'], ['JFK', 'LAX']];
let departures =[], arrivals = [];
let startingDestination;
let fullPath = [];

let findDeparture = (ins) => {
 //assign starts and ends
 ins.forEach(e => {
   departures.push(e[0]);
   arrivals.push(e[1]);
 })
 
 //find the starting destination
 departures.forEach(e => {
   if (!arrivals.includes(e)) {
     startingDestination = e;
   }  
 });
}

let findNextAirport = (departure) => {
  fullPath.push(departure);
  let arrival;
  inputArray.forEach(e => { //change this also
    if(e[0] === departure){
      arrival = e[1];
    } else return;
    findNextAirport(arrival);
  })   
}


findDeparture(inputArray);
findNextAirport(startingDestination);
console.log(fullPath);
