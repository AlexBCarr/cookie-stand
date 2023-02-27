'use strict';




// ******** GLOBALS ********


let openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieLocation = document.getElementById('cookie-locations');

let tableEle = document.createElement('table');
cookieLocation.appendChild(tableEle);

let myForm = document.getElementById('my-form');





// ******** UTILITIES ********


function randomCustomers(min,max){
  // got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ******** CONSTRUCTPR FUNCTIONS ********

function StoreLocations(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.dailyCookieSold = 0;
  this.hourCookieSale = [];
}


// ******** OBJECT LITERALS ********
let seattle = new StoreLocations('Seattle', 23, 65, 6.3);
let tokyo = new StoreLocations('Tokyo', 3, 24, 1.2);
let dubai = new StoreLocations('Dubai', 11, 38, 3.7);
let paris = new StoreLocations('Paris', 20, 38, 2.3);
let lima = new StoreLocations('Lima', 2, 16, 4);

let globalStoreList = [seattle, tokyo, dubai, paris, lima];




function renderAll(){
  for (let i = 0; i < globalStoreList.length; i++) {
    globalStoreList[i].randomCustomers();
    globalStoreList[i].getCookies();
    globalStoreList[i].render();
  }
}
// ******** TABLE ********


function tableHeader() {
  let trEle = document.createElement('tr');
  tableEle.appendChild(trEle);

  let thEle = document.createElement('th');
  trEle.appendChild(thEle);

  for (let i = 1; i < openHours.length; i++) {
    let tdEle = document.createElement('td');
    tdEle.textContent = openHours[i];
    trEle.appendChild(tdEle);
  }
  let td2Ele = document.createElement('td');
  td2Ele.textContent = 'Daily Location Total';
  trEle.appendChild(td2Ele);

}

function tableFooter() {
  let tFoot = document.createElement('tfoot');
  tableEle.appendChild(tFoot);

  let fRow = document.createElement('tr');
  tFoot.appendChild(fRow);
  let fCell = document.createElement('td');
  fCell.textContent = 'Totals';

  fRow.appendChild(fCell);

  let grandTotal = 0;
  for (let i = 0; i < openHours.length; i++) {
    let total = 0;
    for (let j = 0; j < globalStoreList.length; j++) {
      total += globalStoreList[j].avgCookieSale[i];
      grandTotal += globalStoreList[j].avgCookieSale[i];
    }
    let totalEle = document.createElement('td');
    totalEle.textContent = total;
    fRow.appendChild(totalEle);
  }
  let grandTotalCell = document.createElement('td');
  grandTotalCell.textContent = grandTotal;
  fRow.appendChild(grandTotalCell);
  console.log(grandTotal);

}


// ******** PROTOTYPE ********

StoreLocations.prototype.randomCustomers = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

StoreLocations.prototype.getCookies = function () {
  for (let i = 0; i < openHours.length; i++) {
    let hourlyCookies = Math.floor(this.hourCookieSale * this.avgCookieSale);
    this.hourCookieSale.push(hourlyCookies);
    this.dailyCookieSold += hourlyCookies;
  }
};

StoreLocations.prototype.render = function () {
  let trEle = document.createElement('tr');
  tableEle.appendChild(trEle);

  let thEle = document.createElement('th');
  thEle.textContent = this.name;
  trEle.appendChild(thEle);

  for (let i = 1; i <this.hourCookieSale.length; i++) {
    let tdEle = document.createElement('td');
    tdEle.textContent = this.hourCookieSale[i];
    trEle.appendChild(tdEle);

  }
  let td2Ele = document.createElement('td');
  td2Ele.textContent = this.dailyCookieSold;
  trEle.appendChild(td2Ele);
};

// ******** FORM HANDLING ********

function handleFormSubmit(event) {
  event.preventDefault();
  console.log('Form Submit');
  let storeName = event.target.storeName.value;
  let minimumCust = +event.target.minimumCust.value;
  let maximumCust = +event.target.maximumCust.value;
  let custPurchases = +event.target.custPurchases.value;


  console.log(storeName,minimumCust,maximumCust,custPurchases);
  let newUserStore = new StoreLocations(storeName,minimumCust,maximumCust,custPurchases);

  document.querySelector('tFoot').remove();
  console.dir(tableEle);


  newUserStore.randomCustomers();
  newUserStore.getCookies();
  newUserStore.render();

  StoreLocations.push(newUserStore);
  tableFooter();
  myForm.request();



}

// ******** EXECUTABLE CODE ********

console.log(StoreLocations);
randomCustomers();
tableHeader();
renderAll();
tableFooter();

myForm.addEventListener('submit', handleFormSubmit);

// randomCustomers()

// tableEle();
// seattle.getCookies();
// seattle.render();
// tokyo.getCookies();
// tokyo.render();
// dubai.getCookies();
// dubai.render();
// paris.getCookies();
// paris.render();
// lima.getCookies();
// lima.render();
// tableHeader();
// tableFooter();


















// ******** OBJECT LITERALS ********


// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   cookiesCustPerHour: [],
//   cookiesSoldPerHour: [],
//   dailySoldTotal: 0,

//   setCustomersPerHour() {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesCustPerHour.push(randomCustomers(this.minCust, this.maxCust));
//     }
//   },

//   setCookiesPerHour() {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesSoldPerHour.push(Math.floor(this.cookiesCustPerHour[i] * this.avgCookieBought));
//     }
//   },

//   setCookiesTotal: function() {
//     for (let i = 0; i < hours.length; i++) {
//       this.dailySold += this.cookieSoldPerHour[i];
//     }
//   },

//   render() {
//     this.setCustomersPerHour();
//     this.setCookiesPerHour();
//     this.setCookiesTotal();
//     let articleElem = document.createElement('article');
//     HTMLlocation.appendChild(articleElem);
//     // h2
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);
//     //ul
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     //li
//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     //li = total
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
//     articleElem.appendChild(liElem);

//   },


// };

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesCustPerHour: [],
//   cookiesSoldPerHour: [],
//   dailySoldTotal: 0,

//   setCookiesPerHour() {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesSoldPerHour.push(Math.floor(this.cookiesCustPerHour[i] * this.avgCookieBought));
//     }
//   },


//   setCustomersPerHour() {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesCustPerHour.push(randomCustomers(this.minCust, this.maxCust));
//     }
//   },

//   setCookiesTotal: function() {
//     for (let i = 0; i < hours.length; i++) {
//       this.dailySold += this.cookieSoldPerHour[i];
//     }
//   },

//   render() {
//     this.setCustomersPerHour();
//     this.setCookiesPerHour();
//     this.setCookiesTotal();
//     let articleElem = document.createElement('article');
//     HTMLlocation.appendChild(articleElem);
//     // h2
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);
//     //ul
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     //li
//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     //li = total
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
//     articleElem.appendChild(liElem);

//   },



// };

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   cookiesCustPerHour: [],
//   cookiesSoldPerHour: [],
//   dailySoldTotal: 0,

//   setCookiesPerHour() {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesSoldPerHour.push(Math.floor(this.cookiesCustPerHour[i] * this.avgCookieBought));
//     }
//   },


//   setCustomersPerHour() {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesCustPerHour.push(randomCustomers(this.minCust, this.maxCust));
//     }
//   },

//   setCookiesTotal: function() {
//     for (let i = 0; i < hours.length; i++) {
//       this.dailySold += this.cookieSoldPerHour[i];
//     }
//   },

//   render() {
//     this.setCustomersPerHour();
//     this.setCookiesPerHour();
//     this.setCookiesTotal();
//     let articleElem = document.createElement('article');
//     HTMLlocation.appendChild(articleElem);
//     // h2
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);
//     //ul
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     //li
//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     //li = total
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
//     articleElem.appendChild(liElem);

//   },



// };

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   cookiesCustPerHour: [],
//   cookiesSoldPerHour: [],
//   dailySoldTotal: 0,

//   setCookiesPerHour() {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesSoldPerHour.push(Math.floor(this.cookiesCustPerHour[i] * this.avgCookieBought));
//     }
//   },


//   setCustomersPerHour() {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesCustPerHour.push(randomCustomers(this.minCust, this.maxCust));
//     }
//   },

//   setCookiesTotal: function() {
//     for (let i = 0; i < hours.length; i++) {
//       this.dailySold += this.cookieSoldPerHour[i];
//     }
//   },

//   render() {
//     this.setCustomersPerHour();
//     this.setCookiesPerHour();
//     this.setCookiesTotal();
//     let articleElem = document.createElement('article');
//     HTMLlocation.appendChild(articleElem);
//     // h2
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);
//     //ul
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     //li
//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     //li = total
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
//     articleElem.appendChild(liElem);

//   },



// };

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesCustPerHour: [],
//   cookiesSoldPerHour: [],
//   dailySoldTotal: 0,

//   setCookiesPerHour() {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesSoldPerHour.push(Math.floor(this.cookiesCustPerHour[i] * this.avgCookieBought));
//     }
//   },


//   setCustomersPerHour() {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesCustPerHour.push(randomCustomers(this.minCust, this.maxCust));
//     }
//   },

//   setCookiesTotal: function() {
//     for (let i = 0; i < hours.length; i++) {
//       this.dailySold += this.cookieSoldPerHour[i];
//     }
//   },

//   render() {
//     this.setCustomersPerHour();
//     this.setCookiesPerHour();
//     this.setCookiesTotal();
//     let articleElem = document.createElement('article');
//     HTMLlocation.appendChild(articleElem);
//     // h2
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);
//     //ul
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     //li
//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     //li = total
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
//     articleElem.appendChild(liElem);

//   },



// };



// ******** EXECUTABLE CODE ********


// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();




