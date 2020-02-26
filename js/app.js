'use strict';


var sum =0;
var totalCustperHour= [];
var location1 = {
  hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  name : 'seatle',
  minCustomer: 23,
  maxCustomer: 65,
  Avgcookie : 6.3 ,

  getNumofcust : function(){
    for (var i = 0; i < this.hours.length; i++) {
      totalCustperHour.push(getNumcust(this.minCustomer,this.maxCustomer));
      sum+=totalCustperHour[i];
      console.log(totalCustperHour[i]);
    }
    console.log(sum);

  },

  render : function(){
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = location1.name;

    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < this.hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hours[i]}    :     ${totalCustperHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `sum ${sum}`;

  }
};

location1.getNumofcust();
location1.render();
var location2 = {
  hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  name : 'Tokyo',
  minCustomer: 3,
  maxCustomer:24,
  Avgcookie :1.2,

  getNumofcust : function(){
    for (var i = 0; i < this.hours.length; i++) {
      totalCustperHour.push(getNumcust(this.minCustomert,this.maxCustomer));
      sum+=totalCustperHour[i];
      console.log(totalCustperHour[i]);
    }
  },
  render : function(){
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h3El = document.createElement('h3');
    articleEl.appendChild(h3El);
    h3El.textContent = location2.name;

    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < this.hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hours[i]}   :    ${totalCustperHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `sum ${sum}`;

  }
};

location2.getNumofcust();
location2.render();

var location3 = {
  hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  name : 'Dubai',
  minCustomer: 11,
  maxCustomer:38,
  Avgcookie :3.7,

  getNumofcust : function(){
    for (var i = 0; i < this.hours.length; i++) {
      totalCustperHour.push(getNumcust(this.minCustomert,this.maxCustomer));
      sum+=totalCustperHour[i];
      console.log(totalCustperHour[i]);
    }
  },
  render : function(){
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h3El = document.createElement('h3');
    articleEl.appendChild(h3El);
    h3El.textContent = location3.name;

    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < this.hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hours[i]}   :    ${totalCustperHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `sum ${sum}`;

  }
};

location3.getNumofcust();
location3.render();



var location4 = {
  hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  name : 'Paris',
  minCustomer: 20,
  maxCustomer:38,
  Avgcookie :2.3,

  getNumofcust : function(){
    for (var i = 0; i < this.hours.length; i++) {
      totalCustperHour.push(getNumcust(this.minCustomert,this.maxCustomer));
      sum+=totalCustperHour[i];
      console.log(totalCustperHour[i]);
    }
  },
  render : function(){
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h4El = document.createElement('h4');
    articleEl.appendChild(h4El);
    h4El.textContent =location4.name;

    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < this.hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hours[i]}    :    ${totalCustperHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `sum ${sum}`;


  }
};

location4.getNumofcust();
location4.render();


var location5 = {
  hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  name : 'Lima',
  minCustomer: 20,
  maxCustomer:38,
  Avgcookie :2.3,

  getNumofcust : function(){
    for (var i = 0; i < this.hours.length; i++) {
      totalCustperHour.push(getNumcust(this.minCustomert,this.maxCustomer));
      sum+=totalCustperHour[i];
      console.log(totalCustperHour[i]);
    }
  },
  render : function(){
    var container = document.getElementById('cookie-stand');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    var h5El = document.createElement('h5');
    articleEl.appendChild(h5El);
    h5El.textContent = location5 .name;

    var ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (var i = 0; i < this.hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hours[i]} :    ${totalCustperHour[i]} cookies`;
      ulEl.appendChild(liEl);
    }
    liEl.textContent = `sum ${sum}`;


  }
};
location5.getNumofcust();
location5.render();

function getNumcust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
