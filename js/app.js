'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

function Locations(name, minCustmer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustmer = minCustmer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.sum = 0;
  this.totalCustperHour = 0;
}
Locations.prototype. getNumcust = function () {
  for (var i = 0; i < hours.length; i++) {
    // eslint-disable-next-line no-undef
    totalCustperHour.push(getNumcust(this.minCustomer, this.maxCustomer));
    // eslint-disable-next-line no-undef
    sum += totalCustperHour[i];
    // eslint-disable-next-line no-undef
    console.log(totalCustperHour[i]);
  }
  // eslint-disable-next-line no-undef
  console.log(sum);



  Locations.prototype.render = function () {
    var LocationsContainer = document.getElementById('cookie-stand');
    var tableEl = document.createElement('table');
    LocationsContainer.appendChild(tableEl);

    var thEl = document.createElement('th');
    thEl.textContent = '   ';
    tableEl.appendChild(thEl);
    for (var j = 0; j < hours.length; j++) {
      // eslint-disable-next-line no-unused-vars
      var th1El = document.createElement('th');
      th1El.textContent = hours[j];
      tableEl.appendChild(th1El);
    }
    var th2El = document.createElement('th');
    th2El.textContent = 'Daily Total';
    tableEl.appendChild(th2El);







    var tr1El = document.createElement('tr');
    tr1El.textContent = 'Seatle';
    tableEl.appendChild(tr1El);
    var tr2El = document.createElement('tr');
    tr2El.textContent = 'Tokyo';
    tableEl.appendChild(tr2El);
    var tr3El = document.createElement('tr');
    tr3El.textContent = 'Dubai';
    tableEl.appendChild(tr3El);
    var tr4El = document.createElement('tr');
    tr4El.textContent = 'paris';
    tableEl.appendChild(tr4El);
    var tr5El = document.createElement('tr');
    tr5El.textContent = 'lima';
    tableEl.appendChild(tr5El);

    var tr6El = document.createElement('tr');
    tr6El.textContent = 'sum';
    tableEl.appendChild(tr6El);


    var td1El = document.createElement('td');
    td1El.textContent = Locations.seattle;
    tr1El.appendChild(td1El);
    var td2El = document.createElement('td');
    td2El.textContent = Locations.goodWithOtherCats;
    tr2El.appendChild(td2El);
    var td3El = document.createElement('td');
    td3El.textContent = Locations.goodWithOtherCats;
    tr3El.appendChild(td3El);
    var td4El = document.createElement('td');
    td4El.textContent = Locations.goodWithOtherCats;
    tr4El.appendChild(td4El);
    var td5El = document.createElement('td');
    td5El.textContent = Locations.goodWithOtherCats;
    tr5El.appendChild(td5El);
    var td6El = document.createElement('td');
    td6El.textContent = Locations.goodWithOtherCats;
    tr6El.appendChild(td6El);
  };



  //for (var i = 0; i < places.length; i++) {










  var seattle = new Locations('seattle', '23', '65', '6.3');
  seattle.render();
  seattle. getNumcust();

  var tokyo = new Locations('Tokyo', '3', '24', '1.2');
  tokyo.render();
  tokyo. getNumcust();

  var dubai = new Locations('Dubai', '11', '38', '3.7');
  dubai.render();
  dubai. getNumcust();

  var paris = new Locations('Paris', '20', '38', '2.3');
  paris.render();
  paris. getNumcust();

  var lima = new Locations('Lima', '2', '16', '4.6');
  lima.render();
  lima. getNumcust();
  //  getNumcust : function(){
  //   for (var i = 0; i < this.hours.length; i++) {
  //     totalCustperHour.push(getNumcust(this.minCustomer,this.maxCustomer));
  //     sum+=totalCustperHour[i];
  //     console.log(totalCustperHour[i]);
  //   }
  //   console.log(sum);

  // },
  function getNumcust(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive}
  }
  //   render : function(){
  //     var container = document.getElementById('cookie-stand');
  //     var articleEl = document.createElement('article');
  //     container.appendChild(articleEl);
  //     var h2El = document.createElement('h2');
  //     articleEl.appendChild(h2El);
  //     h2El.textContent = location1.name;

  //     var ulEl = document.createElement('ul');
  //     articleEl.appendChild(ulEl);
  //     for (var i = 0; i < this.hours.length; i++){
  //       var liEl = document.createElement('li');
  //       liEl.textContent = `${this.hours[i]}    :     ${totalCustperHour[i]} cookies`;
  //       ulEl.appendChild(liEl);
  //     }
  //     liEl.textContent = `sum ${sum}`;

  //   }
  // };

  // location1. getNumcust();
  // location1.render();
  // var location2 = {
  //   hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  //   name : 'Tokyo',
  //   minCustomer: 3,
  //   maxCustomer:24,
  //   Avgcookie :1.2,

  //    getNumcust : function(){
  //     for (var i = 0; i < this.hours.length; i++) {
  //       totalCustperHour.push(getNumcust(this.minCustomert,this.maxCustomer));
  //       sum+=totalCustperHour[i];
  //       console.log(totalCustperHour[i]);
  //     }
  //   },
  //   render : function(){
  //     var container = document.getElementById('cookie-stand');
  //     var articleEl = document.createElement('article');
  //     container.appendChild(articleEl);
  //     var h3El = document.createElement('h3');
  //     articleEl.appendChild(h3El);
  //     h3El.textContent = location2.name;

  //     var ulEl = document.createElement('ul');
  //     articleEl.appendChild(ulEl);
  //     for (var i = 0; i < this.hours.length; i++){
  //       var liEl = document.createElement('li');
  //       liEl.textContent = `${this.hours[i]}   :    ${totalCustperHour[i]} cookies`;
  //       ulEl.appendChild(liEl);
  //     }
  //     liEl.textContent = `sum ${sum}`;

  //   }
  // };

  // location2. getNumcust();
  // location2.render();

  // var location3 = {
  //   hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  //   name : 'Dubai',
  //   minCustomer: 11,
  //   maxCustomer:38,
  //   Avgcookie :3.7,

  //    getNumcust : function(){
  //     for (var i = 0; i < this.hours.length; i++) {
  //       totalCustperHour.push(getNumcust(this.minCustomert,this.maxCustomer));
  //       sum+=totalCustperHour[i];
  //       console.log(totalCustperHour[i]);
  //     }
  //   },
  //   render : function(){
  //     var container = document.getElementById('cookie-stand');
  //     var articleEl = document.createElement('article');
  //     container.appendChild(articleEl);
  //     var h3El = document.createElement('h3');
  //     articleEl.appendChild(h3El);
  //     h3El.textContent = location3.name;

  //     var ulEl = document.createElement('ul');
  //     articleEl.appendChild(ulEl);
  //     for (var i = 0; i < this.hours.length; i++){
  //       var liEl = document.createElement('li');
  //       liEl.textContent = `${this.hours[i]}   :    ${totalCustperHour[i]} cookies`;
  //       ulEl.appendChild(liEl);
  //     }
  //     liEl.textContent = `sum ${sum}`;

  //   }
  // };

  // location3. getNumcust();
  // location3.render();



  // var location4 = {
  //   hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  //   name : 'Paris',
  //   minCustomer: 20,
  //   maxCustomer:38,
  //   Avgcookie :2.3,

  //    getNumcust : function(){
  //     for (var i = 0; i < this.hours.length; i++) {
  //       totalCustperHour.push(getNumcust(this.minCustomert,this.maxCustomer));
  //       sum+=totalCustperHour[i];
  //       console.log(totalCustperHour[i]);
  //     }
  //   },
  //   render : function(){
  //     var container = document.getElementById('cookie-stand');
  //     var articleEl = document.createElement('article');
  //     container.appendChild(articleEl);
  //     var h4El = document.createElement('h4');
  //     articleEl.appendChild(h4El);
  //     h4El.textContent =location4.name;

  //     var ulEl = document.createElement('ul');
  //     articleEl.appendChild(ulEl);
  //     for (var i = 0; i < this.hours.length; i++){
  //       var liEl = document.createElement('li');
  //       liEl.textContent = `${this.hours[i]}    :    ${totalCustperHour[i]} cookies`;
  //       ulEl.appendChild(liEl);
  //     }
  //     liEl.textContent = `sum ${sum}`;


  //   }
  // };

  // location4. getNumcust();
  // location4.render();


  // var location5 = {
  //   hours: ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  //   name : 'Lima',
  //   minCustomer: 20,
  //   maxCustomer:38,
  //   Avgcookie :2.3,

  //    getNumcust : function(){
  //     for (var i = 0; i < this.hours.length; i++) {
  //       totalCustperHour.push(getNumcust(this.minCustomert,this.maxCustomer));
  //       sum+=totalCustperHour[i];
  //       console.log(totalCustperHour[i]);
  //     }
  //   },
  //   render : function(){
  //     var container = document.getElementById('cookie-stand');
  //     var articleEl = document.createElement('article');
  //     container.appendChild(articleEl);
  //     var h5El = document.createElement('h5');
  //     articleEl.appendChild(h5El);
  //     h5El.textContent = location5 .name;

  //     var ulEl = document.createElement('ul');
  //     articleEl.appendChild(ulEl);
  //     for (var i = 0; i < this.hours.length; i++){
  //       var liEl = document.createElement('li');
  //       liEl.textContent = `${this.hours[i]} :    ${totalCustperHour[i]} cookies`;
  //       ulEl.appendChild(liEl);
  //     }
  //     liEl.textContent = `sum ${sum}`;
  //yyyyh

  //   }
  // };
  // location5. getNumcust();
  // location5.render();
};
