'use strict';

var Seattle = {
  min :23,
  max :65,
  AvgCookie :6.3,

  hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  numCust :[],
  getCust : function(){
    for (var i=0 ;i < this.hours.length ;i++)
      this.numCust.push(getRandomCust(this.min,this.max));
  }

};

Seattle.getCust();
console.log(Seattle.numCust);

var tokyo ={
  min :3,
  max :24,
  AvgCookie : 1.2,
  hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  numCust :[],
  getCust : function(){
    for (var i=0 ;i < this.hours.length ;i++)
      this.numCust.push(getRandomCust(this.min,this.max));
  }

};

tokyo.getCust();
console.log(tokyo.numCust);

var Dubai ={
  min :11,
  max:38,
  AvgCookie:3.7,
  hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  numCust :[],
  getCust : function(){
    for (var i=0 ;i < this.hours.length ;i++)
      this.numCust.push(getRandomCust(this.min,this.max));
  }

};

Dubai.getCust();
console.log(Dubai.numCust);

var Paris={
  min :20,
  max :38,
  AvgCookie:2.3,
  hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  numCust :[],
  getCust : function(){
    for (var i=0 ;i < this.hours.length ;i++)
      this.numCust.push(getRandomCust(this.min,this.max));
  }

};

Paris.getCust();
console.log(Paris.numCust);

var lima ={
  min :2,
  max:16,
  AvgCookie:4.6,
  hours :['6am', '7am' , '8am', '9am', '10am' , '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  numCust :[],
  getCust : function(){
    for (var i=0 ;i < this.hours.length ;i++)
      this.numCust.push(getRandomCust(this.min,this.max));
  }

};

lima.getCust();
console.log(lima.numCust);











function getRandomCust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
// not complete yet