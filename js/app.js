'use strict';


let HTMLlocation = document.getElementById('cookie-locations');


// ******** GLOBALS ********


let openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



// ******** UTILITIES ********


function randomCustomers(min,max){
  // got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// ******** CONSTRUCTPR FUNCTIONS ********

function StoreLocations(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.dailyCookieSold = 0;
  this.hourCookieSale = [];
};


// ******** OBJECT LITERALS ********
let seattle = new StoreLocations('Seattle', 23, 65, 6.3);
let tokyo = new StoreLocations('Tokyo', 3, 24, 1.2);
let dubai = new StoreLocations('Dubai', 11, 38, 3.7);
let paris = new StoreLocations('Paris', 20, 38, 2.3);
let lima = new StoreLocations('Lima', 2, 16, 4);

let globalStoreList = [seattle, tokyo, dubai, paris, lima];

// ******** TABLE ********

const tableEle = document.createElement('table');
salesSectionElement.appendChild(tableEle);

function renderHeader() {
  let head = document.createElement('head');
  let trEle = document.createElement('tr');
  let thEle = document.createElement('th');
  thEle.textContent = 'Store Location';
  trEle.appendChild(thEle);

  for (let i = 1; i < openHours.length; i++) {
    thEle = document.createElement('th');
    thEle.textContent = openHours[i];
    trEle.appendChild(thEle);
  }
  thEle = document.createElement('th');
  thEle.textContent = 'Daily Location Total';
  trEle.appendChild(thEle);
  head.appendChild(trEle);
  tableEle.appendChild(head);
};

fuction renderFooter() {
  let foot = document.createElement('tfoot');
  let trEle = document.createElement('tr');
  let thEle = document.createElement('th');
  let total;

  thEle.textContent = 'Totals';
  trEle.appendChild(thEle);

  for (let i = 0; i < globalStoreList.length; i++) {
    let total = 0
    for (let j = 0; j < globalStoreList[i].avgCookieSale.length; j++) {
      total += globalStoreList[i].avgCookieSale[j];
      return total
    }
  }
  for (let i = 0; i < storeHours.length; i++) {
    thEle = document.createElement('th');
    thEle.textContent = total;
    trEle.appendChild(thEle);
  }
  thEle = document.createElement('th');
  thEle.textContent = total;
  trEle.appendChild(trEle);
  foot.appendChild(trEle);
  tableEle.appendChild(foot);

};


// ******** PROTOTYPE ********

StoreLocations.prototype.getCookies = function () {
  for (let i = 0; i < openHours.length; i++) {
    let hourlCust = randomCustomers(this.minCust, this.maxCust);
    let hourlyCookies = Math.floor(hourlyCust * this.avgCookieSale);
    this.hourCookieSale.push(hourlyCookies);
    this.dailyCookieSold += hourlyCookies;
  }
};

StoreLocations.prototype.render = function () {
  Const trEle = document.createElement('tr');
  tableEle.appendChild(trEle);
  const thEle = document.createElement('th');
  trEle.appendChild(thEle);
  thEle.textContent = this.name;
  for (let i = 1; i <this.hourCookieSale.length; i++) {
    const tdEle = document.createElement('td');
    trEle.appendChild(tdEle);
    tdEle.textContent = this.hourCookieSale[i];
  }
  let tdEle = document.createElement('td');
  tdEle.textContent = `Total: ${this.dailyCookieSold}`;
  trEle.appendChild(tdEle);
};

// ******** EXECUTABLE CODE ********

seattle.getCookies();
seattle.render();
tokyo.getCookies();
tokyo.render();
dubai.getCookies();
dubai.render();
paris.getCookies();
paris.render();
lima.getCookies();
lima.render();
renderHeader();
renderFooter();

















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



