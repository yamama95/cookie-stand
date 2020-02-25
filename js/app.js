'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// eslint-disable-next-line no-unused-vars
var places = ['seatle', 'tokyo', 'dubai', 'paris', 'lima'];

function Stores(name, minCustmer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustmer = minCustmer;
  this.maxCustomer = minCustmer;
  this.avgCookie = avgCookie;
  this.numCust = [];
  this.totalcust = 0;
}
Stores.prototype.getCust = function () {
  for (var i = 0; i < hours.length; i++) {
    Stores.numCust.push(getRandomCust(Stores.minCustmer, Stores.maxCustomer));
    // eslint-disable-next-line no-undef
    Stores.totalcust += Stores.numCust[i];
    console.log(Stores.numCust[i]);
  }
  console.log(Stores.totalcust);
};
Stores.prototype.header = function () {
  var storesContainer = document.getElementById('cookie-stand');
  var tableEl = document.createElement('table');

  storesContainer.appendChild(tableEl);
  for (var i = 0; i < places.length; i++) {
    var trEl = document.createElement('tr');

    trEl.textContent = places[i];
    tableEl.appendChild(trEl);}


  var thEl = document.createElement('th');
  thEl.textContent = places[i];
  trEl.appendChild(thEl);

  // var trEl = document.createElement('tr');

  // for (var i = 0; i < hours.length; i++) {
  // tableEl.appendChild(tdEl);

  // }


  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];

    trEl.appendChild(tdEl);
  }



  // var articleEl = document.createElement('article');
  // container.appendChild(articleEl);
  // var h2El = document.createElement('h2');
  // articleEl.appendChild(h2El);
  // h2El.textContent = Stores.name;

  // var ulEl = document.createElement('ul');
  // articleEl.appendChild(ulEl);
  // for (var i = 0; i < Stores.hours.length; i++) {
  //   var liEl = document.createElement('li');
  //   liEl.textContent = `${Stores.hours[i]} : ${Stores.numCust[i]} `;
  //   ulEl.appendChild(liEl);
};

function getRandomCust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}




// eslint-disable-next-line no-unused-vars
var seattle = new Stores('seattle', '23', '65', '6.3');
seattle.header();

// var tokyo = new Stores('Tokyo', '3', '24', '1.2');
// tokyo.header();

// var dubai = new Stores('Dubai', '11', '38', '3.7');
// dubai.header();

// var paris = new Stores('Paris', '20', '38', '2.3');
// paris.header();

// var lima = new Stores('Lima', '2', '16', '4.6');
// lima.header();


//getCust : function(){
//for (var i=0 ;i < this.hours.length ;i++)
// this.numCust.push(getRandomCust(this.min,this.max));
//},getCust


//render :function (){
//var container = document.getElementById('cookie-stand');
/// var articleEl = document.createElement('article');
// container.appendChild(articleEl);
//var h2El = document.createElement('h2');
// articleEl.appendChild(h2El);
// h2El.textContent = seattle.name;

// var ulEl = document.createElement('ul');
//articleEl.appendChild(ulEl);
//for (var i = 0; i < this.hours.length; i++){
//var liEl = document.createElement('li');
// liEl.textContent = `${this.hours[i]} `;
// ulEl.appendChild(liEl);
//}
//}
//};

//Seattle.getCust();
//console.log(Seattle.numCust);

//var tokyo ={
// name :toky,
// min :3,
// max :24,
////AvgCookie : 1.2,
//hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//numCust :[],
//getCust : function(){
//for (var i=0 ;i < this.hours.length ;i++)
//  this.numCust.push(getRandomCust(this.min,this.max));
//},


//render :function (){
// var container = document.getElementById('cookie-stand');
// var articleEl = document.createElement('article');
// container.appendChild(articleEl);
// var h2El = document.createElement('h2');
// articleEl.appendChild(h2El);
//  h2El.textContent = tokyo.name;

//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (var i = 0; i < this.hours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${this.hours[i]} `;
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// tokyo.getCust();
// console.log(tokyo.numCust);

// var Dubai ={
//   name :Dubai,
//   min :11,
//   max:38,
//   AvgCookie:3.7,
//   hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   numCust :[],
//   getCust : function(){
//     for (var i=0 ;i < this.hours.length ;i++)
//       this.numCust.push(getRandomCust(this.min,this.max));
//   },


//   render :function (){
//     var container = document.getElementById('cookie-stand');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = Dubai.name;

//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (var i = 0; i < this.hours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${this.hours[i]} `;
//       ulEl.appendChild(liEl);
//     }
//   }
// };


// Dubai.getCust();
// console.log(Dubai.numCust);

// var Paris={
//   name :Pari,
//   min :20,
//   max :38,
//   AvgCookie:2.3,
//   hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   numCust :[],
//   getCust : function(){
//     for (var i=0 ;i < this.hours.length ;i++)
//       this.numCust.push(getRandomCust(this.min,this.max));
//   },


//   render :function (){
//     var container = document.getElementById('cookie-stand');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = Paris.name;

//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (var i = 0; i < this.hours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${this.hours[i]} `;
//       ulEl.appendChild(liEl);
//     }
//   }
// };



// Paris.getCust();
// console.log(Paris.numCust);

// var lima ={
//   name : lim,
//   min :2,
//   max:16,
//   AvgCookie:4.6,
//   hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   numCust :[],
//   getCust : function(){
//     for (var i=0 ;i < this.hours.length ;i++)
//       this.numCust.push(getRandomCust(this.min,this.max));
//   },


//   render :function (){
//     var container = document.getElementById('cookie-stand');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = lima.name;

//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (var i = 0; i < this.hours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${this.hours[i]} `;
//       ulEl.appendChild(liEl);
//     }
//   }
// };


// lima.getCust();
// console.log(lima.numCust);
