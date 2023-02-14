'use strict';


let HTMLlocation = document.getElementById('cookie-locations');


// ******** GLOBALS ********


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



// ******** UTILITIES ********


function randomCustomers(min,max){
  // got this from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ******** OBJECT LITERALS ********


let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesCustPerHour: [],
  cookiesSoldPerHour: [],
  dailySoldTotal: 0,

  setCustomersPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesCustPerHour.push(randomCustomers(this.minCust, this.maxCust));
    }
  },

  setCookiesPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.floor(this.cookiesCustPerHour[i] * this.avgCookieBought));
    }
  },

  setCookiesTotal: function() {
    for (let i = 0; i < hours.length; i++) {
      this.dailySold += this.cookieSoldPerHour[i];
    }
  },

  render() {
    this.setCustomersPerHour();
    this.setCookiesPerHour();
    this.setCookiesTotal();
    let articleElem = document.createElement('article');
    HTMLlocation.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    //ul
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    //li
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    //li = total
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
    articleElem.appendChild(liElem);

  },


};

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesCustPerHour: [],
  cookiesSoldPerHour: [],
  dailySoldTotal: 0,

  setCookiesPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.floor(this.cookiesCustPerHour[i] * this.avgCookieBought));
    }
  },


  setCustomersPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesCustPerHour.push(randomCustomers(this.minCust, this.maxCust));
    }
  },

  setCookiesTotal: function() {
    for (let i = 0; i < hours.length; i++) {
      this.dailySold += this.cookieSoldPerHour[i];
    }
  },

  render() {
    this.setCustomersPerHour();
    this.setCookiesPerHour();
    this.setCookiesTotal();
    let articleElem = document.createElement('article');
    HTMLlocation.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    //ul
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    //li
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    //li = total
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
    articleElem.appendChild(liElem);

  },



};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesCustPerHour: [],
  cookiesSoldPerHour: [],
  dailySoldTotal: 0,

  setCookiesPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.floor(this.cookiesCustPerHour[i] * this.avgCookieBought));
    }
  },


  setCustomersPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesCustPerHour.push(randomCustomers(this.minCust, this.maxCust));
    }
  },

  setCookiesTotal: function() {
    for (let i = 0; i < hours.length; i++) {
      this.dailySold += this.cookieSoldPerHour[i];
    }
  },

  render() {
    this.setCustomersPerHour();
    this.setCookiesPerHour();
    this.setCookiesTotal();
    let articleElem = document.createElement('article');
    HTMLlocation.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    //ul
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    //li
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    //li = total
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
    articleElem.appendChild(liElem);

  },



};

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesCustPerHour: [],
  cookiesSoldPerHour: [],
  dailySoldTotal: 0,

  setCookiesPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.floor(this.cookiesCustPerHour[i] * this.avgCookieBought));
    }
  },


  setCustomersPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesCustPerHour.push(randomCustomers(this.minCust, this.maxCust));
    }
  },

  setCookiesTotal: function() {
    for (let i = 0; i < hours.length; i++) {
      this.dailySold += this.cookieSoldPerHour[i];
    }
  },

  render() {
    this.setCustomersPerHour();
    this.setCookiesPerHour();
    this.setCookiesTotal();
    let articleElem = document.createElement('article');
    HTMLlocation.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    //ul
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    //li
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    //li = total
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
    articleElem.appendChild(liElem);

  },



};

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesCustPerHour: [],
  cookiesSoldPerHour: [],
  dailySoldTotal: 0,

  setCookiesPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.floor(this.cookiesCustPerHour[i] * this.avgCookieBought));
    }
  },


  setCustomersPerHour() {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesCustPerHour.push(randomCustomers(this.minCust, this.maxCust));
    }
  },

  setCookiesTotal: function() {
    for (let i = 0; i < hours.length; i++) {
      this.dailySold += this.cookieSoldPerHour[i];
    }
  },

  render() {
    this.setCustomersPerHour();
    this.setCookiesPerHour();
    this.setCookiesTotal();
    let articleElem = document.createElement('article');
    HTMLlocation.appendChild(articleElem);
    // h2
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);
    //ul
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    //li
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookieSoldPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    //li = total
    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.dailySoldTotal} cookies`;
    articleElem.appendChild(liElem);

  },



};



// ******** EXECUTABLE CODE ********


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();



