'use strict';










// ******** GLOBALS ********

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 

let locationSection = document.getElementById('cookie-locations');

console.dir(locationSection);


// ******** UTILITIES ********

function custCount(min,max){
  // got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
  
}

// ******** OBJECT LITERALS ********
let seattle = {
  name: 'Seattle'
  minCust: 23
  maxCust: 65
  avgCookieBought: 6.3
  cookieCust: function(){
    this.minCust, this.maxCust = '${custCount(23,65)} customers'
  }

}; 

let tokyo = {
  name: 'Tokyo'
  minCust: 3
  maxCust: 24
  avgCookieBought: 1.2
  cookieBought: []


}; 

let dubai = {
  name: 'Dubai'
  minCust: 11
  maxCust: 38
  avgCookieBought: 3.7
  cookieBought: []


}; 

let paris = {
  name: 'Paris'
  minCust: 20
  maxCust: 38
  avgCookieBought: 2.3
  cookieBought: []


}; 

let lima = {
  name: 'Lima'
  minCust: 2
  maxCust: 16
  avgCookieBought: 4.6
  cookieBought: []


}; 


// ******** EXECUTABLE CODE ********
